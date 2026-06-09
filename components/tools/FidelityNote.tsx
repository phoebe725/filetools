// Honest banner for best-effort conversions whose layout/formatting may not be
// preserved. Sets expectations without faking a perfect result.

export function FidelityNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm text-amber-800">
      ⚠️ Best-effort conversion: {children}
    </div>
  );
}
