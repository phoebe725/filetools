// Shown on every tool page. The wording is provided per-locale.

export function PrivacyNote({ text }: { text: string }) {
  return (
    <p className="flex items-center justify-center gap-2 rounded-lg bg-emerald-50 px-4 py-2.5 text-center text-sm font-medium text-emerald-800">
      <span aria-hidden>🔒</span>
      {text}
    </p>
  );
}
