import { siteConfig } from "@/lib/site-config";
import { Star } from "lucide-react";

/** Section 4 — social proof bar directly below the hero. */
export function ReviewBar() {
  const { reviews, aggregateRating } = siteConfig;

  const platforms = [
    reviews.google && { name: "Google", ...reviews.google },
    reviews.facebook && { name: "Facebook", ...reviews.facebook },
    reviews.yelp && { name: "Yelp", ...reviews.yelp },
  ].filter(Boolean) as { name: string; rating: string; count: number; url: string }[];

  return (
    <section className="border-b border-gray-100 bg-white py-6">
      <div className="container-site flex flex-col items-center justify-center gap-x-10 gap-y-4 sm:flex-row sm:flex-wrap">
        <p className="text-center text-sm font-semibold text-gray-700 sm:text-base">
          Rated{" "}
          <span className="font-bold text-gray-900">{aggregateRating.ratingValue}</span> by{" "}
          <span className="font-bold text-gray-900">{aggregateRating.reviewCount}+</span> local
          customers
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <span className="text-sm font-bold text-gray-900">{p.name}</span>
              <span className="flex gap-0.5 text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              <span className="text-sm text-gray-500">({p.count})</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
