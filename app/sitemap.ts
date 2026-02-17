import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = "https://edwin-do.github.io";

  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
