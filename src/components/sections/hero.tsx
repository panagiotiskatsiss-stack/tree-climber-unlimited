import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { QuoteForm } from "@/components/forms/quote-form";
import { Phone, Shield, Clock, Star, ThumbsUp } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  showForm?: boolean;
  showBadges?: boolean;
  backgroundImage?: string;
}

function ReviewBadge({
  platform,
  rating,
  count,
  icon,
}: {
  platform: string;
  rating: string;
  count: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-full bg-black/80 px-5 py-3 ring-1 ring-white/15">
      <div className="flex size-10 items-center justify-center rounded-full bg-white">
        {icon}
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <span className="text-base font-bold text-white">{rating}</span>
          <div className="flex gap-0.5 text-brand-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-3.5 fill-current" />
            ))}
          </div>
        </div>
        <p className="text-xs font-medium text-gray-300">{count} on {platform}</p>
      </div>
    </div>
  );
}

function TrustIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex size-10 items-center justify-center rounded-full bg-primary/20">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-200">{label}</span>
    </div>
  );
}

export function Hero({
  title,
  subtitle,
  showForm = true,
  showBadges = true,
  backgroundImage = "/images/hero/hero-bg.jpg",
}: HeroProps) {
  const { phone } = siteConfig;
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-brand-dark pt-28 pb-16 lg:pt-36 lg:pb-20">
      {/* Background Image */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />
        </>
      )}

      <div className="relative mx-auto max-w-[1770px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px] lg:gap-16 xl:grid-cols-[1fr_460px]">
          {/* Left Column — Text Content */}
          <div>
            <h1 className="font-heading text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-5 max-w-xl text-lg text-gray-300 sm:text-xl">
                {subtitle}
              </p>
            )}

            {/* Phone CTA */}
            <a
              href={phoneHref}
              className="mt-6 inline-flex items-center gap-3 text-2xl font-bold text-white transition-colors hover:text-primary sm:text-3xl"
            >
              <div className="flex size-12 items-center justify-center rounded-full bg-primary">
                <Phone className="size-5 text-white" />
              </div>
              {phone}
            </a>

            {/* Trust Icons */}
            {showBadges && (
              <div className="mt-8 flex flex-wrap gap-5">
                <TrustIcon
                  icon={<Clock className="size-5 text-primary" />}
                  label="Same-Day Estimates"
                />
                <TrustIcon
                  icon={<Shield className="size-5 text-primary" />}
                  label="Licensed & Insured"
                />
                <TrustIcon
                  icon={<ThumbsUp className="size-5 text-primary" />}
                  label="Satisfaction Guaranteed"
                />
              </div>
            )}

            {/* Review Badges */}
            {showBadges && (
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={siteConfig.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ReviewBadge
                    platform="Google"
                    rating="5.0"
                    count="24 Reviews"
                    icon={
                      <svg viewBox="0 0 24 24" className="size-5" fill="none">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    }
                  />
                </a>
                {siteConfig.socialLinks.facebook && (
                  <a
                    href={siteConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ReviewBadge
                      platform="Facebook"
                      rating="5.0"
                      count="Recommended"
                      icon={
                        <svg viewBox="0 0 24 24" className="size-5 fill-[#1877F2]">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      }
                    />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right Column — Inline Quote Form */}
          {showForm && (
            <div className="w-full">
              <QuoteForm variant="hero" />
            </div>
          )}

          {/* Inner Page Variant — No Form */}
          {!showForm && (
            <div className="hidden lg:block" />
          )}
        </div>
      </div>
    </section>
  );
}
