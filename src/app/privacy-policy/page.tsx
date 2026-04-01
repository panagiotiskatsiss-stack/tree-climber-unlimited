import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata(
  {
    title: "Privacy Policy",
    description: `Privacy Policy for ${siteConfig.businessName}. Learn how we collect, use, and protect your personal information.`,
    path: "/privacy-policy",
  },
  siteConfig
);

export default function PrivacyPolicyPage() {
  const { businessName, email, domain } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-gray-500">
          Last updated: January 1, {currentYear}
        </p>

        <div className="prose prose-gray mt-10 max-w-none">
          <h2>Introduction</h2>
          <p>
            {businessName} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
            respects your privacy and is committed to protecting the personal
            information you share with us. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website at {domain} and use our services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide to Us</h3>
          <p>We may collect personal information that you voluntarily provide when you:</p>
          <ul>
            <li>Fill out our contact form (name, phone number, email address, message)</li>
            <li>Call us directly</li>
            <li>Request a quote or estimate</li>
            <li>Communicate with us via email or other channels</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <p>
            When you visit our website, we may automatically collect certain
            information about your device and browsing activity, including:
          </p>
          <ul>
            <li>IP address and approximate geographic location</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website URLs</li>
            <li>Pages viewed and time spent on our site</li>
            <li>Date and time of your visit</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and requests for quotes</li>
            <li>Provide our services and communicate with you about projects</li>
            <li>Send follow-up communications related to your inquiry</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
            <li>Analyze website usage to improve user experience</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience and analyze site traffic. Cookies
            are small text files stored on your device that help us understand
            how you interact with our website.
          </p>
          <p>We may use the following types of cookies:</p>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> Required for basic website functionality.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors use our site
              (e.g., Google Analytics).
            </li>
          </ul>
          <p>
            You can control cookie preferences through your browser settings.
            Disabling cookies may affect some website functionality.
          </p>

          <h2>Third-Party Services</h2>
          <p>We may share your information with third-party service providers that help us operate our business, including:</p>
          <ul>
            <li>
              <strong>Google Analytics:</strong> For website traffic analysis. Google&apos;s
              privacy policy can be found at{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
              .
            </li>
            <li>
              <strong>Email Service Providers:</strong> To send responses and communications.
            </li>
            <li>
              <strong>CRM Software:</strong> To manage customer interactions and project details.
            </li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to third
            parties for marketing purposes.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the Internet
            or electronic storage is 100% secure, and we cannot guarantee
            absolute security.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your personal information only as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of inaccurate personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of certain data collection practices</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the
            information provided below.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our website is not directed at children under 13 years of age. We
            do not knowingly collect personal information from children. If you
            believe we have inadvertently collected information from a child,
            please contact us so we can promptly delete it.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will post the
            updated policy on this page with a revised &quot;Last updated&quot;
            date. We encourage you to review this policy periodically.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us:
          </p>
          <ul>
            <li>
              <strong>Business:</strong> {businessName}
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <strong>Website:</strong> {domain}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
