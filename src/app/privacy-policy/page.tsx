import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = generatePageMetadata(
  {
    title: `Privacy Policy`,
    description: `Privacy Policy for ${siteConfig.businessName} (${siteConfig.primaryCity}, ${siteConfig.primaryState}). Learn how we collect, use, share, and protect the information you provide when you contact us or use our website.`,
    path: "/privacy-policy",
  },
  siteConfig
);

export default function PrivacyPolicyPage() {
  const { businessName, email, phone, domain } = siteConfig;
  const updated = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <>
      <PageHero
        title="Privacy Policy"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]}
        showCtas={false}
      />
      <section className="bg-white py-14 lg:py-16">
        <div className="container-site max-w-3xl">
          <p className="mb-8 text-sm text-gray-500">Last updated: {updated}</p>
          <div className="article-content">
            <p>
              {businessName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website {domain}. This
              Privacy Policy explains how we collect, use, and protect your information when you use our site or
              contact us for services.
            </p>
            <h2>Information We Collect</h2>
            <p>
              When you submit a contact or quote form, we collect the information you provide — typically your
              name, phone number, email address, and details about the service you need. We may also collect
              standard analytics data such as pages visited and general location, used only to improve our website.
            </p>
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To respond to your inquiry and provide a quote or service.</li>
              <li>To contact you about your request by phone, text, or email.</li>
              <li>To improve our website and services.</li>
            </ul>
            <p>
              We do <strong>not</strong> sell your personal information to third parties. We only share it with
              service providers (such as our scheduling or messaging tools) as needed to respond to your request.
            </p>
            <h2>Cookies &amp; Analytics</h2>
            <p>
              Our site may use cookies and analytics tools to understand how visitors use the site. You can disable
              cookies in your browser settings; some features may not function as intended if you do.
            </p>
            <h2>Data Security</h2>
            <p>
              We take reasonable measures to protect your information. However, no method of transmission over the
              internet is completely secure, and we cannot guarantee absolute security.
            </p>
            <h2>Your Choices</h2>
            <p>
              You may request that we update or delete your information at any time by contacting us. You may also
              opt out of marketing communications at any time.
            </p>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact {businessName} at{" "}
              <a href={`mailto:${email}`}>{email}</a> or {phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
