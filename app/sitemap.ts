import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: "https://ace-capital-coaching.diego681936.chatgpt.site",
    lastModified: new Date("2026-08-09"),
    changeFrequency: "weekly",
    priority: 1,
  }];
}
