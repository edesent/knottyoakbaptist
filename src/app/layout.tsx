import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://www.knottyoak.org";
const SITE_NAME = "Knotty Oak Baptist Church";
const OG_IMAGE = "/og-image.svg"; // swap to a 1200x630 JPG once real photos are in

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Independent Baptist Church in Coventry, RI`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "A warm, Bible-believing Independent Baptist church in Coventry, Rhode Island. Join Pastor Justin Martin for Sunday worship at 10 AM, Sunday evening at 6 PM, and Thursday at 6 PM. Speaking the truth in love since 1828.",
  keywords: [
    "Knotty Oak Baptist Church",
    "Baptist church Coventry RI",
    "Independent Baptist church Rhode Island",
    "KJV Baptist church near me",
    "Pastor Justin Martin",
    "church Coventry Rhode Island",
    "Bible church Kent County RI",
    "Sunday worship Coventry RI",
    "children's ministry Coventry",
    "teen ministry Rhode Island",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} — Coventry, RI`,
    description:
      "A warm Independent Baptist church in the heart of Coventry, RI. Speaking the truth in love — all are welcome.",
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Coventry, Rhode Island`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Coventry, RI`,
    description: "Independent Baptist church in Coventry, RI. Speaking the truth in love.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
  category: "religion",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-paper text-ink-body">
        {children}
      </body>
    </html>
  );
}
