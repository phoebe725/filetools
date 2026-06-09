import Link from "next/link";
import { defaultLocale } from "@/lib/i18n/config";

// Self-contained document because the passthrough root layout has no <html>.
export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center text-slate-800">
        <p className="text-5xl">🧭</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-2 text-slate-600">
          That tool or page doesn&apos;t exist (yet).
        </p>
        <Link
          href={`/${defaultLocale}`}
          className="mt-6 rounded-lg bg-brand-600 px-5 py-2.5 font-semibold text-white hover:bg-brand-700"
        >
          Back to all tools
        </Link>
      </body>
    </html>
  );
}
