import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateFAQSchema,
  jsonLd,
} from "@/lib/schema";

import { Hero } from "@/components/sections/hero";
import { ReviewBar } from "@/components/sections/review-bar";
import { Certifications } from "@/components/sections/certifications";
import { AboutPreview } from "@/components/sections/about-preview";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { SpecialOffers } from "@/components/sections/special-offers";
import { CTASection } from "@/components/sections/cta-section";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FAQSection } from "@/components/sections/faq";
import { ServiceAreas } from "@/components/sections/service-areas";

export const metadata: Metadata = generatePageMetadata(
  {
    title: `Tree Service in ${siteConfig.primaryCity}, ${siteConfig.primaryState}`,
    description: `${siteConfig.businessName} — licensed, insured tree removal, trimming & stump grinding in ${siteConfig.primaryCity}, ${siteConfig.primaryState}. Free estimates, ${siteConfig.yearsInBusiness}+ years experience, same-day emergency service. Call ${siteConfig.phone}.`,
    path: "/",
  },
  siteConfig
);

export default function HomePage() {
  const schema = jsonLd(
    generateLocalBusinessSchema(siteConfig),
    generateOrganizationSchema(siteConfig),
    generateWebSiteSchema(siteConfig),
    generateFAQSchema(siteConfig.faqs)
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      {/* 3 */}
      <Hero
        title={`Expert Tree Service in ${siteConfig.primaryCity}, ${siteConfig.primaryState}`}
        subtitleHtml={`<strong>Licensed &amp; insured</strong> tree removal, trimming, and stump grinding — backed by ${siteConfig.yearsInBusiness}+ years of trusted local service. <strong>Free estimates</strong>, fast response, spotless cleanup.`}
      />
      {/* 4 */}
      <ReviewBar />
      {/* 5 */}
      <Certifications />
      {/* 6 */}
      <AboutPreview />
      {/* 7 */}
      <ServicesGrid />
      {/* 8 */}
      <WhyChooseUs />
      {/* 9 */}
      <Portfolio />
      {/* 10 */}
      <Process />
      {/* 11 */}
      <Testimonials />
      {/* 12 */}
      <SpecialOffers />
      {/* mid-page CTA */}
      <CTASection
        title="Ready to Reclaim Your Yard?"
        subtitle={`Get a free, no-obligation estimate from ${siteConfig.primaryCity}'s most trusted tree care crew.`}
      />
      {/* 13 */}
      <BlogPreview />
      {/* 14 */}
      <FAQSection
        faqs={siteConfig.faqs}
        subtitle="Answers to the questions we hear most from local homeowners."
      />
      {/* 15 */}
      <ServiceAreas />
      {/* 16 — final CTA */}
      <CTASection
        title="Get Your Free Estimate Today"
        subtitle={`Call ${siteConfig.businessName} now or request a quote online — we respond fast.`}
      />
    </>
  );
}
