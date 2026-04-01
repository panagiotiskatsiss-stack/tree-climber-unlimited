import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = generatePageMetadata(
  {
    title: "Our Services",
    description: `${siteConfig.businessName} offers professional ${siteConfig.services.map((s) => s.name.toLowerCase()).join(", ")} in ${siteConfig.primaryCity}, ${siteConfig.primaryState}. Licensed, insured, and trusted. Call ${siteConfig.phone}.`,
    path: "/services",
  },
  siteConfig
);

export default function ServicesPage() {
  const { services, businessName, primaryCity, primaryState } = siteConfig;

  return (
    <>
      <Hero
        title="Our Services"
        subtitle={`${businessName} provides a full range of professional tree care services in ${primaryCity}, ${primaryState} and surrounding areas.`}
        backgroundImage="/images/hero/hero-bg.jpg"
        showBadges={false}
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
                  {service.image && (
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-600">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-4 space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Learn More
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Service You Need?"
        subtitle="Call us today and we'll help you find the right solution for your project."
      />
    </>
  );
}
