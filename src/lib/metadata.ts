import type { Metadata } from "next";
import type { SiteConfig, Service, ServiceArea, BlogPost } from "@/types";

function baseUrl(config: SiteConfig): string {
  const d = config.domain.replace(/^https?:\/\//, "");
  return `https://${d}`;
}

export function generatePageMetadata(
  page: { title: string; description: string; path?: string },
  config: SiteConfig
): Metadata {
  const url = `${baseUrl(config)}${page.path ?? ""}`;

  return {
    title: `${page.title} | ${config.businessName}`,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${page.title} | ${config.businessName}`,
      description: page.description,
      url,
      siteName: config.businessName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl(config)}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${config.businessName} — ${page.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${config.businessName}`,
      description: page.description,
      images: [`${baseUrl(config)}/og-image.png`],
    },
  };
}

export function generateServiceMetadata(
  service: Service,
  config: SiteConfig
): Metadata {
  const title = `${service.name} in ${config.primaryCity}, ${config.primaryState}`;
  const description = service.description.length > 160
    ? service.description.slice(0, 157) + "..."
    : service.description;
  const url = `${baseUrl(config)}/services/${service.slug}`;

  return {
    title: `${title} | ${config.businessName}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${config.businessName}`,
      description,
      url,
      siteName: config.businessName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl(config)}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${service.name} — ${config.businessName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${config.businessName}`,
      description,
      images: [`${baseUrl(config)}/og-image.png`],
    },
  };
}

export function generateAreaMetadata(
  area: ServiceArea,
  services: Service[],
  config: SiteConfig
): Metadata {
  const title = `${config.businessName} in ${area.city}, ${area.state}`;
  const serviceNames = services.map((s) => s.name).join(", ");
  const description = `Professional ${serviceNames.toLowerCase()} in ${area.city}, ${area.state}. ${config.businessName} — ${config.yearsInBusiness}+ years of trusted service. ${config.ctaText}.`;
  const trimmedDescription = description.length > 160
    ? description.slice(0, 157) + "..."
    : description;
  const url = `${baseUrl(config)}/areas/${area.slug}`;

  return {
    title: `${title} | ${serviceNames}`,
    description: trimmedDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: trimmedDescription,
      url,
      siteName: config.businessName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${baseUrl(config)}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${config.businessName} in ${area.city}, ${area.state}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: trimmedDescription,
      images: [`${baseUrl(config)}/og-image.png`],
    },
  };
}

export function generateBlogMetadata(
  post: BlogPost,
  config: SiteConfig
): Metadata {
  const url = `${baseUrl(config)}/blog/${post.slug}`;
  const image = post.coverImage
    ? `${baseUrl(config)}${post.coverImage}`
    : `${baseUrl(config)}/og-image.png`;

  return {
    title: `${post.title} | ${config.businessName} Blog`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: config.businessName,
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}
