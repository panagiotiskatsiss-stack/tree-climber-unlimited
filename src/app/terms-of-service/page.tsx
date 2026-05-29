import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = generatePageMetadata(
  {
    title: `Terms of Service`,
    description: `Terms of Service for ${siteConfig.businessName} (${siteConfig.primaryCity}, ${siteConfig.primaryState}). The terms and conditions governing your use of our website and the tree care services we provide.`,
    path: "/terms-of-service",
  },
  siteConfig
);

export default function TermsOfServicePage() {
  const { businessName, email, phone, domain } = siteConfig;
  const updated = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <>
      <PageHero
        title="Terms of Service"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Terms of Service" }]}
        showCtas={false}
      />
      <section className="bg-white py-14 lg:py-16">
        <div className="container-site max-w-3xl">
          <p className="mb-8 text-sm text-gray-500">Last updated: {updated}</p>
          <div className="article-content">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of the website {domain} and the services
              provided by {businessName}. By using our site or engaging our services, you agree to these Terms.
            </p>
            <h2>Use of Our Website</h2>
            <p>
              You may use our website for lawful purposes only. You agree not to misuse the site, attempt to
              disrupt it, or use it in any way that could harm {businessName} or other users.
            </p>
            <h2>Estimates &amp; Services</h2>
            <p>
              Estimates provided are based on the information available at the time and the conditions observed
              during assessment. Final pricing may vary if conditions differ from what was originally described.
              All services are subject to a separate agreement provided before work begins.
            </p>
            <h2>Scheduling &amp; Cancellation</h2>
            <p>
              We make every effort to honor scheduled appointments. Weather and emergency situations may require
              rescheduling. Please contact us as early as possible if you need to reschedule.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              {businessName} is fully licensed and insured. To the fullest extent permitted by law, we are not
              liable for any indirect or consequential damages arising from the use of our website. Nothing in these
              Terms limits liability that cannot be limited under applicable law.
            </p>
            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, images, and logos, is the property of {businessName} and
              may not be reproduced without permission.
            </p>
            <h2>Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the website after changes constitutes
              acceptance of the updated Terms.
            </p>
            <h2>Contact Us</h2>
            <p>
              Questions about these Terms? Contact {businessName} at <a href={`mailto:${email}`}>{email}</a> or {phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
