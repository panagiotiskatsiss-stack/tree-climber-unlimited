import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { generateBlogMetadata } from "@/lib/metadata";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  baseUrl,
  jsonLd,
} from "@/lib/schema";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays, Phone } from "lucide-react";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return generateBlogMetadata(post, siteConfig);
}

function fmt(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { businessName, phone } = siteConfig;
  const url = baseUrl(siteConfig);
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;
  const related = getRelatedPosts(post, 3);

  const schema = jsonLd(
    generateArticleSchema(post, siteConfig),
    generateBreadcrumbSchema([
      { name: "Home", url: `${url}/` },
      { name: "Blog", url: `${url}/blog` },
      { name: post.title, url: `${url}/blog/${post.slug}` },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      <PageHero
        title={post.title}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.category },
        ]}
        showCtas={false}
      />

      <article className="bg-white py-14 lg:py-16">
        <div className="container-site max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-500">
              <CalendarDays className="size-4" />
              <time dateTime={post.date}>{fmt(post.date)}</time>
            </span>
          </div>

          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image src={post.coverImage!} alt={post.title} fill priority sizes="(max-width:1024px) 100vw, 768px" className="object-cover" />
          </div>

          <p className="mb-8 text-lg font-medium leading-relaxed text-gray-700">{post.excerpt}</p>

          <div className="article-content" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* In-article CTA */}
          <div className="mt-12 rounded-2xl border border-primary/15 bg-primary/5 p-7 text-center">
            <h2 className="font-heading text-xl tracking-tight text-gray-900">Need Professional Tree Care?</h2>
            <p className="mt-2 text-gray-600">
              {businessName} is here to help with a free, no-obligation estimate.
            </p>
            <a href={phoneHref} className="mt-4 inline-block">
              <Button className="h-12 gap-2 rounded-full px-7 font-bold uppercase tracking-wide">
                <Phone className="size-5" />
                {phone}
              </Button>
            </a>
          </div>

          <div className="mt-8">
            <Link href="/blog">
              <Button variant="outline" className="gap-2 rounded-full font-semibold">
                <ArrowLeft className="size-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Related posts (cluster) */}
      {related.length > 0 && (
        <section className="bg-muted py-14">
          <div className="container-site">
            <h2 className="text-center font-heading text-2xl tracking-tight text-gray-900">
              Related Articles
            </h2>
            <div className="mx-auto mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  title={`${r.title} — ${businessName}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-natural)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-deep)]"
                >
                  <div className="relative aspect-[16/9]">
                    <Image src={r.coverImage!} alt={r.title} fill sizes="33vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base leading-snug tracking-tight text-gray-900 group-hover:text-primary">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Questions About Your Trees?"
        subtitle={`Contact ${businessName} today — we're happy to help and provide a free estimate.`}
      />
    </>
  );
}
