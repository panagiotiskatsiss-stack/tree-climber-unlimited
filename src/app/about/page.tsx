import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  baseUrl,
  jsonLd,
} from "@/lib/schema";
import { getIcon } from "@/lib/icons";
import { PageHero } from "@/components/sections/page-hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Certifications } from "@/components/sections/certifications";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = generatePageMetadata(
  {
    title: `About Us — ${siteConfig.primaryCity}, ${siteConfig.primaryState} Tree Care`,
    description: `Meet ${siteConfig.businessName} — locally owned, licensed & insured tree care experts serving ${siteConfig.primaryCity}, ${siteConfig.primaryState} for ${siteConfig.yearsInBusiness}+ years. ISA Certified Arborists you can trust.`,
    path: "/about",
  },
  siteConfig
);

export default function AboutPage() {
  const {
    businessName,
    yearsInBusiness,
    primaryCity,
    primaryState,
    ownerPhoto,
    whyChooseUs,
    guarantees,
    aggregateRating,
    targetCustomer,
  } = siteConfig;
  const url = baseUrl(siteConfig);
  const Check = getIcon("CircleCheckBig");

  const schema = jsonLd(
    generateLocalBusinessSchema(siteConfig),
    generateBreadcrumbSchema([
      { name: "Home", url: `${url}/` },
      { name: "About", url: `${url}/about` },
    ])
  );

  const stats = [
    { value: `${yearsInBusiness}+`, label: "Years in Business" },
    { value: aggregateRating.ratingValue, label: "Average Rating" },
    { value: `${aggregateRating.reviewCount}+`, label: "Happy Customers" },
    { value: "100%", label: "Licensed & Insured" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      <PageHero
        title={`About ${businessName}`}
        subtitleHtml={`Locally owned, <strong>licensed &amp; insured</strong> tree care — proudly serving ${primaryCity}, ${primaryState} for over ${yearsInBusiness} years.`}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
      />

      {/* Story */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-natural)]">
            <Image
              src={ownerPhoto}
              alt={`${businessName} owner and crew in ${primaryCity}, ${primaryState}`}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl tracking-tight text-gray-900">Our Story</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {businessName} was built on a simple idea: treat every customer&apos;s property like
              our own. For over <strong className="font-semibold text-gray-900">{yearsInBusiness} years</strong>,
              we&apos;ve been the team {primaryCity} homeowners call for safe, professional tree care
              — from routine trimming to emergency storm cleanup.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We&apos;re a locally owned and operated business with ISA Certified Arborists on staff,
              full insurance coverage, and a reputation built one satisfied neighbor at a time. {targetCustomer}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {whyChooseUs.map((r) => (
                <li key={r} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-gray-700">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-brand-dark py-12">
        <div className="container-site grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading text-4xl text-primary sm:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gray-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Certifications />
      <WhyChooseUs />

      {/* Guarantees */}
      <section className="bg-white py-16">
        <div className="container-site">
          <h2 className="text-center font-heading text-3xl tracking-tight text-gray-900">
            Our Promise to You
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
            {guarantees.map((g) => (
              <div key={g} className="rounded-2xl border border-primary/15 bg-primary/5 p-6 text-center">
                <Check className="mx-auto size-8 text-primary" />
                <p className="mt-3 font-semibold text-gray-900">{g}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With a Team You Can Trust?"
        subtitle={`Call ${businessName} today for a free estimate from ${primaryCity}'s trusted arborists.`}
      />
    </>
  );
}
