import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Preloader from "@/components/ui/Preloader";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

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
  title: "SEASON7 NATURAL RESORT MUNNAR | Amrutha Resort",
  description:
    "Season7 Natural Resort Munnar is a premium nature retreat with comfortable rooms, warm hospitality, local dining and restorative experiences in Kerala's highlands.",
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Season7 Natural Resort Munnar",
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
    title: "SEASON7 NATURAL RESORT MUNNAR | Amrutha Resort",
    description:
      "Season7 Natural Resort Munnar is a premium nature retreat with comfortable rooms, warm hospitality, local dining and restorative experiences in Kerala's highlands.",
    url: site.url,
    siteName: site.shortName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEASON7 NATURAL RESORT MUNNAR | Amrutha Resort",
    description:
      "Season7 Natural Resort Munnar is a premium nature retreat with comfortable rooms, warm hospitality, local dining and restorative experiences in Kerala's highlands.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Munnar",
    "geo.position": "10.0210;77.0371",
    "ICBM": "10.0210, 77.0371",
  }
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
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body>
        <Preloader />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
