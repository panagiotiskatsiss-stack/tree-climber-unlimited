import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/hero";
import { ContactForm } from "@/components/forms/contact-form";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = generatePageMetadata(
  {
    title: "Contact Us",
    description: `Contact ${siteConfig.businessName} for a free estimate. Call ${siteConfig.phone} or fill out our contact form. Serving ${siteConfig.primaryCity}, ${siteConfig.primaryState} and surrounding areas.`,
    path: "/contact",
  },
  siteConfig
);

export default function ContactPage() {
  const {
    businessName,
    phone,
    email,
    address,
    businessHours,
    primaryCity,
    primaryState,
  } = siteConfig;

  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <>
      <Hero
        title="Get In Touch"
        subtitle={`Ready to get started? Reach out to ${businessName} today. We respond fast.`}
        backgroundImage="/images/contact/contact-bg.jpg"
        showBadges={false}
        showForm={false}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1770px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-3xl text-brand-dark sm:text-4xl">
                Send Us a <span className="text-primary">Message</span>
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-5">
              {/* Phone Card */}
              <div className="rounded-2xl bg-brand-dark p-6">
                <h3 className="font-heading text-lg text-white">Call Us Directly</h3>
                <p className="mt-1 text-sm text-gray-400">Speak with us right away</p>
                <a
                  href={phoneHref}
                  className="mt-4 flex items-center gap-3 text-2xl font-bold text-primary hover:underline"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/20">
                    <Phone className="size-5 text-primary" />
                  </div>
                  {phone}
                </a>
              </div>

              {/* Email Card */}
              {email && (
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="font-heading text-lg text-brand-dark">Email Us</h3>
                  <p className="mt-1 text-sm text-gray-500">We typically respond within 24 hours</p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-4 flex items-center gap-3 text-lg font-semibold text-primary hover:underline"
                  >
                    <Mail className="size-5" />
                    {email}
                  </a>
                </div>
              )}

              {/* Business Hours */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-heading text-lg text-brand-dark">Business Hours</h3>
                <div className="mt-4 flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">{businessHours.days}</p>
                    <p className="text-gray-600">{businessHours.hours}</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-heading text-lg text-brand-dark">Service Area</h3>
                <div className="mt-4 flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {address.city}, {address.state} {address.zip}
                    </p>
                    <p className="text-sm text-gray-500">
                      Serving the Sierra Foothills to the Central Valley
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d-120.6802!3d38.1966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80910a4b25e95e1f%3A0x28a8a0edab80a2d0!2sSan%20Andreas%2C%20CA%2095249!5e0!3m2!1sen!1sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${businessName} service area map`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
