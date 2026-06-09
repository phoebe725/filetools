"use client";

import { downloadBlob, formatBytes } from "@/lib/files";
import { useWidgets } from "@/components/I18nProvider";

interface DownloadResultProps {
  blob: Blob;
  filename: string;
  /** Optional original size to show a savings comparison. */
  originalSize?: number;
  onReset?: () => void;
}

/** A success card with a download button and an optional size comparison. */
export function DownloadResult({
  blob,
  filename,
  originalSize,
  onReset,
}: DownloadResultProps) {
  const w = useWidgets();
  const savings =
    originalSize && originalSize > 0
      ? Math.round((1 - blob.size / originalSize) * 100)
      : null;

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center">
      <div>
        <p className="text-2xl">✅</p>
        <p className="mt-1 font-semibold text-emerald-900">{w.ready}</p>
        <p className="truncate text-sm text-emerald-700">{filename}</p>
        <p className="mt-1 text-sm text-emerald-700">
          {formatBytes(blob.size)}
          {originalSize ? ` · ${w.was} ${formatBytes(originalSize)}` : ""}
          {savings !== null && savings > 0 ? ` · ${savings}% ${w.smaller}` : ""}
          {savings !== null && savings < 0 ? ` · ${Math.abs(savings)}% ${w.larger}` : ""}
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={() => downloadBlob(blob, filename)}
          className="w-full rounded-lg bg-emerald-600 px-5 py-2.5 font-semibold text-white hover:bg-emerald-700 sm:w-auto"
        >
          ⬇️ {w.download}
        </button>
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="w-full rounded-lg border border-slate-300 bg-white px-5 py-2.5 font-medium text-slate-700 hover:bg-slate-50 sm:w-auto"
          >
            {w.startOver}
          </button>
        )}
      </div>
    </div>
  );
}

/** A primary action button with a consistent look and loading state. */
export function ActionButton({
  children,
  onClick,
  disabled,
  loading,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}) {
  const w = useWidgets();
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className="w-full rounded-lg bg-brand-600 px-5 py-3 font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? w.working : children}
    </button>
  );
}
