export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  benefits: string[];
  faqs: FAQ[];
}

export interface ServiceArea {
  city: string;
  state: string;
  zipCode: string;
  slug: string;
  image: string;
}

export interface Testimonial {
  name: string;
  city: string;
  text: string;
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

export interface SiteConfig {
  businessName: string;
  tagline: string;
  phone: string;
  email: string;
  domain: string;
  services: Service[];
  serviceAreas: ServiceArea[];
  testimonials: Testimonial[];
  guarantees: string[];
  yearsInBusiness: number;
  usps: string[];
  ctaText: string;
  showPricing: boolean;
  googleBusinessProfileUrl: string;
  ownerPhoto: string;
  logo: string;
  beforeAfterPhotos: { before: string; after: string; caption: string }[];
  videoUrl: string;
  colors: {
    primary: string;
    secondary: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    twitter?: string;
    linkedin?: string;
    yelp?: string;
    nextdoor?: string;
  };
  primaryCity: string;
  primaryState: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  businessHours: {
    days: string;
    hours: string;
  };
  targetCustomer: string;
  whyChooseUs: string[];
}
