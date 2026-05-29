import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { QuotePopup } from "@/components/forms/quote-popup";
import { Phone, ChevronRight } from "lucide-react";

interface Crumb {
  name: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitleHtml?: string;
  backgroundImage?: string;
  breadcrumbs?: Crumb[];
  showCtas?: boolean;
}

/** Compact dark hero for inner pages (services, areas, about, contact, blog). */
export function PageHero({
  title,
  subtitleHtml,
  backgroundImage = "/images/hero/hero-bg.png",
  breadcrumbs,
  showCtas = true,
}: PageHeroProps) {
  const { phone, ctaText } = siteConfig;
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <Image src={backgroundImage} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/72 to-black/60" />

      <div className="container-site relative py-14 lg:py-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-300">
              {breadcrumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-white">
                      {c.name}
                    </Link>
                  ) : (
                    <span className="text-white">{c.name}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <ChevronRight className="size-3.5 text-gray-500" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1 className="max-w-3xl font-heading text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {subtitleHtml && (
          <p
            className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-200 [&_strong]:font-semibold [&_strong]:text-white"
            dangerouslySetInnerHTML={{ __html: subtitleHtml }}
          />
        )}

        {showCtas && (
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={phoneHref}>
              <Button className="h-12 gap-2 rounded-full px-7 text-base font-bold uppercase tracking-wide">
                <Phone className="size-5" />
                {phone}
              </Button>
            </a>
            <QuotePopup
              triggerLabel={ctaText}
              triggerVariant="outline"
              triggerClassName="h-12 rounded-full border-white/30 bg-white/5 px-7 text-base uppercase tracking-wide text-white hover:bg-white/15 hover:text-white"
            />
          </div>
        )}
      </div>
    </section>
  );
}
