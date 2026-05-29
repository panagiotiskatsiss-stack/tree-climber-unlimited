"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { QuotePopup } from "@/components/forms/quote-popup";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Phone, Menu, ChevronDown, ArrowRight } from "lucide-react";

export function Header() {
  const { businessName, phone, ctaText, logo, services, serviceAreas } = siteConfig;
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Group service areas by county for the mega-menu.
  const areasByCounty = serviceAreas.reduce<Record<string, typeof serviceAreas>>((acc, a) => {
    const key = a.county ?? `${a.state}`;
    (acc[key] ??= []).push(a);
    return acc;
  }, {});

  const linkCls =
    "flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-semibold text-gray-700 transition-colors hover:bg-muted hover:text-primary";
  const panelCls =
    "invisible absolute top-full z-50 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-all duration-300",
        scrolled ? "shadow-md" : "shadow-sm"
      )}
    >
      <div
        className={cn(
          "container-site flex items-center justify-between transition-all duration-300",
          scrolled ? "h-16" : "h-20"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label={businessName}>
          <Image
            src={logo}
            alt={`${businessName} logo`}
            width={180}
            height={48}
            priority
            className={cn(
              "w-auto object-contain transition-all duration-300",
              scrolled ? "h-9" : "h-11"
            )}
          />
        </Link>

        {/* Desktop nav with dropdowns */}
        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-1">
            <li>
              <Link href="/" title={`Home — ${businessName}`} className={linkCls}>
                Home
              </Link>
            </li>

            {/* Services dropdown */}
            <li className="group relative">
              <Link href="/services" title={`Services — ${businessName}`} className={linkCls}>
                Services
                <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              <div className={cn(panelCls, "left-0 w-64")}>
                <ul className="overflow-hidden rounded-xl border border-gray-200 bg-white py-2 shadow-[var(--shadow-deep)]">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        title={`${s.name} — ${businessName}`}
                        className="block px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-muted hover:text-primary"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                  <li className="mt-1 border-t border-gray-100">
                    <Link
                      href="/services"
                      className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-bold text-primary hover:underline"
                    >
                      All Services <ArrowRight className="size-3.5" />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Service Areas mega-dropdown */}
            <li className="group relative">
              <Link href="/areas" title={`Service Areas — ${businessName}`} className={linkCls}>
                Service Areas
                <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              <div className={cn(panelCls, "left-1/2 w-[34rem] max-w-[90vw] -translate-x-1/2 group-hover:-translate-x-1/2 group-focus-within:-translate-x-1/2")}>
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-[var(--shadow-deep)]">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
                    {Object.entries(areasByCounty).map(([county, areas]) => (
                      <div key={county}>
                        <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-gray-400">
                          {county}
                        </p>
                        <ul className="space-y-1">
                          {areas.slice(0, 5).map((a) => (
                            <li key={a.slug}>
                              <Link
                                href={`/areas/${a.slug}`}
                                title={`Tree Service in ${a.city}, ${a.state} — ${businessName}`}
                                className="block text-sm text-gray-700 transition-colors hover:text-primary"
                              >
                                {a.city}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 border-t border-gray-100 pt-3">
                    <Link
                      href="/areas"
                      className="flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                    >
                      View all service areas <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link href="/about" title={`About — ${businessName}`} className={linkCls}>
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" title={`Blog — ${businessName}`} className={linkCls}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" title={`Contact — ${businessName}`} className={linkCls}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop right: phone + CTA popup */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={phoneHref}
            className="flex items-center gap-2 text-sm font-bold text-gray-900 transition-colors hover:text-primary"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-primary/10">
              <Phone className="size-4 text-primary" />
            </span>
            {phone}
          </a>
          <QuotePopup
            triggerLabel={ctaText}
            triggerClassName="h-11 rounded-full px-6 text-sm font-bold uppercase tracking-wide"
          />
        </div>

        {/* Mobile: click-to-call + hamburger */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <a href={phoneHref} aria-label={`Call ${phone}`}>
            <Button size="icon" aria-label={`Call ${phone}`} className="size-10 rounded-full">
              <Phone className="size-5" />
            </Button>
          </a>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" className="size-10" aria-label="Open menu" />}
            >
              <Menu className="size-6" />
            </SheetTrigger>

            <SheetContent side="left" className="w-[320px] overflow-y-auto bg-brand-dark text-white">
              <SheetHeader>
                <SheetTitle className="text-white">{businessName}</SheetTitle>
              </SheetHeader>

              <nav aria-label="Mobile" className="px-2">
                <ul className="flex flex-col">
                  <li>
                    <Link href="/" onClick={() => setMobileOpen(false)} className="block border-b border-white/10 px-3 py-3.5 text-base font-semibold text-gray-200 hover:bg-primary hover:text-white">
                      Home
                    </Link>
                  </li>
                  {/* Services + sub-links */}
                  <li className="border-b border-white/10">
                    <Link href="/services" onClick={() => setMobileOpen(false)} className="block px-3 pt-3.5 pb-1 text-base font-semibold text-white">
                      Services
                    </Link>
                    <ul className="pb-2">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="block px-6 py-2 text-sm text-gray-300 hover:text-primary">
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  {/* Areas */}
                  <li>
                    <Link href="/areas" onClick={() => setMobileOpen(false)} className="block border-b border-white/10 px-3 py-3.5 text-base font-semibold text-gray-200 hover:bg-primary hover:text-white">
                      Service Areas
                    </Link>
                  </li>
                  {["about", "blog", "contact"].map((p) => (
                    <li key={p}>
                      <Link href={`/${p}`} onClick={() => setMobileOpen(false)} className="block border-b border-white/10 px-3 py-3.5 text-base font-semibold capitalize text-gray-200 hover:bg-primary hover:text-white">
                        {p}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 flex flex-col gap-3 px-4">
                <a href={phoneHref} className="w-full">
                  <Button className="h-12 w-full gap-2 rounded-full text-base font-bold">
                    <Phone className="size-5" />
                    {phone}
                  </Button>
                </a>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="w-full">
                  <Button
                    variant="outline"
                    className="h-12 w-full rounded-full border-white/30 bg-white/5 text-base font-bold text-white hover:bg-white/15 hover:text-white"
                  >
                    {ctaText}
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
