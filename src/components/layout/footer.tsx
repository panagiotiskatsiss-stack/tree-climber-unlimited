import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
} from "lucide-react";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Service Areas", href: "/areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export function Footer() {
  const {
    businessName,
    tagline,
    phone,
    email,
    address,
    businessHours,
    logo,
    services,
    socialLinks,
    ctaText,
  } = siteConfig;
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-darker text-gray-300">
      {/* Pre-footer CTA banner */}
      <div className="border-b border-white/10 bg-primary">
        <div className="container-site flex flex-col items-center justify-between gap-4 py-7 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-heading text-2xl uppercase tracking-tight text-white">
              Need Tree Work Done Right?
            </p>
            <p className="text-white/85">
              Free estimates, fast response, and a crew you can trust.
            </p>
          </div>
          <a href={phoneHref} className="shrink-0">
            <Button className="h-12 gap-2 rounded-full bg-white px-7 text-base font-bold text-primary hover:bg-white/90">
              <Phone className="size-5" />
              {phone}
            </Button>
          </a>
        </div>
      </div>

      {/* Columns */}
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 — brand */}
        <div>
          <Image
            src={logo}
            alt={`${businessName} logo`}
            width={180}
            height={48}
            className="h-11 w-auto object-contain brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-relaxed text-gray-400">{tagline}</p>
          <div className="mt-5 flex items-center gap-3">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
              >
                <Facebook className="size-4" />
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
              >
                <Instagram className="size-4" />
              </a>
            )}
          </div>
        </div>

        {/* Column 2 — company */}
        <nav aria-label="Company">
          <h3 className="font-heading text-lg uppercase tracking-tight text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  title={`${link.label} — ${businessName}`}
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3 — services */}
        <nav aria-label="Services">
          <h3 className="font-heading text-lg uppercase tracking-tight text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  title={`${service.name} — ${businessName}`}
                  className="text-gray-400 transition-colors hover:text-primary"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 4 — contact */}
        <div>
          <h3 className="font-heading text-lg uppercase tracking-tight text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-gold" />
              <span className="text-gray-400">
                {address.street}, {address.city}, {address.state} {address.zip}
              </span>
            </li>
            <li>
              <a
                href={phoneHref}
                className="flex items-center gap-2.5 text-gray-400 transition-colors hover:text-primary"
              >
                <Phone className="size-4 shrink-0 text-brand-gold" />
                {phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 break-all text-gray-400 transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-brand-gold" />
                {email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-brand-gold" />
              <span className="text-gray-400">
                {businessHours.days}
                <br />
                {businessHours.hours}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-xs text-gray-500 sm:flex-row">
          <p>
            © {year} {businessName}. All rights reserved.
          </p>
          <p>
            Licensed &amp; Insured · {ctaText} ·{" "}
            <a href={phoneHref} className="hover:text-primary">
              {phone}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
