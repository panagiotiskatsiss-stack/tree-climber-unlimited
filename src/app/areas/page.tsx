import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, baseUrl, jsonLd } from "@/lib/schema";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { MapPin } from "lucide-react";

export const metadata: Metadata = generatePageMetadata(
  {
    title: `Service Areas — ${siteConfig.primaryState} Tree Service`,
    description: `${siteConfig.businessName} provides professional tree service across ${siteConfig.primaryState}. See all the cities and towns we serve — free estimates everywhere we work. Call ${siteConfig.phone}.`,
    path: "/areas",
  },
  siteConfig
);

export default function AreasPage() {
  const { serviceAreas, businessName, primaryState } = siteConfig;
  const url = baseUrl(siteConfig);

  // Group by county/region
  const groups = serviceAreas.reduce<Record<string, typeof serviceAreas>>((acc, area) => {
    const key = area.county ?? `${primaryState}`;
    (acc[key] ??= []).push(area);
    return acc;
  }, {});

  const schema = jsonLd(
    generateBreadcrumbSchema([
      { name: "Home", url: `${url}/` },
      { name: "Service Areas", url: `${url}/areas` },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      <PageHero
        title="Areas We Serve"
        subtitleHtml={`${businessName} provides <strong>licensed &amp; insured</strong> tree care across ${primaryState}. Find your town below — and if you don't see it, just call, we likely cover it.`}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Service Areas" }]}
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-site">
          <div className="article-content mb-12 max-w-3xl">
            <p>
              {businessName} is a locally owned tree service proudly serving homeowners and
              businesses throughout {primaryState}. For over {siteConfig.yearsInBusiness} years
              we&apos;ve helped property owners across the region keep their trees healthy, safe,
              and beautiful — from routine <a href="/services/tree-trimming">trimming</a> and{" "}
              <a href="/services/stump-grinding">stump grinding</a> to emergency{" "}
              <a href="/services/storm-damage-cleanup">storm damage cleanup</a> and complete{" "}
              <a href="/services/tree-removal">tree removal</a>.
            </p>
            <p>
              Because we&apos;re local, we know the soil, the tree species, and the storm patterns
              of every community we serve — and we can usually get to you fast. Select your town
              below to learn more about tree service in your area, or simply give us a call for a{" "}
              <strong>free, no-obligation estimate</strong>. Don&apos;t see your town listed? There&apos;s
              a good chance we still cover it — reach out and we&apos;ll let you know right away.
            </p>
          </div>
        </div>
        <div className="container-site space-y-12">
          {Object.entries(groups).map(([county, areas]) => (
            <div key={county}>
              <h2 className="font-heading text-2xl tracking-tight text-gray-900">{county}</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {areas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    title={`Tree Service in ${area.city}, ${area.state} — ${businessName}`}
                    className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-[var(--shadow-natural)] transition-all hover:-translate-y-0.5 hover:border-primary"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="size-5 text-primary" />
                    </span>
                    <span>
                      <span className="block font-heading text-lg tracking-tight text-gray-900 group-hover:text-primary">
                        {area.city}, {area.state}
                      </span>
                      <span className="text-sm text-gray-500">Tree service near you</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Serving Your Neighborhood"
        subtitle={`Call ${businessName} today for fast, local, fully insured tree care across ${primaryState}.`}
      />
    </>
  );
}
