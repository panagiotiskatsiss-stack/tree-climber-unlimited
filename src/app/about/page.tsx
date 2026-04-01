import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { CheckCircle, ShieldCheck, Users, Clock, Award, Shield, DollarSign, HeartHandshake } from "lucide-react";

export const metadata: Metadata = generatePageMetadata(
  {
    title: `About ${siteConfig.businessName}`,
    description: `Learn about ${siteConfig.businessName} — ${siteConfig.yearsInBusiness}+ years of professional service in ${siteConfig.primaryCity}, ${siteConfig.primaryState}. Licensed, insured, and committed to quality.`,
    path: "/about",
  },
  siteConfig
);

const uspIcons = [Award, Shield, DollarSign, HeartHandshake, CheckCircle];

export default function AboutPage() {
  const {
    businessName,
    yearsInBusiness,
    primaryCity,
    primaryState,
    whyChooseUs,
    usps,
    guarantees,
    ownerPhoto,
    phone,
  } = siteConfig;

  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <>
      <Hero
        title={`About ${businessName}`}
        subtitle={`Proudly serving ${primaryCity}, ${primaryState} and surrounding communities for over ${yearsInBusiness} years.`}
        backgroundImage="/images/about/about-bg.jpg"
        showBadges={false}
        showForm={false}
      />

      {/* Owner / Business Story */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1770px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {ownerPhoto ? (
              <div className="relative mx-auto w-full max-w-md">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={ownerPhoto}
                    alt="Michael Lewis, owner of Tree Climber Unlimited in San Andreas CA"
                    width={500}
                    height={600}
                    className="h-[500px] w-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 rounded-2xl bg-primary p-6 text-center shadow-xl lg:-right-8">
                  <p className="font-heading text-5xl text-white">{yearsInBusiness}+</p>
                  <p className="mt-1 text-sm font-semibold text-white/90">Years of<br/>Experience</p>
                </div>
              </div>
            ) : (
              <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-2xl bg-brand-dark mx-auto">
                <div className="text-center">
                  <Users className="mx-auto size-16 text-primary/40" />
                  <p className="mt-4 text-lg font-semibold text-white">{businessName}</p>
                  <p className="text-sm text-gray-400">{yearsInBusiness}+ Years of Excellence</p>
                </div>
              </div>
            )}

            <div>
              <h2 className="font-heading text-3xl text-brand-dark sm:text-4xl lg:text-5xl">
                Meet <span className="text-primary">Michael Lewis</span>
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary">
                Owner &amp; Founder of {businessName}
              </p>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Michael Lewis founded {businessName} {yearsInBusiness} years ago with a simple mission: deliver safe, quality tree care that homeowners can trust. What started as one man with a chainsaw and a climbing harness has grown into a fully licensed and insured operation serving {primaryCity}, {primaryState} and communities throughout Central California.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Michael and his crew are trained and qualified in all aspects of tree work — from routine trimming to the most challenging hazardous removals. Safe work practices are not optional; they are who we are. Every crew member goes home safe every day, and every customer gets the same level of care and professionalism.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                &ldquo;We appreciate every person and every job we take on,&rdquo; Michael says. &ldquo;Safety, quality, and production — those are our guarantees. From the free estimate to the final cleanup, you&apos;ll see the difference a crew that genuinely cares can make.&rdquo;
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <ShieldCheck className="size-4" /> Licensed &amp; Insured
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Clock className="size-4" /> {yearsInBusiness}+ Years Experience
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Users className="size-4" /> {siteConfig.serviceAreas.length} Cities Served
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us — Dark Section */}
      <section className="bg-brand-dark py-20 lg:py-28">
        <div className="mx-auto max-w-[1770px] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
              Why Homeowners <span className="text-primary">Choose Us</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="rounded-2xl bg-brand-card p-6 transition-all hover:ring-1 hover:ring-primary/30"
              >
                <CheckCircle className="size-8 text-primary" />
                <p className="mt-4 text-gray-300 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      {usps.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1770px] px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-center text-3xl text-brand-dark sm:text-4xl lg:text-5xl">
              What Sets Us <span className="text-primary">Apart</span>
            </h2>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {usps.map((usp, index) => {
                const Icon = uspIcons[index % uspIcons.length];
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">{usp}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Stats Bar */}
      <section className="bg-primary py-14">
        <div className="mx-auto max-w-[1770px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <p className="font-heading text-5xl text-white">{yearsInBusiness}+</p>
              <p className="mt-2 text-white/80">Years in Business</p>
            </div>
            <div>
              <p className="font-heading text-5xl text-white">{siteConfig.serviceAreas.length}+</p>
              <p className="mt-2 text-white/80">Communities Served</p>
            </div>
            <div>
              <p className="font-heading text-5xl text-white">100%</p>
              <p className="mt-2 text-white/80">Satisfaction Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Work With Us?"
        subtitle={`Contact ${businessName} today for a free estimate. We look forward to earning your trust.`}
        variant="dark"
        backgroundImage="/images/about/about-bg.jpg"
      />
    </>
  );
}
