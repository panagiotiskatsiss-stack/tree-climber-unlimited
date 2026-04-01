import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  variant?: "primary" | "dark" | "light";
  backgroundImage?: string;
}

export function CTASection({
  title,
  subtitle,
  variant = "primary",
  backgroundImage,
}: CTASectionProps) {
  const { phone, ctaText } = siteConfig;
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  if (variant === "dark") {
    return (
      <section className="relative overflow-hidden bg-brand-dark py-20 lg:py-28">
        {backgroundImage && (
          <>
            <Image src={backgroundImage} alt="" fill className="object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/70" />
          </>
        )}
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-gray-300">{subtitle}</p>
          )}
          <div className="mt-8">
            <a href={phoneHref}>
              <Button
                size="lg"
                className="h-14 cursor-pointer gap-2 rounded-full px-10 text-lg font-bold"
              >
                <Phone className="size-5" />
                {ctaText}
              </Button>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-white/90">{subtitle}</p>
        )}
        <div className="mt-8">
          <a href={phoneHref}>
            <Button
              size="lg"
              className="h-14 cursor-pointer gap-2 rounded-full bg-white px-10 text-lg font-bold text-brand-dark hover:bg-gray-100"
            >
              <Phone className="size-5" />
              {ctaText}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
