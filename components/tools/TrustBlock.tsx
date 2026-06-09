// Trust signal shown on every tool page. The three points are provided already
// localized (a single "·"-separated string per locale).

export function TrustBlock({ text }: { text: string }) {
  const points = text.split("·").map((p) => p.trim()).filter(Boolean);
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
      <span aria-hidden>🔒</span>
      {points.map((p, i) => (
        <span key={i} className="flex items-center gap-4">
          {i > 0 && <span aria-hidden className="text-emerald-300">·</span>}
          {p}
        </span>
      ))}
    </div>
  );
}
