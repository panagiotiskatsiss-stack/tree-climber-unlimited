import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { Analytics, GoogleSearchConsole } from "@/lib/analytics";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `${siteConfig.businessName} provides professional ${siteConfig.services.map((s) => s.name.toLowerCase()).join(", ")} in ${siteConfig.primaryCity}, ${siteConfig.primaryState}. ${siteConfig.yearsInBusiness}+ years of trusted service. ${siteConfig.ctaText}.`,
  metadataBase: new URL(`https://${siteConfig.domain}`),
  openGraph: {
    siteName: siteConfig.businessName,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema(siteConfig);

  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} h-full antialiased`}>
      <head>
        <GoogleSearchConsole />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
