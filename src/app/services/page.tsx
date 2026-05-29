import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, baseUrl, jsonLd } from "@/lib/schema";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = generatePageMetadata(
  {
    title: `Tree Care Services in ${siteConfig.primaryCity}, ${siteConfig.primaryState}`,
    description: `Explore the full range of ${siteConfig.businessName} tree care services — removal, trimming, stump grinding, storm cleanup & lot clearing in ${siteConfig.primaryCity}, ${siteConfig.primaryState}. Free estimates. Call ${siteConfig.phone}.`,
    path: "/services",
  },
  siteConfig
);

export default function ServicesPage() {
  const { services, primaryCity, primaryState, businessName } = siteConfig;
  const url = baseUrl(siteConfig);

  const schema = jsonLd(
    generateBreadcrumbSchema([
      { name: "Home", url: `${url}/` },
      { name: "Services", url: `${url}/services` },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      <PageHero
        title="Our Tree Care Services"
        subtitleHtml={`Full-service, <strong>licensed &amp; insured</strong> tree care for homes and businesses across ${primaryCity}, ${primaryState} and the surrounding area.`}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-site grid gap-8">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className={`grid items-center gap-8 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[var(--shadow-natural)]">
                <Image
                  src={service.image}
                  alt={`${service.name} in ${primaryCity}, ${primaryState}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-heading text-2xl tracking-tight text-gray-900 sm:text-3xl">
                  {service.name}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-gray-600">
                  {service.shortDescription}
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {service.benefits.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  title={`${service.name} in ${primaryCity}, ${primaryState} — ${businessName}`}
                  className="group mt-5 inline-flex items-center gap-2 font-bold uppercase tracking-wide text-primary"
                >
                  Learn About {service.name}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Not Sure Which Service You Need?"
        subtitle={`Call ${businessName} for a free on-site assessment — we'll tell you exactly what your property needs.`}
      />
    </>
  );
}
