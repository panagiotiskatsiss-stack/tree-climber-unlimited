import { siteConfig } from "@/lib/site-config";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const googleReviews: {
  name: string;
  rating: number;
  text: string;
  source: string;
  city: string;
}[] = [];

export function Testimonials() {
  const { googleBusinessProfileUrl, businessName } = siteConfig;

  if (googleReviews.length === 0) return null;

  return (
    <section className="bg-brand-dark py-20 lg:py-28">
      <div className="mx-auto max-w-[1770px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
            Real Reviews from <span className="text-primary">Real Neighbors</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Don&apos;t just take our word for it. Here&apos;s what homeowners across Central California say about working with us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((review, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-brand-card p-6 transition-all hover:ring-1 hover:ring-primary/30"
            >
              {/* Quote Icon */}
              <Quote className="absolute right-6 top-6 size-8 text-primary/20" />

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="size-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3 border-t border-brand-border pt-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/20 font-bold text-primary">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.city} &bull; {review.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        {googleBusinessProfileUrl && (
          <div className="mt-12 text-center">
            <a
              href={googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="cursor-pointer gap-3 rounded-full px-8 font-bold"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                See All Reviews on Google
              </Button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
