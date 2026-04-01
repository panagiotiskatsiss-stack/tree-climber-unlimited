import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";

export function Footer() {
  const {
    businessName,
    tagline,
    phone,
    email,
    services,
    serviceAreas,
    ctaText,
    socialLinks,
    businessHours,
    address,
  } = siteConfig;

  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <footer className="bg-brand-dark text-gray-300">
      {/* CTA Banner */}
      <div className="bg-primary py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mt-3 text-lg text-white/90">
            Contact us today for a free, no-obligation estimate
          </p>
          <div className="mt-8">
            <a href={phoneHref}>
              <Button
                size="lg"
                className="h-14 cursor-pointer gap-2 rounded-full bg-white px-10 text-lg font-bold text-brand-dark hover:bg-gray-100"
              >
                <Phone className="size-5" />
                {ctaText}
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="mx-auto max-w-[1770px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Business Info */}
          <div>
            <h3 className="font-heading text-2xl tracking-wide text-white">
              <span className="text-primary">Tree Climber</span> Unlimited
            </h3>
            {tagline && (
              <p className="mt-3 text-sm text-gray-400">{tagline}</p>
            )}
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={phoneHref}
                className="flex items-center gap-2.5 text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                <Phone className="size-4 text-primary" />
                {phone}
              </a>
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2.5 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                >
                  <Mail className="size-4 text-primary" />
                  {email}
                </a>
              )}
              {address.city && (
                <div className="flex items-center gap-2.5 text-sm text-gray-400">
                  <MapPin className="size-4 text-primary" />
                  {address.city}, {address.state} {address.zip}
                </div>
              )}
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <Clock className="size-4 text-primary" />
                {businessHours.days}: {businessHours.hours}
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-5 flex gap-3">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-all hover:bg-primary hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="size-4" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-lg tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Service Areas", href: "/areas" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading text-lg tracking-wide text-white">
              Our Services
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h3 className="font-heading text-lg tracking-wide text-white">
              Service Areas
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {area.city}, {area.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1770px] px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} {businessName}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-500 transition-colors hover:text-gray-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-500 transition-colors hover:text-gray-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
