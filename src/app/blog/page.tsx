import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/content/blog/posts";

export const metadata: Metadata = generatePageMetadata(
  {
    title: "Blog",
    description: `Expert tips, guides, and news from ${siteConfig.businessName}. Learn about ${siteConfig.services.map((s) => s.name.toLowerCase()).join(", ")} and more.`,
    path: "/blog",
  },
  siteConfig
);

export default function BlogPage() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Hero
        title="Blog"
        subtitle={`Expert tips, guides, and industry news from ${siteConfig.businessName}.`}
        showBadges={false}
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <Card className="h-full border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
                    {/* Cover image */}
                    <div className="relative aspect-video bg-gray-100">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="text-sm text-gray-400">
                            {post.category}
                          </span>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="size-4" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <CardTitle className="mt-2 text-lg font-bold text-gray-900 group-hover:text-primary">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Read More
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg text-gray-500">
                No blog posts yet. Check back soon for expert tips and guides.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Have Questions? We Have Answers."
        subtitle={`Contact ${siteConfig.businessName} today — we are happy to help with your project.`}
      />
    </>
  );
}
