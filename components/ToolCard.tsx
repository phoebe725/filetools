import Link from "next/link";
import type { Tool } from "@/lib/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  const isSoon = tool.status === "soon";
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group relative flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-brand-300 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <span className="text-3xl" aria-hidden>
          {tool.icon}
        </span>
        {isSoon && (
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
            Soon
          </span>
        )}
        {tool.status === "phase2" && (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            Beta
          </span>
        )}
      </div>
      <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">
        {tool.name}
      </h3>
      <p className="text-sm text-slate-500">{tool.tagline}</p>
    </Link>
  );
}
