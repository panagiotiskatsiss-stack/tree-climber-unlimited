import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function TopBar() {
  const { phone, email, topBar, socialLinks } = siteConfig;
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <div className="hidden bg-brand-darker text-gray-300 lg:block">
      <div className="container-site flex h-10 items-center justify-between text-sm">
        <div className="flex items-center gap-5">
          <a
            href={phoneHref}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone className="size-3.5 text-brand-gold" />
            <span className="font-medium">{phone}</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail className="size-3.5 text-brand-gold" />
            <span>{email}</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          {topBar.announcement && (
            <span className="text-gray-400">{topBar.announcement}</span>
          )}
          <div className="flex items-center gap-3">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors hover:text-white"
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
                className="transition-colors hover:text-white"
              >
                <Instagram className="size-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
