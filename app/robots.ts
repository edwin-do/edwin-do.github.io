import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const url = "https://edwin-do.github.io";

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${url}/sitemap.xml`
  };
}
