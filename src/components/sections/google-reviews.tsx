"use client";

import { siteConfig } from "@/lib/site-config";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GoogleReviews() {
  const { googleBusinessProfileUrl, businessName, primaryCity, primaryState } =
    siteConfig;

  if (!googleBusinessProfileUrl) return null;

  return (
    <section className="bg-accent/30 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What Our Customers Say
        </h2>
        <p className="mb-10 text-center text-lg text-gray-600">
          {businessName} is proud to serve {primaryCity}, {primaryState} with
          top-rated tree care. See our reviews on Google.
        </p>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          {/* Google Maps embed showing business listing */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d-120.6822!3d38.1969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8090c5f6e3eb7e5d%3A0x2e8b2d3e5c7a1b0f!2sSan%20Andreas%2C%20CA!5e0!3m2!1sen!1sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${businessName} on Google Maps`}
            className="w-full"
          />

          {/* Reviews CTA bar */}
          <div className="flex flex-col items-center gap-4 border-t border-gray-100 px-6 py-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                className="size-8"
                aria-label="Google"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mt-0.5 text-sm text-gray-600">
                  Rated on Google
                </p>
              </div>
            </div>

            <a
              href={googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="cursor-pointer gap-2 px-8 font-semibold"
              >
                Read Our Reviews on Google
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
