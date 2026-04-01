import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = generatePageMetadata(
  {
    title: "Service Areas",
    description: `${siteConfig.businessName} provides professional tree services from the Sierra Foothills to the Central Valley. Serving ${siteConfig.serviceAreas.slice(0, 10).map((a) => a.city).join(", ")} and surrounding areas.`,
    path: "/areas",
  },
  siteConfig
);

export default function AreasPage() {
  const { serviceAreas, businessName, primaryCity, primaryState } = siteConfig;

  return (
    <>
      <Hero
        title="Service Areas"
        subtitle={`${businessName} proudly serves homeowners from the Sierra Foothills to the Central Valley. Find your city below to learn more about the tree care services we offer in your area.`}
        backgroundImage="/images/areas/suburban-1.jpg"
        showBadges={false}
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Communities We Serve
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Based in {primaryCity}, {primaryState}, we provide tree removal, trimming, stump grinding, and emergency tree services to homeowners throughout Central California.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
                  {area.image && (
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={area.image}
                        alt={`${area.city}, ${area.state}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white">
                        <MapPin className="size-4" />
                        <span className="text-sm font-medium">{area.zipCode}</span>
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-primary">
                      {area.city}, {area.state}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      View Services in {area.city}
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
        title="Don't See Your Area?"
        subtitle={`We may still serve your neighborhood. Give us a call and we'll let you know.`}
      />
    </>
  );
}
