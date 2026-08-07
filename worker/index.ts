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

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/registration") {
      if (request.method !== "POST") {
        return Response.json({ ok: false, error: "Method not allowed" }, {
          status: 405,
          headers: { Allow: "POST", "Cache-Control": "no-store" },
        });
      }

      if (!env.GHL_WEBHOOK_URL) {
        return Response.json({ ok: false, error: "Registration service unavailable" }, {
          status: 503,
          headers: { "Cache-Control": "no-store" },
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
            headers: { "Cache-Control": "no-store" },
          });
        }

        const webhookResponse = await fetch(env.GHL_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...payload,
            received_at: new Date().toISOString(),
          }),
        });

        if (!webhookResponse.ok) {
          return Response.json({ ok: false, error: "Webhook rejected registration" }, {
            status: 502,
            headers: { "Cache-Control": "no-store" },
          });
        }

        return Response.json({ ok: true }, {
          status: 200,
          headers: { "Cache-Control": "no-store" },
        });
      } catch {
        return Response.json({ ok: false, error: "Invalid registration request" }, {
          status: 400,
          headers: { "Cache-Control": "no-store" },
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
