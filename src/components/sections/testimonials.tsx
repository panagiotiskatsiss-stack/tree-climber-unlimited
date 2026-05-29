import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/sections/section-heading";
import { Carousel } from "@/components/sections/carousel";
import { Star, Quote } from "lucide-react";

/** Section 11 — testimonials carousel (client-provided reviews only). */
export function Testimonials() {
  const { testimonials, aggregateRating } = siteConfig;
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="Reviews"
          title="What Our Customers Say"
          subtitle={`Rated ${aggregateRating.ratingValue} stars by ${aggregateRating.reviewCount}+ local homeowners.`}
        />

        <div className="mt-12">
          <Carousel containerClassName="gap-6" options={{ align: "start" }} autoplayDelay={5000}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2"
              >
                <figure className="relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-[var(--shadow-natural)]">
                  <Quote className="absolute right-6 top-6 size-10 text-primary/10" />
                  <div className="flex gap-0.5 text-brand-gold">
                    {[...Array(t.rating ?? 5)].map((_, s) => (
                      <Star key={s} className="size-4.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-gray-700">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">
                    <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 font-heading text-lg text-primary">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block font-bold text-gray-900">{t.name}</span>
                      <span className="block text-sm text-gray-500">
                        {t.city}
                        {t.source && ` · via ${t.source}`}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
