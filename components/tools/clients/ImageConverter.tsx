"use client";

import { useEffect, useMemo, useState } from "react";
import { UploadDropzone } from "../UploadDropzone";
import { FileList, type FileListItem } from "../FileList";
import { ErrorState } from "../ErrorState";
import { ProgressBar } from "../ProgressBar";
import { ActionButton, DownloadResult } from "../DownloadButton";
import { convertImage } from "@/lib/image";
import { detectFormatSupport, type OutputFormat } from "@/lib/feature-detection";
import { withExtension } from "@/lib/files";

const MAX_SIZE = 25 * 1024 * 1024; // 25 MB per image
const MAX_FILES = 20;
const ACCEPT = ["image/png", "image/jpeg", "image/webp", "image/avif"];

interface FormatOption {
  key: string;
  label: string;
  mime: OutputFormat;
  ext: string;
  lossy: boolean;
}

const FORMATS: FormatOption[] = [
  { key: "png", label: "PNG", mime: "image/png", ext: "png", lossy: false },
  { key: "jpg", label: "JPG", mime: "image/jpeg", ext: "jpg", lossy: true },
  { key: "webp", label: "WebP", mime: "image/webp", ext: "webp", lossy: true },
  { key: "avif", label: "AVIF", mime: "image/avif", ext: "avif", lossy: true },
];

interface SourceFile {
  id: string;
  file: File;
  previewUrl: string;
}

interface ResultFile {
  id: string;
  blob: Blob;
  filename: string;
  originalSize: number;
}

export default function ImageConverter() {
  const [sources, setSources] = useState<SourceFile[]>([]);
  const [results, setResults] = useState<ResultFile[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [format, setFormat] = useState("jpg");
  const [quality, setQuality] = useState(0.9);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);

  const support = useMemo(() => detectFormatSupport(), []);

  // Clean up object URLs.
  useEffect(() => {
    return () => sources.forEach((s) => URL.revokeObjectURL(s.previewUrl));
  }, [sources]);

  const selected = FORMATS.find((f) => f.key === format)!;
  const formatSupported = support[format as keyof typeof support];

  const addFiles = (files: File[]) => {
    const mapped = files.map((file, i) => ({
      id: `${file.name}-${file.size}-${Date.now()}-${i}`,
      file,
      previewUrl: URL.createObjectURL(file),
    }));
    setSources((prev) => [...prev, ...mapped]);
    setResults([]);
  };

  const items: FileListItem[] = sources.map((s) => ({
    id: s.id,
    name: s.file.name,
    size: s.file.size,
    previewUrl: s.previewUrl,
  }));

  const convertAll = async () => {
    setErrors([]);
    setResults([]);
    setBusy(true);
    setProgress(0);
    const out: ResultFile[] = [];
    const failures: string[] = [];
    for (let i = 0; i < sources.length; i++) {
      const src = sources[i];
      try {
        const blob = await convertImage(src.file, {
          format: selected.mime,
          quality: selected.lossy ? quality : undefined,
        });
        out.push({
          id: src.id,
          blob,
          filename: withExtension(src.file.name, selected.ext),
          originalSize: src.file.size,
        });
      } catch (e) {
        failures.push(
          `"${src.file.name}": ${e instanceof Error ? e.message : "conversion failed"}`
        );
      }
      setProgress(Math.round(((i + 1) / sources.length) * 100));
    }
    setResults(out);
    if (failures.length) setErrors(failures);
    setBusy(false);
  };

  const reset = () => {
    setSources([]);
    setResults([]);
    setErrors([]);
  };

  return (
    <div className="flex flex-col gap-4">
      <UploadDropzone
        onFiles={addFiles}
        onErrors={setErrors}
        existingCount={sources.length}
        accept={ACCEPT}
        maxSizeBytes={MAX_SIZE}
        maxFiles={MAX_FILES}
        hint="PNG, JPG, WebP or AVIF · up to 20 files"
      />

      {errors.length > 0 && (
        <ErrorState messages={errors} onDismiss={() => setErrors([])} />
      )}

      {sources.length > 0 && (
        <>
          <FileList
            items={items}
            onRemove={(id) => setSources((prev) => prev.filter((s) => s.id !== id))}
          />

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="mb-2 text-sm font-medium text-slate-700">Convert to</p>
            <div className="flex flex-wrap gap-2">
              {FORMATS.map((f) => {
                const ok = support[f.key as keyof typeof support];
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
            {!formatSupported && (
              <p className="mt-2 text-sm text-amber-700">
                Your browser can&apos;t produce {selected.label}. Pick another format.
              </p>
            )}

            {selected.lossy && formatSupported && (
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
            )}
          </div>

          {busy ? (
            <ProgressBar value={progress} label={`Converting… ${progress}%`} />
          ) : (
            <ActionButton onClick={convertAll} disabled={!formatSupported}>
              Convert {sources.length > 1 ? `${sources.length} images` : "image"}
            </ActionButton>
          )}
        </>
      )}

      {results.length > 0 && (
        <div className="flex flex-col gap-3">
          {results.map((r) => (
            <DownloadResult
              key={r.id}
              blob={r.blob}
              filename={r.filename}
              originalSize={r.originalSize}
            />
          ))}
          <button
            type="button"
            onClick={reset}
            className="self-center rounded-lg border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Start over
          </button>
        </div>
      )}
    </div>
  );
}
