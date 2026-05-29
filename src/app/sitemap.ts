import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { baseUrl } from "@/lib/schema";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = baseUrl(siteConfig);
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: `${url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${url}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${url}/areas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${url}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${url}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  siteConfig.services.forEach((s) =>
    entries.push({ url: `${url}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 })
  );
  siteConfig.serviceAreas.forEach((a) =>
    entries.push({ url: `${url}/areas/${a.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 })
  );
  getAllPosts().forEach((p) =>
    entries.push({
      url: `${url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly",
      priority: 0.6,
    })
  );

  return entries;
}
