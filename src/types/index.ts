// =============================================================
// Type contract for the contractor template. site-config.ts is
// the single source of truth and must satisfy SiteConfig.
// =============================================================

export interface FAQ {
  question: string;
  /** Supports inline HTML (e.g. <strong>) — rendered via dangerouslySetInnerHTML for SEO. */
  answer: string;
}

export interface Service {
  name: string;
  slug: string;
  /** 1–2 sentence punchy version for grids/cards. */
  shortDescription: string;
  /** Full 200–300 word version for the service detail page. */
  description: string;
  /** Card/hero image for this service. */
  image: string;
  benefits: string[];
  faqs: FAQ[];
  /** Cluster internal-linking (pass 2): related service slugs + blog post slugs. */
  relatedServiceSlugs?: string[];
  relatedPostSlugs?: string[];
}

export interface ServiceArea {
  city: string;
  state: string;
  zipCode: string;
  slug: string;
  /** County/region grouping — drives unique area-page intro copy (anti-boilerplate). */
  county?: string;
  image?: string;
}

export interface Testimonial {
  name: string;
  city: string;
  text: string;
  /** Platform the review came from — shown as attribution. */
  source?: "Google" | "Facebook" | "Yelp" | "BBB";
  rating?: number;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  coverImage?: string;
}

/** A single review platform's aggregate stats (drives hero review pills). */
export interface ReviewPlatform {
  rating: string; // e.g. "5.0"
  count: number; // e.g. 24
  url: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface Differentiator {
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface SpecialOffer {
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface Certification {
  name: string;
  logo: string;
}

export interface PortfolioItem {
  image: string;
  alt: string;
  caption: string;
}

export interface BeforeAfter {
  before: string;
  after: string;
  caption: string;
}

export interface SiteConfig {
  // --- Identity ---
  businessName: string;
  tagline: string;
  phone: string;
  email: string;
  domain: string;
  logo: string;
  ownerPhoto: string;
  videoUrl: string;

  // --- Location ---
  primaryCity: string;
  primaryState: string;
  address: { street: string; city: string; state: string; zip: string };
  /** Geo coordinates — required for LocalBusiness schema. */
  geo: { latitude: number; longitude: number };
  businessHours: { days: string; hours: string };

  // --- Trust / positioning ---
  yearsInBusiness: number;
  ctaText: string;
  showPricing: boolean;
  guarantees: string[];
  usps: string[];
  whyChooseUs: string[];
  targetCustomer: string;
  /** 3 short hero trust badges (icon label pairs). */
  heroBadges: { icon: string; label: string }[];

  // --- Reviews ---
  googleBusinessProfileUrl: string;
  reviews: {
    google?: ReviewPlatform;
    facebook?: ReviewPlatform;
    yelp?: ReviewPlatform;
    bbb?: { grade: string; url: string };
  };
  /** Combined rating for AggregateRating schema. */
  aggregateRating: { ratingValue: string; reviewCount: number };

  // --- Content collections ---
  services: Service[];
  serviceAreas: ServiceArea[];
  testimonials: Testimonial[];
  processSteps: ProcessStep[];
  differentiators: Differentiator[];
  specialOffers: SpecialOffer[];
  certifications: Certification[];
  portfolio: PortfolioItem[];
  beforeAfterPhotos: BeforeAfter[];

  // --- Homepage FAQ (separate from per-service FAQs) ---
  faqs: FAQ[];

  // --- Brand / theming hints (CSS is source of truth; these are for reference/schema) ---
  colors: { primary: string; secondary: string };

  // --- Social ---
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    twitter?: string;
    linkedin?: string;
    yelp?: string;
    nextdoor?: string;
  };

  // --- Top bar ---
  topBar: { announcement?: string };
}
