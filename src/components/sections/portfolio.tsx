import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/sections/section-heading";
import { Carousel } from "@/components/sections/carousel";
import { Button } from "@/components/ui/button";

/** Section 9 — past work gallery. */
export function Portfolio() {
  const { portfolio } = siteConfig;
  if (portfolio.length === 0) return null;

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="Our Work"
          title="Recent Projects"
          subtitle="A look at the trees we've removed, trimmed, and cleaned up across the area."
        />

        <div className="mt-12">
          <Carousel
            containerClassName="gap-5"
            options={{ align: "start" }}
            autoplayDelay={3500}
          >
            {portfolio.map((item, i) => (
              <figure
                key={i}
                className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-1/2 lg:basis-1/3"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-natural)]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <figcaption className="text-sm font-semibold text-white">
                      {item.caption}
                    </figcaption>
                  </div>
                </div>
              </figure>
            ))}
          </Carousel>
        </div>

        <div className="mt-10 text-center">
          <Link href="/contact">
            <Button
              variant="outline"
              className="h-12 rounded-full px-7 font-bold uppercase tracking-wide"
            >
              Get Your Free Estimate
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
