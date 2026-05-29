import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Home, Phone, ArrowRight } from "lucide-react";

export default function NotFound() {
  const { phone, businessName, services } = siteConfig;
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-brand-dark py-20">
      <div className="container-site relative text-center">
        <p className="font-heading text-7xl text-primary sm:text-8xl">404</p>
        <h1 className="mt-3 font-heading text-3xl tracking-tight text-white sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-lg text-gray-300">
          Sorry, we couldn&apos;t find that page. Let&apos;s get you back on track — or just give{" "}
          {businessName} a call.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/">
            <Button className="h-12 gap-2 rounded-full px-7 font-bold uppercase tracking-wide">
              <Home className="size-5" />
              Back Home
            </Button>
          </Link>
          <a href={phoneHref}>
            <Button
              variant="outline"
              className="h-12 gap-2 rounded-full border-white/30 bg-white/5 px-7 font-bold uppercase tracking-wide text-white hover:bg-white/15 hover:text-white"
            >
              <Phone className="size-5" />
              {phone}
            </Button>
          </a>
        </div>

        <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-200 transition-colors hover:border-primary hover:text-white"
            >
              {s.name}
              <ArrowRight className="size-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
