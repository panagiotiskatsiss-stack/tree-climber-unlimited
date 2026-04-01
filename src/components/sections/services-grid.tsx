import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight } from "lucide-react";

export function ServicesGrid() {
  const { services } = siteConfig;

  return (
    <section className="bg-brand-dark py-20 lg:py-28">
      <div className="mx-auto max-w-[1770px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
            Full-Service <span className="text-primary">Tree Care</span> Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            From routine pruning to emergency removals, we handle it all. Professional results at honest prices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-brand-card transition-all duration-300 hover:ring-2 hover:ring-primary"
            >
              {/* Service Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl text-white">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {service.shortDescription}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                  Learn More
                  <ArrowRight className="size-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
