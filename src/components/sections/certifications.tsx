import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Carousel } from "@/components/sections/carousel";

/** Section 5 — auto-scrolling certifications / credibility carousel. */
export function Certifications() {
  const { certifications, businessName } = siteConfig;
  if (certifications.length === 0) return null;

  return (
    <section className="border-y border-gray-100 bg-muted py-10">
      <div className="container-site">
        <p className="mb-7 text-center text-sm font-bold uppercase tracking-widest text-gray-500">
          Trusted &amp; Certified
        </p>
        <Carousel
          showArrows={false}
          autoplayDelay={2500}
          options={{ align: "center", dragFree: true }}
          containerClassName="items-center"
        >
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex min-w-0 shrink-0 grow-0 basis-1/2 items-center justify-center px-6 sm:basis-1/3 lg:basis-1/5"
            >
              <Image
                src={cert.logo}
                alt={`${cert.name} — ${businessName}`}
                width={140}
                height={70}
                className="h-14 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
