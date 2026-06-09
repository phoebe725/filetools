import Link from "next/link";
import type { ToolStatus } from "@/lib/tools";

interface ToolCardProps {
  href: string;
  icon: string;
  status: ToolStatus;
  name: string;
  tagline: string;
  soonLabel?: string;
  betaLabel?: string;
}

export function ToolCard({
  href,
  icon,
  status,
  name,
  tagline,
  soonLabel = "Soon",
  betaLabel = "Beta",
}: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-brand-300 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <span className="text-3xl" aria-hidden>
          {icon}
        </span>
        {status === "soon" && (
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
            {soonLabel}
          </span>
        )}
        {status === "phase2" && (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            {betaLabel}
          </span>
        )}
      </div>
      <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">{name}</h3>
      <p className="text-sm text-slate-500">{tagline}</p>
    </Link>
  );
}
