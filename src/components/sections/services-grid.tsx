import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/sections/section-heading";
import { ArrowRight } from "lucide-react";

/** Section 7 — services grid. Each card links to its money page. */
export function ServicesGrid() {
  const { services, primaryCity, primaryState, businessName } = siteConfig;

  return (
    <section id="services" className="bg-muted py-16 lg:py-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Tree Care Services"
          subtitle={`Full-service tree care for homes and businesses across ${primaryCity}, ${primaryState} and the surrounding area.`}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              title={`${service.name} in ${primaryCity}, ${primaryState} — ${businessName}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-natural)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-deep)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.name} in ${primaryCity}, ${primaryState}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl tracking-tight text-gray-900 transition-colors group-hover:text-primary">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {service.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-primary">
                  Learn More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
