import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Edwin Do Portfolio",
    short_name: "EdwinDo",
    description: "Full-stack software developer portfolio website.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f9fc",
    theme_color: "#1f6f8b",
    icons: [
      {
        src: "/icons/brand-mark.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
