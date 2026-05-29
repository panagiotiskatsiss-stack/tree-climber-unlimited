import type { Metadata } from "next";
import type { SiteConfig, Service, ServiceArea, BlogPost } from "@/types";
import { baseUrl } from "@/lib/schema";

function clamp(s: string, max: number): string {
  return s.length > max ? s.slice(0, max - 1).trimEnd() + "…" : s;
}

function buildMetadata(
  config: SiteConfig,
  {
    title,
    description,
    path,
    image,
    type = "website",
    publishedTime,
  }: {
    title: string;
    description: string;
    path: string;
    image?: string;
    type?: "website" | "article";
    publishedTime?: string;
  }
): Metadata {
  const url = `${baseUrl(config)}${path}`;
  const ogImage = image
    ? `${baseUrl(config)}${image}`
    : `${baseUrl(config)}/og-image.png`;

  return {
    title,
    description: clamp(description, 160),
    alternates: { canonical: url },
    openGraph: {
      title,
      description: clamp(description, 160),
      url,
      siteName: config.businessName,
      locale: "en_US",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: clamp(description, 160),
      images: [ogImage],
    },
  };
}

/** Generic page (title is keyword-front-loaded; description is ad copy, not body truncation). */
export function generatePageMetadata(
  page: { title: string; description: string; path?: string; image?: string },
  config: SiteConfig
): Metadata {
  return buildMetadata(config, {
    title: `${page.title} | ${config.businessName}`,
    description: page.description,
    path: page.path ?? "",
    image: page.image,
  });
}

export function generateServiceMetadata(service: Service, config: SiteConfig): Metadata {
  const title = `${service.name} in ${config.primaryCity}, ${config.primaryState} | ${config.businessName}`;
  const description = `${service.shortDescription} Serving ${config.primaryCity}, ${config.primaryState} — free estimates from ${config.businessName}. Call ${config.phone}.`;
  return buildMetadata(config, {
    title: clamp(title, 60),
    description,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export function generateAreaMetadata(area: ServiceArea, config: SiteConfig): Metadata {
  // Location-first phrasing so it doesn't collide with the homepage title
  // (which targets the primary city as "Tree Service in {city}").
  const title = `${area.city}, ${area.state} Tree Service | ${config.businessName}`;
  const description = `Professional, licensed tree service in ${area.city}, ${area.state}. ${config.businessName} offers free estimates, fast response, and ${config.yearsInBusiness}+ years of trusted local experience. Call ${config.phone}.`;
  return buildMetadata(config, {
    title: clamp(title, 60),
    description,
    path: `/areas/${area.slug}`,
    image: area.image,
  });
}

export function generateBlogMetadata(post: BlogPost, config: SiteConfig): Metadata {
  // Post titles are already keyword-rich; only append brand when the FULL
  // title stays within the ~60-char SERP limit.
  const branded = `${post.title} | ${config.businessName}`;
  const title = branded.length <= 60 ? branded : clamp(post.title, 60);
  return buildMetadata(config, {
    title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
    type: "article",
    publishedTime: post.date,
  });
}
