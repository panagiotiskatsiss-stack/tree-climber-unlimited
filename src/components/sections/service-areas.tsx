import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { MapPin } from "lucide-react";

export function ServiceAreas() {
  const { serviceAreas, primaryCity, primaryState, googleBusinessProfileUrl } = siteConfig;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1770px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — City Links Grid */}
          <div>
            <h2 className="font-heading text-3xl text-brand-dark sm:text-4xl lg:text-5xl">
              Proudly Serving <span className="text-primary">Central California</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Whether you&apos;re in {primaryCity} or a surrounding community, our crew is just around the corner and ready to help.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group flex items-center gap-2.5 rounded-xl bg-brand-dark p-3.5 transition-all hover:bg-primary"
                >
                  <MapPin className="size-4 shrink-0 text-primary group-hover:text-white" />
                  <span className="text-sm font-medium text-white">
                    {area.city}, {area.state}
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/areas"
              className="mt-6 inline-block text-sm font-semibold text-primary hover:underline"
            >
              View All Service Areas &rarr;
            </Link>
          </div>

          {/* Right — Google Map */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d-120.6822!3d38.1969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8090c5f6e3eb7e5d%3A0x2e8b2d3e5c7a1b0f!2sSan%20Andreas%2C%20CA!5e0!3m2!1sen!1sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${siteConfig.businessName} service area map`}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
