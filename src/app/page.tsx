import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";

import { Hero } from "@/components/sections/hero";
import { TrustBadges } from "@/components/sections/trust-badges";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyChoose } from "@/components/sections/why-choose";
import { Portfolio } from "@/components/sections/portfolio";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { ServiceAreas } from "@/components/sections/service-areas";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = generatePageMetadata(
  {
    title: `${siteConfig.businessName} — Tree Service in ${siteConfig.primaryCity}, ${siteConfig.primaryState}`,
    description: `${siteConfig.businessName} provides professional tree removal, pruning, stump grinding, and emergency tree services in ${siteConfig.primaryCity}, ${siteConfig.primaryState}. ${siteConfig.yearsInBusiness}+ years of trusted service. Call ${siteConfig.phone}.`,
    path: "/",
  },
  siteConfig
);

/* Homepage FAQs — pulled from across services for variety */
const homepageFAQs = [
  {
    question: "How much does tree removal cost in Central California?",
    answer: "Every tree is different, so pricing depends on the size, location, and condition of the tree. Removal starts at $500 and goes up from there. We provide free on-site estimates so you know exactly what to expect — no surprises. Give us a call at (209) 660-3450 to schedule yours.",
  },
  {
    question: "Do you offer emergency tree removal services?",
    answer: "Yes. When a storm rolls through Central California and a tree comes crashing down, we respond as quickly as possible — often the same day. Call us at (209) 660-3450 for urgent situations.",
  },
  {
    question: "Is Tree Climber Unlimited licensed and insured?",
    answer: "Yes. We are fully licensed and insured, so you can have complete peace of mind knowing your property and our crew are protected on every job.",
  },
  {
    question: "How deep does stump grinding go?",
    answer: "We grind stumps 6 to 12 inches below ground level, which is deep enough to cover with topsoil and plant grass or landscaping over the area. Your yard will look like the stump was never there.",
  },
  {
    question: "How do I know if a tree on my property is hazardous?",
    answer: "Warning signs include a noticeable lean, large dead branches, cracks or splits in the trunk, visible root damage, and fungal growth at the base. If something about a tree looks off to you, it's worth having us take a look. We offer free assessments.",
  },
  {
    question: "What areas does Tree Climber Unlimited cover?",
    answer: "We proudly serve San Andreas, CA and the entire Central California region — Calaveras, Amador, Tuolumne, San Joaquin, Stanislaus, Merced, and Mariposa counties, from the Sierra Foothills to the Central Valley.",
  },
  {
    question: "Will you try to sell me services I don't need?",
    answer: "Absolutely not. Our goal is to build a lasting relationship so you'll never have to search for another tree service. We'll tell you exactly what we see and give you an honest recommendation. If your trees are healthy, we'll be the first to tell you.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — 2-col with inline form + glass review badges */}
      <Hero
        title="Professional Tree Service in San Andreas, CA"
        subtitle="Expert tree removal, trimming, stump grinding, and emergency tree services. 15 years of experience, trained and qualified in all aspects of tree work. Free estimates — removal starts at $500."
        backgroundImage="/images/hero/hero-bg.jpg"
        showForm
        showBadges
      />

      {/* 2. Trust Badges */}
      <TrustBadges variant="light" />

      {/* 3. Services Grid — Dark section */}
      <ServicesGrid />

      {/* 4. Mid-Page CTA */}
      <CTASection
        title="Need a Tree Taken Care Of?"
        subtitle="Call us today for a free, no-obligation estimate. We serve San Andreas and communities throughout Central California."
      />

      {/* 5. Why Choose Us */}
      <WhyChoose />

      {/* 6. Portfolio / Before & After */}
      <Portfolio />

      {/* 7. Process Steps — Dark section */}
      <ProcessSteps />

      {/* 8. Testimonials — Dark section */}
      <Testimonials />

      {/* 9. FAQ Accordion — Dark section */}
      <FAQSection faqs={homepageFAQs} />

      {/* 10. Service Areas + Map */}
      <ServiceAreas />

      {/* 11. Final CTA — Dark with background */}
      <CTASection
        title="Get Your Free Estimate Today"
        subtitle="Don't wait — call Tree Climber Unlimited now or fill out our contact form. We respond fast."
        variant="dark"
        backgroundImage="/images/hero/hero-bg.jpg"
      />
    </>
  );
}
