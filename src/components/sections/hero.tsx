import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { getIcon } from "@/lib/icons";
import { QuoteForm } from "@/components/forms/quote-form";
import { Phone, Star } from "lucide-react";

interface HeroProps {
  title: string;
  /** HTML allowed (e.g. <strong>) for SEO. */
  subtitleHtml?: string;
  showForm?: boolean;
  backgroundImage?: string;
}

function ReviewPill({
  platform,
  rating,
  count,
  href,
}: {
  platform: string;
  rating: string;
  count: number;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass flex items-center gap-2.5 rounded-full px-4 py-2 transition-transform hover:scale-[1.03]"
    >
      <div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-white">{rating}</span>
          <div className="flex gap-0.5 text-brand-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-3 fill-current" />
            ))}
          </div>
        </div>
        <p className="text-[11px] font-medium text-gray-300">
          {count} {platform} Reviews
        </p>
      </div>
    </a>
  );
}

export function Hero({
  title,
  subtitleHtml,
  showForm = true,
  backgroundImage = "/images/hero/hero-bg.png",
}: HeroProps) {
  const { phone, heroBadges, reviews } = siteConfig;
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-brand-dark">
      {/* Background */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/55" />

      <div className="container-site relative py-14 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_440px] lg:gap-14">
          {/* Left — copy */}
          <div>
            <h1 className="font-heading text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {title}
            </h1>

            {subtitleHtml && (
              <p
                className="mt-5 max-w-xl text-lg leading-relaxed text-gray-200 [&_strong]:font-semibold [&_strong]:text-white"
                dangerouslySetInnerHTML={{ __html: subtitleHtml }}
              />
            )}

            {/* Phone CTA */}
            <a
              href={phoneHref}
              className="mt-7 inline-flex items-center gap-3 text-2xl font-extrabold text-white transition-colors hover:text-primary sm:text-3xl"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-primary">
                <Phone className="size-5 text-white" />
              </span>
              {phone}
            </a>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {heroBadges.map((badge) => {
                const Icon = getIcon(badge.icon);
                return (
                  <div key={badge.label} className="flex items-center gap-2.5">
                    <span className="flex size-9 items-center justify-center rounded-full bg-primary/25">
                      <Icon className="size-4.5 text-primary" />
                    </span>
                    <span className="text-sm font-medium text-gray-100">{badge.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Review pills */}
            <div className="mt-6 flex flex-wrap gap-3">
              {reviews.google && (
                <ReviewPill platform="Google" rating={reviews.google.rating} count={reviews.google.count} href={reviews.google.url} />
              )}
              {reviews.facebook && (
                <ReviewPill platform="Facebook" rating={reviews.facebook.rating} count={reviews.facebook.count} href={reviews.facebook.url} />
              )}
              {reviews.yelp && (
                <ReviewPill platform="Yelp" rating={reviews.yelp.rating} count={reviews.yelp.count} href={reviews.yelp.url} />
              )}
            </div>
          </div>

          {/* Right — inline quote form */}
          {showForm && (
            <div className="w-full">
              <QuoteForm variant="hero" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
