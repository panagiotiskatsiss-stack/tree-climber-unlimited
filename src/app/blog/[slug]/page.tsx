import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { generateBlogMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateArticleSchema } from "@/lib/schema";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Phone } from "lucide-react";
import { blogPosts } from "@/content/blog/posts";

function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return generateBlogMetadata(post, siteConfig);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { phone, businessName } = siteConfig;
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `https://${siteConfig.domain}` },
    { name: "Blog", url: `https://${siteConfig.domain}/blog` },
    { name: post.title, url: `https://${siteConfig.domain}/blog/${post.slug}` },
  ]);
  const articleSchema = generateArticleSchema(post, siteConfig);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 pt-20">
        <div className="mx-auto max-w-4xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gray-900">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="truncate text-gray-900">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <header className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-sm text-gray-500">
                <Calendar className="size-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{post.excerpt}</p>
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative mb-10 aspect-video overflow-hidden rounded-lg">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          )}

          {/* Article Content */}
          <div
            className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA within article */}
          <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900">
              Need Professional Help?
            </h3>
            <p className="mt-2 text-gray-600">
              {businessName} is here to help with your project. Call us for a
              free estimate.
            </p>
            <a href={phoneHref} className="mt-4 inline-block">
              <Button
                size="lg"
                className="h-12 cursor-pointer gap-2 px-8 text-base font-semibold"
              >
                <Phone className="size-5" />
                {phone}
              </Button>
            </a>
          </div>

          {/* Back to Blog */}
          <div className="mt-10">
            <Link href="/blog">
              <Button variant="outline" className="cursor-pointer gap-2">
                <ArrowLeft className="size-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <CTASection
        title="Questions About Your Project?"
        subtitle={`Contact ${businessName} today. We are happy to answer your questions and provide a free estimate.`}
      />
    </>
  );
}
