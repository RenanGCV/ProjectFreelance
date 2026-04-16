import { siteConfig } from "@/content/site";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.seo.title,
    short_name: siteConfig.seo.author,
    description: siteConfig.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#08001e",
    theme_color: "#8B5CF6",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
