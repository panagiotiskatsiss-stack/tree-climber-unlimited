"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone, Mail, X, Menu, ChevronDown } from "lucide-react";

export function Header() {
  const { businessName, phone, email, ctaText, logo } = siteConfig;
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50">
        {/* Top Bar — Desktop Only */}
        <div className="hidden bg-brand-dark text-white lg:block">
          <div className="mx-auto flex h-10 max-w-[1770px] items-center justify-between px-6 text-sm">
            <span className="font-medium text-gray-300">
              Free Estimates &bull; Licensed &amp; Insured &bull; 15+ Years Experience
            </span>
            <div className="flex items-center gap-6">
              <a
                href={phoneHref}
                className="flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-primary"
              >
                <Phone className="size-3.5" />
                {phone}
              </a>
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-1.5 text-gray-300 transition-colors hover:text-white"
                >
                  <Mail className="size-3.5" />
                  {email}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div
          className={cn(
            "transition-all duration-300",
            scrolled
              ? "bg-white shadow-lg"
              : "bg-white/95 backdrop-blur-sm"
          )}
        >
          <div className="mx-auto flex h-16 max-w-[1770px] items-center justify-between px-4 lg:h-20 lg:px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              {logo && (
                <Image
                  src={logo}
                  alt={businessName}
                  width={48}
                  height={48}
                  className={cn(
                    "rounded-lg object-contain transition-all duration-300",
                    scrolled ? "size-10" : "size-12"
                  )}
                />
              )}
              <span className={cn(
                "font-heading tracking-wide transition-all duration-300",
                scrolled ? "text-xl" : "text-2xl"
              )}>
                <span className="text-primary">Tree Climber</span>{" "}
                <span className="text-brand-dark">Unlimited</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              <Link
                href="/"
                className="px-3 py-2 text-[15px] font-medium text-gray-700 transition-colors hover:text-primary"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="group relative">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-gray-700 transition-colors hover:text-primary"
                >
                  Services
                  <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 w-60 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
                    {siteConfig.services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-primary/5 hover:text-primary"
                      >
                        {s.name}
                      </Link>
                    ))}
                    <div className="mx-3 my-1 border-t border-gray-100" />
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-sm font-semibold text-primary"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>

              {/* Areas Dropdown */}
              <div className="group relative">
                <Link
                  href="/areas"
                  className="inline-flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-gray-700 transition-colors hover:text-primary"
                >
                  Service Areas
                  <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 w-60 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="max-h-80 overflow-y-auto rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
                    {siteConfig.serviceAreas.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/areas/${a.slug}`}
                        className="block px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-primary/5 hover:text-primary"
                      >
                        {a.city}, {a.state}
                      </Link>
                    ))}
                    <div className="mx-3 my-1 border-t border-gray-100" />
                    <Link
                      href="/areas"
                      className="block px-4 py-2 text-sm font-semibold text-primary"
                    >
                      All Service Areas
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="px-3 py-2 text-[15px] font-medium text-gray-700 transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="px-3 py-2 text-[15px] font-medium text-gray-700 transition-colors hover:text-primary"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 text-[15px] font-medium text-gray-700 transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop: Phone + CTA */}
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={phoneHref}
                className="flex items-center gap-2 text-sm font-bold text-brand-dark"
              >
                <div className="flex size-9 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="size-4 text-primary" />
                </div>
                {phone}
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="cursor-pointer rounded-full px-7 font-bold uppercase tracking-wide"
                >
                  {ctaText}
                </Button>
              </Link>
            </div>

            {/* Mobile: Phone + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a href={phoneHref}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer text-primary"
                >
                  <Phone className="size-5" />
                  <span className="sr-only">Call {phone}</span>
                </Button>
              </a>
              <button
                onClick={() => setSidebarOpen(true)}
                className="flex size-10 items-center justify-center rounded-lg text-gray-700"
                aria-label="Open menu"
              >
                <Menu className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[9998] bg-black/50 transition-opacity duration-300 lg:hidden",
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeSidebar}
      />

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-[9999] h-full w-[300px] bg-white shadow-2xl transition-transform duration-500 ease-out lg:hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5">
          <span className="font-heading text-xl tracking-wide">
            <span className="text-primary">Tree Climber</span> Unlimited
          </span>
          <button
            onClick={closeSidebar}
            className="flex size-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex flex-col overflow-y-auto px-4 py-4" style={{ maxHeight: "calc(100vh - 200px)" }}>
          <Link
            href="/"
            onClick={closeSidebar}
            className="border-b border-gray-100 px-2 py-3.5 text-base font-medium text-gray-800 hover:text-primary"
          >
            Home
          </Link>

          <Link
            href="/services"
            onClick={closeSidebar}
            className="border-b border-gray-100 px-2 py-3.5 text-base font-medium text-gray-800 hover:text-primary"
          >
            Services
          </Link>
          <div className="flex flex-col border-b border-gray-100 py-1 pl-4">
            {siteConfig.services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={closeSidebar}
                className="px-2 py-2 text-sm text-gray-500 hover:text-primary"
              >
                {s.name}
              </Link>
            ))}
          </div>

          <Link
            href="/areas"
            onClick={closeSidebar}
            className="border-b border-gray-100 px-2 py-3.5 text-base font-medium text-gray-800 hover:text-primary"
          >
            Service Areas
          </Link>
          <div className="flex flex-col border-b border-gray-100 py-1 pl-4">
            {siteConfig.serviceAreas.slice(0, 6).map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                onClick={closeSidebar}
                className="px-2 py-2 text-sm text-gray-500 hover:text-primary"
              >
                {a.city}, {a.state}
              </Link>
            ))}
            <Link
              href="/areas"
              onClick={closeSidebar}
              className="px-2 py-2 text-sm font-medium text-primary"
            >
              View All Areas
            </Link>
          </div>

          <Link
            href="/about"
            onClick={closeSidebar}
            className="border-b border-gray-100 px-2 py-3.5 text-base font-medium text-gray-800 hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/blog"
            onClick={closeSidebar}
            className="border-b border-gray-100 px-2 py-3.5 text-base font-medium text-gray-800 hover:text-primary"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={closeSidebar}
            className="px-2 py-3.5 text-base font-medium text-gray-800 hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Sidebar Bottom CTAs */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-white p-4">
          <a href={phoneHref} className="block w-full">
            <Button
              size="lg"
              className="h-12 w-full cursor-pointer gap-2 rounded-full text-base font-bold"
            >
              <Phone className="size-5" />
              {phone}
            </Button>
          </a>
          <Link href="/contact" onClick={closeSidebar} className="mt-2 block w-full">
            <Button
              variant="outline"
              size="lg"
              className="h-12 w-full cursor-pointer rounded-full border-primary text-base font-bold text-primary hover:bg-primary/5"
            >
              Get Free Estimate
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
