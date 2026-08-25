import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ace-capital-coaching.diego681936.chatgpt.site",
      lastModified: new Date("2026-08-21"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://ace-capital-coaching.diego681936.chatgpt.site/events",
      lastModified: new Date("2026-08-21"),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://ace-capital-coaching.diego681936.chatgpt.site/online",
      lastModified: new Date("2026-08-25"),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
