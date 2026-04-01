import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Home, Phone, Mail } from "lucide-react";

export default function NotFound() {
  const { phone, email, businessName } = siteConfig;
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 pt-24 pb-16">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-7xl font-extrabold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have
          been moved or no longer exists.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/">
            <Button size="lg" className="h-12 cursor-pointer gap-2 px-8 text-base font-semibold">
              <Home className="size-5" />
              Go Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="h-12 cursor-pointer px-8 text-base font-semibold"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        <div className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
          <p className="mb-3 text-sm font-medium text-gray-900">
            Need help? Contact {businessName} directly:
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 text-lg font-bold text-primary hover:underline"
            >
              <Phone className="size-5" />
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary"
            >
              <Mail className="size-4" />
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
