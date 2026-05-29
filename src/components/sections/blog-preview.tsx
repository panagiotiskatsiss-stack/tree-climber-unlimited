import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getAllPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";

function fmt(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

/** Section 13 — latest blog posts (live data). */
export function BlogPreview() {
  const { businessName } = siteConfig;
  const placeholderPosts = getAllPosts().slice(0, 3);

  return (
    <section className="bg-muted py-16 lg:py-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="From the Blog"
          title="Tree Care Tips & Advice"
          subtitle="Helpful guides from our certified arborists to keep your property safe and beautiful."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {placeholderPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              title={`${post.title} — ${businessName}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-natural)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-deep)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.coverImage!}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                  <CalendarDays className="size-3.5" />
                  {fmt(post.date)}
                </p>
                <h3 className="mt-2 font-heading text-lg leading-snug tracking-tight text-gray-900 transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-primary">
                  Read More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog">
            <Button variant="outline" className="h-12 rounded-full px-7 font-bold uppercase tracking-wide">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
