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
} from "@/lib/schema";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.slug,
  }));
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

  if (!service) {
    notFound();
  }

  const { phone, ctaText, businessName, primaryCity, primaryState } = siteConfig;
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  const serviceSchema = generateServiceSchema(service, siteConfig);
  const faqSchema = service.faqs.length > 0 ? generateFAQSchema(service.faqs) : null;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `https://${siteConfig.domain}` },
    { name: "Services", url: `https://${siteConfig.domain}/services` },
    { name: service.name, url: `https://${siteConfig.domain}/services/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-accent/30 pt-28">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-primary">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <Hero
        title={`${service.name} in ${primaryCity}, ${primaryState}`}
        subtitle={service.description}
        backgroundImage={service.image}
      />

      {/* Description + Benefits */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Professional {service.name}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {service.description} At {businessName}, we bring over{" "}
                {siteConfig.yearsInBusiness} years of expertise to every{" "}
                {service.name.toLowerCase()} project. Our team is fully licensed
                and insured, and we stand behind our work with a satisfaction
                guarantee.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Whether you are in {primaryCity} or the surrounding areas, we are
                your trusted local experts for {service.name.toLowerCase()}. Contact us
                today to discuss your project and get a free, no-obligation estimate.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={phoneHref}>
                  <Button
                    size="lg"
                    className="h-12 cursor-pointer gap-2 px-8 text-base font-semibold"
                  >
                    <Phone className="size-5" />
                    {phone}
                  </Button>
                </a>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 cursor-pointer border-primary px-8 text-base font-semibold text-primary hover:bg-primary/5"
                  >
                    {ctaText}
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              {service.image && (
                <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={`${service.name} in ${primaryCity}, ${primaryState}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900">
                Benefits of Our {service.name}
              </h3>
              <ul className="mt-6 space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <CTASection
        title={`Need ${service.name}? Call Us Today`}
        subtitle={`Get a free estimate for ${service.name.toLowerCase()} in ${primaryCity}, ${primaryState}. Fast, reliable, and guaranteed.`}
        variant="dark"
      />

      {/* Other Services */}
      <section className="bg-accent/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-gray-900">
            Other Services We Offer
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-primary hover:text-primary"
                >
                  {s.name}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {service.faqs.length > 0 && (
        <FAQSection
          faqs={service.faqs}
          title={`${service.name} — Frequently Asked Questions`}
        />
      )}

      {/* Final CTA */}
      <CTASection
        title={`Ready to Get Started with ${service.name}?`}
        subtitle={`Contact ${businessName} today. We provide free estimates and are ready to help.`}
      />
    </>
  );
}
