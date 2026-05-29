import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, baseUrl, jsonLd } from "@/lib/schema";
import { getAllPosts, getCategories } from "@/lib/blog";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { CalendarDays, ArrowRight } from "lucide-react";

export const metadata: Metadata = generatePageMetadata(
  {
    title: `Tree Care Blog — Tips & Advice`,
    description: `Expert tree care tips, guides, and local advice from ${siteConfig.businessName}'s certified arborists. Removal, trimming, storm prep & more for ${siteConfig.primaryState} homeowners.`,
    path: "/blog",
  },
  siteConfig
);

function fmt(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();
  const [featured, ...rest] = posts;
  const url = baseUrl(siteConfig);

  const schema = jsonLd(
    generateBreadcrumbSchema([
      { name: "Home", url: `${url}/` },
      { name: "Blog", url: `${url}/blog` },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      <PageHero
        title="Tree Care Tips & Advice"
        subtitleHtml={`Helpful guides from ${siteConfig.businessName}'s ISA Certified Arborists — so you can keep your property safe and beautiful.`}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog" }]}
        showCtas={false}
      />

      <section className="bg-white py-14 lg:py-16">
        <div className="container-site">
          {/* Categories */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-gray-200 bg-muted px-4 py-1.5 text-sm font-semibold text-gray-700"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Featured */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              title={`${featured.title} — ${siteConfig.businessName}`}
              className="group mb-12 grid overflow-hidden rounded-2xl border border-gray-200 shadow-[var(--shadow-natural)] transition-all hover:shadow-[var(--shadow-deep)] lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto">
                <Image src={featured.coverImage!} alt={featured.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-8">
                <span className="mb-3 w-fit rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {featured.category}
                </span>
                <h2 className="font-heading text-2xl leading-tight tracking-tight text-gray-900 group-hover:text-primary sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-gray-600">{featured.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-primary">
                  Read Article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                title={`${post.title} — ${siteConfig.businessName}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-natural)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-deep)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={post.coverImage!} alt={post.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                    <CalendarDays className="size-3.5" />
                    {fmt(post.date)}
                  </p>
                  <h3 className="mt-2 font-heading text-lg leading-snug tracking-tight text-gray-900 group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-primary">
                    Read More <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Tree Problem We Didn't Cover?"
        subtitle={`Call ${siteConfig.businessName} — our certified arborists are happy to help with a free estimate.`}
      />
    </>
  );
}
