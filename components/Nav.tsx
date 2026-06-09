import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-900">
          <span className="text-xl">🧰</span>
          <span className="text-lg">FileTools</span>
        </Link>
        <div className="flex items-center gap-1 text-sm font-medium text-slate-600">
          <Link
            href="/#pdf"
            className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-900"
          >
            PDF
          </Link>
          <Link
            href="/#image"
            className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-900"
          >
            Image
          </Link>
          <Link
            href="/#convert"
            className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-900"
          >
            Convert
          </Link>
        </div>
      </nav>
    </header>
  );
}
