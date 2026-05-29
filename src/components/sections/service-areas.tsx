import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/sections/section-heading";
import { MapPin } from "lucide-react";

/** Section 15 — service areas grid + map embed (local SEO). */
export function ServiceAreas() {
  const { serviceAreas, primaryCity, primaryState, address, businessName } = siteConfig;
  const mapQuery = encodeURIComponent(
    `${address.street}, ${address.city}, ${address.state} ${address.zip}`
  );

  return (
    <section className="bg-muted py-16 lg:py-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="Service Areas"
          title={`Proudly Serving ${primaryCity} & Beyond`}
          subtitle={`Local, reliable tree care across ${primaryState}. Don't see your town? Give us a call — we likely cover it.`}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* City grid */}
          <nav aria-label="Service areas">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    title={`Tree Service in ${area.city}, ${area.state} — ${businessName}`}
                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <MapPin className="size-4 shrink-0 text-primary group-hover:text-white" />
                    {area.city}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-[var(--shadow-natural)]">
            <iframe
              title={`${businessName} location map`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
