import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { locales, isLocale, htmlLang, defaultLocale, SITE_URL } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = isLocale(locale) ? locale : defaultLocale;
  return {
    title: {
      default: "FileTools — Free Browser-Based PDF & Image Tools",
      template: "%s | FileTools",
    },
    description:
      "Free online file tools that run entirely in your browser. Convert, compress, resize images and merge, split, rotate PDFs. Your files never leave your device.",
    alternates: {
      canonical: `${SITE_URL}/${loc}`,
      languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}`])),
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = getMessages(locale);

  return (
    <html lang={htmlLang[locale]}>
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
        <Nav locale={locale} t={messages.nav} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} t={messages.footer} />
      </body>
    </html>
  );
}
