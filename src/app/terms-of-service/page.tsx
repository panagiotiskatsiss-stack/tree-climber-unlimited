import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata(
  {
    title: "Terms of Service",
    description: `Terms of Service for ${siteConfig.businessName}. Please read these terms carefully before using our website or services.`,
    path: "/terms-of-service",
  },
  siteConfig
);

export default function TermsOfServicePage() {
  const { businessName, email, domain, primaryState } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-gray-500">
          Last updated: January 1, {currentYear}
        </p>

        <div className="prose prose-gray mt-10 max-w-none">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using the {businessName} website at {domain}
            (&quot;the Site&quot;), you agree to be bound by these Terms of
            Service (&quot;Terms&quot;). If you do not agree with any part of
            these Terms, you must not use the Site.
          </p>

          <h2>Services</h2>
          <p>
            {businessName} provides home improvement and contractor services
            as described on the Site. All services are subject to availability
            and may vary by location. Specific terms for individual projects
            will be outlined in a separate written agreement or estimate
            provided prior to the commencement of work.
          </p>
          <p>
            Estimates and quotes provided through the Site or during
            consultations are non-binding until a formal agreement is signed
            by both parties. Final pricing may vary based on actual project
            scope, materials, and conditions discovered during the work.
          </p>

          <h2>Use of the Website</h2>
          <p>You agree to use the Site only for lawful purposes and in a manner that does not:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the rights of others</li>
            <li>Interfere with or disrupt the Site or its servers</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>Submit false, misleading, or fraudulent information</li>
            <li>Use the Site to send unsolicited commercial communications</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content on the Site, including text, images, logos, graphics,
            and design elements, is the property of {businessName} or its
            licensors and is protected by copyright, trademark, and other
            intellectual property laws. You may not reproduce, distribute,
            modify, or create derivative works from any content on the Site
            without our express written permission.
          </p>

          <h2>Contact Form and Communications</h2>
          <p>
            When you submit information through our contact form or other
            communication channels, you represent that the information
            provided is accurate and complete. We will use your information
            in accordance with our Privacy Policy. By submitting a contact
            form, you consent to being contacted by {businessName} regarding
            your inquiry.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            The Site is provided on an &quot;as is&quot; and &quot;as
            available&quot; basis without warranties of any kind, either
            express or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
          <p>
            We do not warrant that the Site will be uninterrupted,
            error-free, or free of viruses or other harmful components. We
            make no guarantees regarding the accuracy, completeness, or
            timeliness of information on the Site.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {businessName}, its
            owners, employees, agents, and affiliates shall not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages arising from or related to your use of the Site,
            including but not limited to loss of profits, data, or goodwill.
          </p>
          <p>
            Our total liability for any claim arising from or related to the
            Site shall not exceed the amount you paid to {businessName} for
            services in the twelve (12) months preceding the claim, or one
            hundred dollars ($100), whichever is greater.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless {businessName},
            its owners, employees, agents, and affiliates from and against
            any claims, damages, losses, costs, and expenses (including
            reasonable attorney fees) arising from your use of the Site or
            violation of these Terms.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites or services
            that are not owned or controlled by {businessName}. We have no
            control over and assume no responsibility for the content,
            privacy policies, or practices of any third-party websites. Your
            use of third-party websites is at your own risk.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the State of {primaryState}, without regard to its
            conflict of law provisions. Any legal disputes arising from these
            Terms or your use of the Site shall be resolved in the courts
            located in {primaryState}.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes
            will be effective immediately upon posting on the Site. Your
            continued use of the Site after any changes constitutes your
            acceptance of the revised Terms. We encourage you to review these
            Terms periodically.
          </p>

          <h2>Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid or
            unenforceable, the remaining provisions shall continue in full
            force and effect.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us:
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
