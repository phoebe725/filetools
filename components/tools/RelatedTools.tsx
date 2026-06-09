import Link from "next/link";
import { getTool } from "@/lib/tools";

export function RelatedTools({ slugs }: { slugs: string[] }) {
  const tools = slugs.map(getTool).filter(Boolean);
  if (tools.length === 0) return null;
  return (
    <section aria-labelledby="related-heading" className="mt-12">
      <h2 id="related-heading" className="mb-4 text-xl font-semibold text-slate-900">
        Related tools
      </h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool!.slug}
            href={`/tools/${tool!.slug}`}
            className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-brand-300 hover:shadow-sm"
          >
            <span className="text-2xl" aria-hidden>
              {tool!.icon}
            </span>
            <div>
              <p className="font-medium text-slate-800">{tool!.name}</p>
              <p className="text-xs text-slate-500">{tool!.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
