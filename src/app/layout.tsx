import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import AppChrome from "@/components/AppChrome";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd, siteConfig, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ogImage = new URL(siteConfig.ogImage, siteConfig.url).toString();

/** Explicit mobile viewport — checklist item for mobile-friendly pages. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const defaultTitle = "IPTV Nederland — BesteIPTVNederland | Nederlandse zenders, sport en VOD";
const defaultDescription =
  "IPTV Nederland met BesteIPTVNederland: Nederlandse zenders, Eredivisie, VOD en abonnementen met 1–3 verbindingen. Proef van 24 uur, begeleide installatie en support in het Nederlands.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: "%s | BesteIPTVNederland",
  },
  description: defaultDescription,
  authors: [{ name: "BesteIPTVNederland" }],
  creator: "BesteIPTVNederland",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "BesteIPTVNederland — IPTV Nederland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: ogImage,
        alt: "BesteIPTVNederland — IPTV Nederland",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl-NL" className={`${dmSans.variable} h-full`}>
      <body className={`${dmSans.className} flex min-h-full flex-col antialiased`}>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
