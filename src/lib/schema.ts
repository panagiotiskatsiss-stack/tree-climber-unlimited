import type { SiteConfig, Service, FAQ, BlogPost } from "@/types";

function baseUrl(config: SiteConfig): string {
  const d = config.domain.replace(/^https?:\/\//, "");
  return `https://${d}`;
}

export function generateLocalBusinessSchema(config: SiteConfig) {
  const url = baseUrl(config);
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: config.businessName,
    description: config.tagline,
    url,
    telephone: config.phone,
    email: config.email,
    image: `${url}${config.logo}`,
    logo: `${url}${config.logo}`,
    foundingDate: new Date().getFullYear() - config.yearsInBusiness,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.address.street,
      addressLocality: config.address.city,
      addressRegion: config.address.state,
      postalCode: config.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.1960",
      longitude: "-120.6802",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: config.businessHours.days
        .split(" - ")
        .map((day) => day.trim()),
      opens: config.businessHours.hours.split(" - ")[0]?.trim() ?? "",
      closes: config.businessHours.hours.split(" - ")[1]?.trim() ?? "",
    },
    areaServed: config.serviceAreas.map((area) => ({
      "@type": "City",
      name: area.city,
      addressRegion: area.state,
    })),
    sameAs: Object.values(config.socialLinks).filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${config.businessName} Services`,
      itemListElement: config.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: `${url}/services/${service.slug}`,
        },
      })),
    },
    aggregateRating: config.testimonials.length > 0
      ? {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: String(config.testimonials.length),
          bestRating: "5",
          worstRating: "1",
        }
      : undefined,
    review: config.testimonials.map((testimonial) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.name,
      },
      reviewBody: testimonial.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
    })),
  };
}

export function generateServiceSchema(service: Service, config: SiteConfig) {
  const siteUrl = baseUrl(config);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${siteUrl}/services/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: config.businessName,
      telephone: config.phone,
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: config.address.street,
        addressLocality: config.address.city,
        addressRegion: config.address.state,
        postalCode: config.address.zip,
        addressCountry: "US",
      },
    },
    areaServed: config.serviceAreas.map((area) => ({
      "@type": "City",
      name: area.city,
      addressRegion: area.state,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.benefits.map((benefit) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: benefit,
        },
      })),
    },
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(post: BlogPost, config: SiteConfig) {
  const siteUrl = baseUrl(config);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: config.businessName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: config.businessName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    ...(post.coverImage
      ? { image: `${siteUrl}${post.coverImage}` }
      : {}),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
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
