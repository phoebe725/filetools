import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export const metadata: Metadata = {
  metadataBase: new URL("https://filetools.example.com"),
  title: {
    default: "FileTools — Free Browser-Based PDF & Image Tools",
    template: "%s | FileTools",
  },
  description:
    "Free online file tools that run entirely in your browser. Convert, compress, resize images and merge, split, rotate PDFs. Your files never leave your device.",
  keywords: [
    "pdf tools",
    "image tools",
    "merge pdf",
    "split pdf",
    "compress image",
    "convert image",
    "images to pdf",
  ],
  openGraph: {
    type: "website",
    title: "FileTools — Free Browser-Based PDF & Image Tools",
    description:
      "Free online file tools that run entirely in your browser. Your files never leave your device.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        {ADSENSE_CLIENT && (
          <Script
            id="adsbygoogle-init"
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          />
        )}
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
