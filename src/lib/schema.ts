import type { SiteConfig, Service, FAQ } from "@/types";

export function baseUrl(config: SiteConfig): string {
  const d = config.domain.replace(/^https?:\/\//, "");
  return `https://${d}`;
}

/** Strip inline HTML so schema text fields are clean (answers may contain <strong>). */
function stripHtml(s: string): string {
  return s.replace(/<[^>]*>/g, "").trim();
}

function postalAddress(config: SiteConfig) {
  return {
    "@type": "PostalAddress",
    streetAddress: config.address.street,
    addressLocality: config.address.city,
    addressRegion: config.address.state,
    postalCode: config.address.zip,
    addressCountry: "US",
  };
}

function areaServed(config: SiteConfig) {
  return config.serviceAreas.map((area) => ({
    "@type": "City",
    name: area.city,
    addressRegion: area.state,
  }));
}

export function generateLocalBusinessSchema(config: SiteConfig) {
  const url = baseUrl(config);
  const [opens, closes] = config.businessHours.hours.split(/\s*[–-]\s*/);
  const days = config.businessHours.days.split(/\s*[–-]\s*/).map((d) => d.trim());

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#business`,
    name: config.businessName,
    description: config.tagline,
    url,
    telephone: config.phone,
    email: config.email,
    image: `${url}${config.logo}`,
    logo: `${url}${config.logo}`,
    priceRange: "$$",
    foundingDate: String(new Date().getFullYear() - config.yearsInBusiness),
    address: postalAddress(config),
    geo: {
      "@type": "GeoCoordinates",
      latitude: config.geo.latitude,
      longitude: config.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: days,
      opens: opens?.trim() ?? "",
      closes: closes?.trim() ?? "",
    },
    areaServed: areaServed(config),
    sameAs: [config.googleBusinessProfileUrl, ...Object.values(config.socialLinks)].filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${config.businessName} Services`,
      itemListElement: config.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: stripHtml(service.shortDescription),
          url: `${url}/services/${service.slug}`,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: config.aggregateRating.ratingValue,
      reviewCount: String(config.aggregateRating.reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
    review: config.testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewBody: t.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.rating ?? 5),
        bestRating: "5",
        worstRating: "1",
      },
    })),
  };
}

/** LocalBusiness scoped to a single city (for area/city pages). */
export function generateAreaLocalBusinessSchema(
  area: { city: string; state: string },
  config: SiteConfig
) {
  const url = baseUrl(config);
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${config.businessName} — ${area.city}, ${area.state}`,
    description: `Professional tree service in ${area.city}, ${area.state}.`,
    url: `${url}/areas/${area.city.toLowerCase().replace(/\s+/g, "-")}-${area.state.toLowerCase()}`,
    telephone: config.phone,
    email: config.email,
    image: `${url}${config.logo}`,
    address: postalAddress(config),
    geo: {
      "@type": "GeoCoordinates",
      latitude: config.geo.latitude,
      longitude: config.geo.longitude,
    },
    areaServed: { "@type": "City", name: area.city, addressRegion: area.state },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: config.aggregateRating.ratingValue,
      reviewCount: String(config.aggregateRating.reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function generateOrganizationSchema(config: SiteConfig) {
  const url = baseUrl(config);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}/#organization`,
    name: config.businessName,
    url,
    logo: `${url}${config.logo}`,
    telephone: config.phone,
    email: config.email,
    address: postalAddress(config),
    sameAs: [config.googleBusinessProfileUrl, ...Object.values(config.socialLinks)].filter(Boolean),
  };
}

export function generateWebSiteSchema(config: SiteConfig) {
  const url = baseUrl(config);
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name: config.businessName,
    url,
    publisher: { "@id": `${url}/#organization` },
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: stripHtml(faq.answer) },
    })),
  };
}

export function generateServiceSchema(service: Service, config: SiteConfig) {
  const url = baseUrl(config);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: stripHtml(service.description),
    url: `${url}/services/${service.slug}`,
    provider: { "@id": `${url}/#business` },
    areaServed: areaServed(config),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.benefits.map((benefit) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: benefit },
      })),
    },
  };
}

export function generateArticleSchema(
  post: { title: string; excerpt: string; slug: string; date: string; coverImage?: string },
  config: SiteConfig
) {
  const url = baseUrl(config);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage ? `${url}${post.coverImage}` : `${url}/og-image.png`,
    datePublished: post.date,
    dateModified: post.date,
    url: `${url}/blog/${post.slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}/blog/${post.slug}` },
    author: { "@type": "Organization", name: config.businessName, url },
    publisher: {
      "@type": "Organization",
      name: config.businessName,
      logo: { "@type": "ImageObject", url: `${url}${config.logo}` },
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Render an array of schema objects as a single JSON-LD script tag payload. */
export function jsonLd(...schemas: object[]): string {
  return JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
}
