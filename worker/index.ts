/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  GHL_WEBHOOK_URL: string;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const RETRYABLE_WEBHOOK_STATUSES = new Set([408, 409, 425, 429, 500, 502, 503, 504]);

function resolveWebhookUrl(env: Env | undefined) {
  const nodeRuntimeUrl = typeof process !== "undefined" ? process.env.GHL_WEBHOOK_URL : undefined;
  return env?.GHL_WEBHOOK_URL || nodeRuntimeUrl || "";
}

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function deliverRegistration(webhookUrl: string, payload: Record<string, unknown>) {
  let lastStatus = 0;
  let lastError = "Webhook request failed";

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Registration-Id": String(payload.registration_id ?? ""),
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      lastStatus = response.status;
      if (response.ok) return { ok: true, status: response.status };

      lastError = `Webhook returned ${response.status}`;
      if (!RETRYABLE_WEBHOOK_STATUSES.has(response.status)) break;
    } catch (error) {
      lastError = error instanceof Error ? error.name : "Webhook request failed";
    } finally {
      clearTimeout(timeout);
    }

    if (attempt < 3) await wait(attempt * 350);
  }

  return { ok: false, status: lastStatus, error: lastError };
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/registration") {
      const requestId = request.headers.get("x-registration-id") || crypto.randomUUID();
      const webhookUrl = resolveWebhookUrl(env);

      if (request.method !== "POST") {
        return Response.json({ ok: false, error: "Method not allowed" }, {
          status: 405,
          headers: { Allow: "POST", "Cache-Control": "no-store", "X-Request-Id": requestId },
        });
      }

      if (!webhookUrl) {
        return Response.json({ ok: false, error: "Registration service unavailable" }, {
          status: 503,
          headers: { "Cache-Control": "no-store", "X-Request-Id": requestId },
        });
      }

      try {
        const payload = await request.json<Record<string, unknown>>();
        const requiredFields = [
          "first_name",
          "last_name",
          "email",
          "phone",
          "program",
          "currently_in_business",
          "georgia_address",
          "gender",
          "ethnicity",
          "race",
          "military_status",
        ];
        const missingFields = requiredFields.filter((field) => {
          const value = payload[field];
          return typeof value !== "string" || value.trim() === "";
        });

        if (missingFields.length > 0) {
          return Response.json({ ok: false, error: "Missing required fields" }, {
            status: 400,
            headers: { "Cache-Control": "no-store", "X-Request-Id": requestId },
          });
        }

        const delivery = await deliverRegistration(webhookUrl, {
          ...payload,
          registration_id: String(payload.registration_id || requestId),
          received_at: new Date().toISOString(),
        });

        if (!delivery.ok) {
          console.error("ACE registration delivery failed", {
            requestId,
            downstreamStatus: delivery.status,
            reason: delivery.error,
          });
          return Response.json({ ok: false, error: "Registration delivery failed", request_id: requestId }, {
            status: 502,
            headers: { "Cache-Control": "no-store", "X-Request-Id": requestId },
          });
        }

        return Response.json({ ok: true, request_id: requestId }, {
          status: 200,
          headers: { "Cache-Control": "no-store", "X-Request-Id": requestId },
        });
      } catch (error) {
        console.error("ACE registration request failed", {
          requestId,
          reason: error instanceof Error ? error.name : "Unknown error",
        });
        return Response.json({ ok: false, error: "Invalid registration request", request_id: requestId }, {
          status: 400,
          headers: { "Cache-Control": "no-store", "X-Request-Id": requestId },
        });
      }
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
