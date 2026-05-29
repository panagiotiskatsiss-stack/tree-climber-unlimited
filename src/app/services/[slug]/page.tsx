import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { generateServiceMetadata } from "@/lib/metadata";
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
  jsonLd,
} from "@/lib/schema";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq";
import { Button } from "@/components/ui/button";
import { CircleCheckBig, Phone, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return siteConfig.services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) return {};
  return generateServiceMetadata(service, siteConfig);
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const { phone, ctaText, businessName, primaryCity, primaryState } = siteConfig;
  const url = baseUrl(siteConfig);
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  const related = (service.relatedServiceSlugs ?? [])
    .map((s) => siteConfig.services.find((x) => x.slug === s))
    .filter(Boolean)
    .slice(0, 2) as typeof siteConfig.services;
  const otherServices = siteConfig.services.filter((s) => s.slug !== service.slug);

  const schema = jsonLd(
    generateServiceSchema(service, siteConfig),
    ...(service.faqs.length ? [generateFAQSchema(service.faqs)] : []),
    generateBreadcrumbSchema([
      { name: "Home", url: `${url}/` },
      { name: "Services", url: `${url}/services` },
      { name: service.name, url: `${url}/services/${service.slug}` },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      <PageHero
        title={`${service.name} in ${primaryCity}, ${primaryState}`}
        subtitleHtml={service.shortDescription}
        backgroundImage={service.image}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.name },
        ]}
      />

      {/* Description + benefits (image in benefits column per design system) */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl tracking-tight text-gray-900">
              Professional {service.name}
            </h2>
            <div
              className="article-content mt-4"
              dangerouslySetInnerHTML={{ __html: `<p>${service.description}</p>` }}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={phoneHref}>
                <Button className="h-12 gap-2 rounded-full px-7 font-bold uppercase tracking-wide">
                  <Phone className="size-5" />
                  {phone}
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="h-12 rounded-full px-7 font-bold uppercase tracking-wide">
                  {ctaText}
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl shadow-[var(--shadow-natural)]">
              <Image
                src={service.image}
                alt={`${service.name} in ${primaryCity}, ${primaryState} by ${businessName}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <h3 className="font-heading text-xl tracking-tight text-gray-900">
              Benefits of Our {service.name}
            </h3>
            <ul className="mt-5 space-y-3.5">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CircleCheckBig className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title={`Need ${service.name}? Call Today`}
        subtitle={`Free estimates for ${service.name.toLowerCase()} in ${primaryCity}, ${primaryState}. Fast, reliable, fully insured.`}
      />

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <FAQSection
          faqs={service.faqs}
          title={`${service.name} — Questions & Answers`}
          subtitle={`What ${primaryCity} homeowners ask us most about ${service.name.toLowerCase()}.`}
        />
      )}

      {/* Cluster: related services */}
      {related.length > 0 && (
        <section className="bg-muted py-14">
          <div className="container-site">
            <h2 className="text-center font-heading text-2xl tracking-tight text-gray-900">
              Related Services
            </h2>
            <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  title={`${s.name} in ${primaryCity}, ${primaryState} — ${businessName}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-natural)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-deep)]"
                >
                  <div className="relative aspect-[16/9]">
                    <Image src={s.image} alt={`${s.name} in ${primaryCity}, ${primaryState}`} fill sizes="50vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg tracking-tight text-gray-900 group-hover:text-primary">
                      {s.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-gray-600">{s.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All other services (internal linking) */}
      <section className="bg-white py-12">
        <div className="container-site">
          <p className="mb-5 text-center text-sm font-bold uppercase tracking-widest text-gray-500">
            All Services
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                title={`${s.name} — ${businessName}`}
                className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary"
              >
                {s.name}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Get Started?`}
        subtitle={`Contact ${businessName} today for free, no-obligation ${service.name.toLowerCase()} in ${primaryCity}.`}
      />
    </>
  );
}
