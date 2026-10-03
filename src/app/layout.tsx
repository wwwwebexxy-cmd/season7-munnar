import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import Loader from "@/components/ui/Loader";
import ScrollToTop from "@/components/ui/ScrollToTop";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "SEASON7 THE NATURE RESORT | Munnar",
  description:
    "A nature resort experience in Munnar surrounded by forested hills, peaceful landscapes and comfortable accommodation.",
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Season7 The Nature Resort",
    "Munnar resort",
    "Munnar cottages",
    "Chithirapuram resort",
    "Kerala nature stay",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "SEASON7 THE NATURE RESORT | Munnar",
    description:
      "A nature resort experience in Munnar surrounded by forested hills, peaceful landscapes and comfortable accommodation.",
    url: site.url,
    siteName: site.shortName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEASON7 THE NATURE RESORT | Munnar",
    description:
      "A nature resort experience in Munnar surrounded by forested hills, peaceful landscapes and comfortable accommodation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Resort",
    name: site.legalName,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Eatty City Road, Chithirapuram, PO, Anachal",
      addressLocality: "Munnar",
      addressRegion: "Kerala",
      postalCode: "685565",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Loader />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
