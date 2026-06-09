// Affiliate call-to-action box. Rendered OUTSIDE the conversion flow (in the
// sidebar / below content) — never between the user and their result.
// Links are rel="sponsored noopener" per Google's affiliate-link guidance.

export function PartnerCTA({
  heading,
  body,
  url,
  network,
  cta,
}: {
  heading: string;
  body: string;
  url: string;
  network: string;
  cta: string;
}) {
  // A "#" URL means no partner is wired up yet — render nothing.
  if (!url || url === "#") return null;
  return (
    <aside className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5">
      <p className="text-sm font-semibold text-slate-900">{heading}</p>
      <p className="mt-1 text-sm text-slate-600">{body}</p>
      <a
        href={url}
        target="_blank"
        rel="sponsored noopener noreferrer"
        data-network={network}
        className="mt-3 inline-flex items-center gap-1 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
      >
        {cta} →
      </a>
    </aside>
  );
}
