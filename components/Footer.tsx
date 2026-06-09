import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span>🧰</span>
          <span className="font-semibold text-slate-700">FileTools</span>
          <span className="text-slate-400">· Private, in-browser file tools</span>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <Link href="/privacy" className="hover:text-slate-900">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-slate-900">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-slate-900">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
