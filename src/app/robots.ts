import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { baseUrl } from "@/lib/schema";

export default function robots(): MetadataRoute.Robots {
  const url = baseUrl(siteConfig);
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${url}/sitemap.xml`,
    host: url,
  };
}
