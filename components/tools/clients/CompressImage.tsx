"use client";

import { useEffect, useMemo, useState } from "react";
import { UploadDropzone } from "../UploadDropzone";
import { FileList, type FileListItem } from "../FileList";
import { ErrorState } from "../ErrorState";
import { ProgressBar } from "../ProgressBar";
import { ActionButton, DownloadResult } from "../DownloadButton";
import { compressImage } from "@/lib/image";
import { detectFormatSupport, type OutputFormat } from "@/lib/feature-detection";
import { formatBytes, withExtension } from "@/lib/files";

const MAX_SIZE = 25 * 1024 * 1024; // 25 MB
const ACCEPT = ["image/png", "image/jpeg", "image/webp"];

interface FormatOption {
  key: string;
  label: string;
  mime: OutputFormat;
  ext: string;
}

const FORMATS: FormatOption[] = [
  { key: "jpg", label: "JPG", mime: "image/jpeg", ext: "jpg" },
  { key: "webp", label: "WebP", mime: "image/webp", ext: "webp" },
];

interface SourceFile {
  id: string;
  file: File;
  previewUrl: string;
}

export default function CompressImage() {
  const [source, setSource] = useState<SourceFile | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [format, setFormat] = useState("jpg");
  const [quality, setQuality] = useState(0.8);
  const [estimate, setEstimate] = useState<Blob | null>(null);
  const [estimating, setEstimating] = useState(false);
  const [result, setResult] = useState<Blob | null>(null);

  const support = useMemo(() => detectFormatSupport(), []);
  const webpSupported = support.webp;

  // Clean up object URL.
  useEffect(() => {
    return () => {
      if (source) URL.revokeObjectURL(source.previewUrl);
    };
  }, [source]);

  const selected = FORMATS.find((f) => f.key === format)!;

  // Recompute the estimated compressed size whenever quality / format / file change.
  useEffect(() => {
    if (!source) {
      setEstimate(null);
      return;
    }
    let stale = false;
    setEstimating(true);
    setEstimate(null);
    (async () => {
      try {
        const blob = await compressImage(source.file, selected.mime, quality);
        if (!stale) setEstimate(blob);
      } catch (e) {
        if (!stale) {
          setErrors([
            e instanceof Error
              ? `Couldn't compress this image: ${e.message}`
              : "Couldn't compress this image. It may be corrupt or unsupported.",
          ]);
        }
      } finally {
        if (!stale) setEstimating(false);
      }
    })();
    return () => {
      stale = true;
    };
  }, [source, selected.mime, quality]);

  const addFiles = (files: File[]) => {
    const file = files[0];
    if (!file) return;
    setSource((prev) => {
      if (prev) URL.revokeObjectURL(prev.previewUrl);
      return {
        id: `${file.name}-${file.size}-${Date.now()}-0`,
        file,
        previewUrl: URL.createObjectURL(file),
      };
    });
    setResult(null);
    setErrors([]);
  };

  const items: FileListItem[] = source
    ? [
        {
          id: source.id,
          name: source.file.name,
          size: source.file.size,
          previewUrl: source.previewUrl,
          meta: `Original · ${formatBytes(source.file.size)}`,
        },
      ]
    : [];

  const removeSource = () => {
    setSource((prev) => {
      if (prev) URL.revokeObjectURL(prev.previewUrl);
      return null;
    });
    setResult(null);
    setEstimate(null);
    setErrors([]);
  };

  const compress = () => {
    if (!estimate) return;
    setResult(estimate);
  };

  const reset = () => {
    removeSource();
  };

  const saved =
    source && estimate
      ? Math.max(0, Math.round((1 - estimate.size / source.file.size) * 100))
      : 0;

  return (
    <div className="flex flex-col gap-4">
      <UploadDropzone
        onFiles={addFiles}
        onErrors={setErrors}
        existingCount={source ? 1 : 0}
        multiple={false}
        accept={ACCEPT}
        maxSizeBytes={MAX_SIZE}
        hint="PNG, JPG or WebP"
      />

      {errors.length > 0 && (
        <ErrorState messages={errors} onDismiss={() => setErrors([])} />
      )}

      {source && (
        <>
          <FileList items={items} onRemove={removeSource} />

          {!result && (
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="mb-2 text-sm font-medium text-slate-700">Output format</p>
              <div className="flex flex-wrap gap-2">
                {FORMATS.map((f) => {
                  const ok = f.key !== "webp" || webpSupported;
                  return (
                    <button
                      key={f.key}
                      type="button"
                      disabled={!ok}
                      onClick={() => setFormat(f.key)}
                      className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                        format === f.key
                          ? "border-brand-500 bg-brand-50 text-brand-700"
                          : "border-slate-300 bg-white text-slate-600 hover:border-slate-400"
                      } disabled:cursor-not-allowed disabled:opacity-40`}
                      title={ok ? undefined : `${f.label} output isn't supported by your browser`}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4">
                <label className="flex items-center justify-between text-sm text-slate-600">
                  <span>Quality</span>
                  <span className="font-medium text-slate-800">
                    {Math.round(quality * 100)}%
                  </span>
                </label>
                <input
                  type="range"
                  min={0.1}
                  max={1}
                  step={0.05}
                  value={quality}
                  onChange={(e) => setQuality(parseFloat(e.target.value))}
                  className="mt-1 w-full accent-brand-600"
                />
              </div>

              <div className="mt-4 rounded-lg bg-slate-50 p-4 text-sm">
                {estimating ? (
                  <p className="text-slate-500">Estimating compressed size…</p>
                ) : estimate ? (
                  <div className="flex flex-wrap items-center gap-2 text-slate-700">
                    <span className="font-medium">{formatBytes(source.file.size)}</span>
                    <span className="text-slate-400">→</span>
                    <span className="font-medium text-slate-900">
                      {formatBytes(estimate.size)}
                    </span>
                    {saved > 0 && (
                      <span className="rounded-md bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">
                        {saved}% smaller
                      </span>
                    )}
                  </div>
                ) : (
                  <p className="text-slate-500">No estimate yet.</p>
                )}
              </div>
            </div>
          )}

          {!result &&
            (estimating ? (
              <ProgressBar label="Estimating…" />
            ) : (
              <ActionButton onClick={compress} disabled={!estimate}>
                Compress image
              </ActionButton>
            ))}
        </>
      )}

      {result && source && (
        <DownloadResult
          blob={result}
          filename={withExtension(source.file.name, selected.ext)}
          originalSize={source.file.size}
          onReset={reset}
        />
      )}
    </div>
  );
}
