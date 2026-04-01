import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { generateAreaMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Phone, ArrowRight, MapPin, CheckCircle } from "lucide-react";

export function generateStaticParams() {
  return siteConfig.serviceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = siteConfig.serviceAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return generateAreaMetadata(area, siteConfig.services, siteConfig);
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = siteConfig.serviceAreas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const { services, phone, ctaText, businessName, yearsInBusiness, guarantees } = siteConfig;
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `https://${siteConfig.domain}` },
    { name: "Service Areas", url: `https://${siteConfig.domain}/areas` },
    {
      name: `${area.city}, ${area.state}`,
      url: `https://${siteConfig.domain}/areas/${area.slug}`,
    },
  ]);

  return (
    <>
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
            <span className="font-medium text-primary">
              {area.city}, {area.state}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <Hero
        title={`Professional Tree Services in ${area.city}, ${area.state}`}
        subtitle={`${businessName} proudly serves ${area.city}, ${area.state} and surrounding communities. With ${yearsInBusiness}+ years of experience, we are your trusted local tree care professionals.`}
        backgroundImage={area.image}
      />

      {/* Services in This Area */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-gray-900">
            Services We Offer in {area.city}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            We provide a full range of professional services to homeowners and
            businesses in {area.city}, {area.state}.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
                  {service.image && (
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={service.image}
                        alt={`${service.name} in ${area.city}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-primary">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
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

      {/* Mid-page CTA */}
      <CTASection
        title={`Serving ${area.city}, ${area.state} for ${yearsInBusiness}+ Years`}
        subtitle={`Call ${businessName} today for reliable, professional service in your area.`}
        variant="dark"
      />

      {/* Localized Content */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Your Trusted Local Experts in {area.city}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {businessName} has been serving the {area.city},{" "}
                {area.state} community for over {yearsInBusiness} years.
                Our team of professionals lives and works in the area, so
                we understand the unique needs of local homeowners and
                businesses.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                We take pride in building lasting relationships with our
                customers. From your first call to project completion, you
                can expect clear communication, fair pricing, and exceptional
                workmanship on every job.
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

            <div className="space-y-6">
              {area.image && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={area.image}
                    alt={`${area.city}, ${area.state}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                <div className="flex items-center gap-3">
                  <MapPin className="size-6 text-primary" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Service Area: {area.city}, {area.state} {area.zipCode}
                  </h3>
                </div>
                <p className="mt-2 text-gray-600">
                  We serve {area.city} and all surrounding neighborhoods and
                  communities.
                </p>
              </div>

              <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Why {area.city} Residents Choose Us
                </h3>
                <ul className="mt-4 space-y-3">
                  {guarantees.map((guarantee, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span className="text-gray-700">{guarantee}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Areas */}
      {siteConfig.serviceAreas.filter((a) => a.slug !== area.slug).length > 0 && (
        <section className="bg-accent/30 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-gray-900">
              We Also Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {siteConfig.serviceAreas
                .filter((a) => a.slug !== area.slug)
                .map((a) => (
                  <Link
                    key={a.slug}
                    href={`/areas/${a.slug}`}
                    className="group inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-primary hover:text-primary"
                  >
                    <MapPin className="size-4" />
                    {a.city}, {a.state}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <CTASection
        title={`Get a Free Estimate in ${area.city}`}
        subtitle={`Contact ${businessName} today. We are ready to help with your project.`}
      />
    </>
  );
}
