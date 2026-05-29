import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { QuotePopup } from "@/components/forms/quote-popup";
import { Phone } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

/** Reusable mid-page / pre-footer CTA band (sections 12-adjacent + 16). */
export function CTASection({
  title,
  subtitle,
  backgroundImage = "/images/hero/cta-bg.png",
}: CTASectionProps) {
  const { phone, ctaText } = siteConfig;
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-brand-dark py-16 lg:py-20">
      {backgroundImage && (
        <>
          <Image src={backgroundImage} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-brand-dark/85" />
        </>
      )}
      <div className="container-site relative text-center">
        <h2 className="mx-auto max-w-3xl font-heading text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">{subtitle}</p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={phoneHref}>
            <Button className="h-13 gap-2 rounded-full px-8 text-base font-bold uppercase tracking-wide">
              <Phone className="size-5" />
              {phone}
            </Button>
          </a>
          <QuotePopup
            triggerLabel={ctaText}
            triggerVariant="outline"
            triggerClassName="h-13 rounded-full border-white/30 bg-white/5 px-8 text-base text-white uppercase tracking-wide hover:bg-white/15 hover:text-white"
          />
        </div>
      </div>
    </section>
  );
}
