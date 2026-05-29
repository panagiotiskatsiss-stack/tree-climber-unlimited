import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  baseUrl,
  jsonLd,
} from "@/lib/schema";
import { PageHero } from "@/components/sections/page-hero";
import { QuoteForm } from "@/components/forms/quote-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = generatePageMetadata(
  {
    title: `Contact Us — Free Estimates`,
    description: `Contact ${siteConfig.businessName} for a free tree service estimate in ${siteConfig.primaryCity}, ${siteConfig.primaryState}. Call ${siteConfig.phone} or send us a message — fast response, no obligation.`,
    path: "/contact",
  },
  siteConfig
);

export default function ContactPage() {
  const { businessName, phone, email, address, businessHours, primaryCity, primaryState } = siteConfig;
  const url = baseUrl(siteConfig);
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;
  const mapQuery = encodeURIComponent(`${address.street}, ${address.city}, ${address.state} ${address.zip}`);

  const schema = jsonLd(
    generateLocalBusinessSchema(siteConfig),
    generateBreadcrumbSchema([
      { name: "Home", url: `${url}/` },
      { name: "Contact", url: `${url}/contact` },
    ])
  );

  const details = [
    { icon: Phone, label: "Call Us", value: phone, href: phoneHref },
    { icon: Mail, label: "Email Us", value: email, href: `mailto:${email}` },
    { icon: MapPin, label: "Visit Us", value: `${address.street}, ${address.city}, ${address.state} ${address.zip}` },
    { icon: Clock, label: "Hours", value: `${businessHours.days}: ${businessHours.hours}` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      <PageHero
        title="Contact Us"
        subtitleHtml={`Get a <strong>free, no-obligation estimate</strong> for tree service in ${primaryCity}, ${primaryState}. Call or send a message — we respond fast.`}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
        showCtas={false}
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Details */}
          <div>
            <h2 className="font-heading text-3xl tracking-tight text-gray-900">Get in Touch</h2>
            <p className="mt-3 text-lg text-gray-600">
              Have a tree that needs attention? Reach out and {businessName} will get right back to
              you. Whether it&apos;s a hazardous tree that needs to come down, routine trimming, stump
              grinding, or emergency storm cleanup, we&apos;re happy to take a look and give you a{" "}
              <strong className="font-semibold text-gray-900">free, no-obligation estimate</strong>.
            </p>
            <p className="mt-3 text-gray-600">
              Prefer to talk it through? Give us a call at{" "}
              <a href={phoneHref} className="font-semibold text-primary hover:underline">{phone}</a>{" "}
              and we&apos;ll answer your questions on the spot. Or fill out the form and a member of our
              team will follow up quickly — usually the same day. We proudly serve {primaryCity},{" "}
              {primaryState} and the surrounding communities, and we&apos;re fully licensed and insured
              for your peace of mind.
            </p>
            <ul className="mt-8 space-y-5">
              {details.map((d) => {
                const Icon = d.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-6 text-primary" />
                    </span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide text-gray-500">{d.label}</p>
                      <p className="mt-0.5 font-semibold text-gray-900">{d.value}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <a href={d.href} className="block transition-opacity hover:opacity-80">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Map */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 shadow-[var(--shadow-natural)]">
              <iframe
                title={`${businessName} location`}
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <QuoteForm variant="section" />
          </div>
        </div>
      </section>
    </>
  );
}
