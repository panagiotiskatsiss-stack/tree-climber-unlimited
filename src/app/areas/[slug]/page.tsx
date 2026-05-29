import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { generateAreaMetadata } from "@/lib/metadata";
import {
  generateAreaLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
  jsonLd,
} from "@/lib/schema";
import { getAreaIntro, getAreaFaqs, getNearbyAreas } from "@/lib/areas";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone } from "lucide-react";

export function generateStaticParams() {
  return siteConfig.serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = siteConfig.serviceAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return generateAreaMetadata(area, siteConfig);
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = siteConfig.serviceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const { businessName, services, phone } = siteConfig;
  const url = baseUrl(siteConfig);
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  const intro = getAreaIntro(area, siteConfig);
  const faqs = getAreaFaqs(area, siteConfig);
  const nearby = getNearbyAreas(area, siteConfig);

  const schema = jsonLd(
    generateAreaLocalBusinessSchema(area, siteConfig),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Home", url: `${url}/` },
      { name: "Service Areas", url: `${url}/areas` },
      { name: `${area.city}, ${area.state}`, url: `${url}/areas/${area.slug}` },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      <PageHero
        title={`Tree Service in ${area.city}, ${area.state}`}
        subtitleHtml={`Licensed, insured tree care for ${area.city}${area.county ? ` and all of ${area.county}` : ""} — <strong>free estimates</strong> and fast response.`}
        backgroundImage={area.image}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/areas" },
          { name: `${area.city}, ${area.state}` },
        ]}
      />

      {/* Localized intro + sidebar */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            <h2 className="font-heading text-3xl tracking-tight text-gray-900">
              Your Local Tree Experts in {area.city}
            </h2>
            <div className="article-content mt-4" dangerouslySetInnerHTML={{ __html: intro }} />

            {/* Services offered here (internal links) */}
            <h3 className="mt-10 font-heading text-xl tracking-tight text-gray-900">
              Our Services in {area.city}
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  title={`${s.name} in ${area.city}, ${area.state} — ${businessName}`}
                  className="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-primary"
                >
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-gray-900 group-hover:text-primary">
                      {s.name}
                    </span>
                    <span className="mt-0.5 block text-sm text-gray-600">{s.shortDescription}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-[var(--shadow-natural)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={area.image ?? "/images/areas/area-1.png"}
                  alt={`Tree service in ${area.city}, ${area.state} neighborhood`}
                  fill
                  sizes="340px"
                  className="object-cover"
                />
              </div>
              <div className="bg-brand-dark p-6 text-center text-white">
                <p className="font-heading text-xl tracking-tight">Serving {area.city}</p>
                <p className="mt-1 text-sm text-gray-300">
                  {area.county ?? `${area.state}`} · {siteConfig.yearsInBusiness}+ years
                </p>
                <a href={phoneHref} className="mt-4 block">
                  <Button className="h-12 w-full gap-2 rounded-full font-bold">
                    <Phone className="size-5" />
                    {phone}
                  </Button>
                </a>
              </div>
            </div>

            {nearby.length > 0 && (
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-heading text-lg tracking-tight text-gray-900">Nearby Areas</h3>
                <ul className="mt-3 space-y-2">
                  {nearby.map((n) => (
                    <li key={n.slug}>
                      <Link
                        href={`/areas/${n.slug}`}
                        title={`Tree Service in ${n.city}, ${n.state} — ${businessName}`}
                        className="flex items-center gap-2 text-gray-700 transition-colors hover:text-primary"
                      >
                        <MapPin className="size-4 text-primary" />
                        {n.city}, {n.state}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <CTASection
        title={`Need Tree Work in ${area.city}?`}
        subtitle={`Call ${businessName} for a free estimate — fast, local, and fully insured.`}
      />

      <FAQSection
        faqs={faqs}
        title={`${area.city} Tree Service FAQs`}
        subtitle={`Common questions from ${area.city} homeowners.`}
      />
    </>
  );
}
