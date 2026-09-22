import type { MetadataRoute } from "next";

const SITE_URL = "https://www.ahmad-hassan.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
