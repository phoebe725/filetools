// Shown on every tool page. The exact wording is required by product spec.

export function PrivacyNote() {
  return (
    <p className="flex items-center justify-center gap-2 rounded-lg bg-emerald-50 px-4 py-2.5 text-center text-sm font-medium text-emerald-800">
      <span aria-hidden>🔒</span>
      Your files are processed in your browser and never leave your device.
    </p>
  );
}
