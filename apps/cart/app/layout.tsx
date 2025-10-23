import "./globals.css";
import { ReactNode } from "react";
import Providers from "./providers";
import Header from "./components/Header";
import { satoshi, archivoBlack } from "@repo/fonts";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://shop.co"),
  title: { default: "Cart - SHOP.CO", template: "%s - SHOP.CO" },
  description:
    "SHOP.CO: New-season apparel for men & women, limited collections, and fast delivery. Secure shopping, easy returns.",
  keywords: [
    "shop.co",
    "online shopping",
    "menswear",
    "womenswear",
    "shoes",
    "accessories",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/cart",
    languages: {
      "en-US": "/en",
      "tr-TR": "/tr",
    },
  },
  openGraph: {
    type: "website",
    siteName: "SHOP.CO",
    url: "/",
    title: "SHOP.CO",
    description:
      "New-season clothing, shoes, and accessories. Fast delivery and easy returns.",
    locale: "en_US",
    images: [
      {
        url: "/next.svg",
        width: 1200,
        height: 630,
        alt: "SHOP.CO - New season collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shopco",
    creator: "@shopco",
    title: "SHOP.CO",
    description:
      "New-season clothing, shoes, and accessories. Fast delivery and easy returns.",
    images: ["/next.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" className={`${archivoBlack.variable} ${satoshi.variable}`}>
      <body className="min-h-dvh antialiased">
        <Providers>
          <Header />
          <main className="container-block my-5 lg:my-8 xl:my-12">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
