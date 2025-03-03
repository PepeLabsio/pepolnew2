import type { Metadata } from "next";
import "./globals.css";
import FooterPage from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/favicon/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: "@pepol",
    creator: "@pepol",
    images: [
      {
        url: `${SITE_URL}/assets/og/og.jpg`,
        width: 1280,
        height: 428,
        alt: SITE_DESCRIPTION,
      },
    ],
  },
  creator: "Pepol",
  openGraph: {
    url: SITE_URL,
    type: "website",
    title: SITE_TITLE,
    siteName: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en-US",
    images: [
      {
        url: `${SITE_URL}/assets/og/og.jpg`,
        width: 1280,
        height: 428,
        alt: SITE_DESCRIPTION,
        type: "image/jpg",
      },
    ],
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon/favicon-32x32.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
