import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { getIcon } from "@/lib/icons";
import { ArrowRight } from "lucide-react";

/** Section 6 — About / Meet the team. Builds local trust. */
export function AboutPreview() {
  const { businessName, yearsInBusiness, primaryCity, primaryState, ownerPhoto, whyChooseUs, guarantees } =
    siteConfig;
  const Check = getIcon("CircleCheckBig");

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        {/* Photo */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-natural)]">
            <Image
              src={ownerPhoto}
              alt={`${businessName} owner and crew serving ${primaryCity}, ${primaryState}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* Years badge */}
          <div className="absolute -bottom-5 -right-2 rounded-2xl bg-primary px-6 py-4 text-center text-white shadow-[var(--shadow-cta)] sm:right-6">
            <p className="font-heading text-4xl leading-none">{yearsInBusiness}+</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide">Years Experience</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            About {businessName}
          </p>
          <h2 className="font-heading text-3xl tracking-tight text-gray-900 sm:text-4xl">
            Your Local, Trusted Tree Care Experts
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            For over <strong className="font-semibold text-gray-900">{yearsInBusiness} years</strong>,{" "}
            {businessName} has been the name {primaryCity}{" "}
            homeowners trust for safe, professional tree care. We&apos;re a locally owned and operated team that treats every property like our own —
            and we don&apos;t consider a job done until you&apos;re completely satisfied.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {whyChooseUs.map((reason) => (
              <li key={reason} className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-gray-700">{reason}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/about">
              <Button className="h-12 gap-2 rounded-full px-6 font-bold uppercase tracking-wide">
                Learn More About Us
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <span className="text-sm font-medium text-gray-500">{guarantees[0]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
