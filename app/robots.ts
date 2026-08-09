import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ace-capital-coaching.diego681936.chatgpt.site/sitemap.xml",
    host: "https://ace-capital-coaching.diego681936.chatgpt.site",
  };
}
