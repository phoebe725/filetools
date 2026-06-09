"use client";

import { useState } from "react";
import { UploadDropzone } from "../UploadDropzone";
import { FileList, type FileListItem } from "../FileList";
import { ErrorState } from "../ErrorState";
import { ProgressBar } from "../ProgressBar";
import { ActionButton, DownloadResult } from "../DownloadButton";
import { withExtension } from "@/lib/files";

const MAX_SIZE = 100 * 1024 * 1024;
const ACCEPT = ["application/pdf", ".pdf"];

const LEVELS = [
  { key: "strong", label: "Strong (smallest)", scale: 1.0, quality: 0.5 },
  { key: "balanced", label: "Balanced", scale: 1.5, quality: 0.65 },
  { key: "light", label: "Light (best quality)", scale: 2.0, quality: 0.8 },
];

export default function CompressPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [level, setLevel] = useState("balanced");
  const [errors, setErrors] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);

  const addFile = async (files: File[]) => {
    const f = files[0];
    setFile(f);
    setResult(null);
    setPageCount(null);
    try {
      const { getPdfPageCount } = await import("@/lib/pdf-render");
      setPageCount(await getPdfPageCount(f));
    } catch {
      setErrors(["Couldn't read this PDF. It may be corrupt or password-protected."]);
    }
  };

  const items: FileListItem[] = file
    ? [
        {
          id: "pdf",
          name: file.name,
          size: file.size,
          meta: pageCount ? `${pageCount} pages` : undefined,
        },
      ]
    : [];

  const compress = async () => {
    if (!file) return;
    setErrors([]);
    setBusy(true);
    setResult(null);
    setProgress(0);
    try {
      const { compressPdf } = await import("@/lib/pdf-compress");
      const cfg = LEVELS.find((l) => l.key === level)!;
      const blob = await compressPdf(file, {
        scale: cfg.scale,
        quality: cfg.quality,
        onProgress: (done, total) => setProgress(Math.round((done / total) * 100)),
      });
      setResult(blob);
    } catch (e) {
      setErrors([e instanceof Error ? e.message : "Couldn't compress this PDF."]);
    } finally {
      setBusy(false);
    }
  };

  const reset = () => {
    setFile(null);
    setPageCount(null);
    setResult(null);
    setErrors([]);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
        ℹ️ This compresses by rasterising pages, so text becomes part of the image
        (no longer selectable). It works best on <strong>scanned or image-heavy
        PDFs</strong>. For text documents, the size may not shrink much.
      </div>

      <UploadDropzone
        onFiles={addFile}
        onErrors={setErrors}
        multiple={false}
        accept={ACCEPT}
        maxSizeBytes={MAX_SIZE}
        hint="A single PDF"
      />

      {errors.length > 0 && <ErrorState messages={errors} onDismiss={() => setErrors([])} />}

      {file && <FileList items={items} onRemove={reset} />}

      {file && !result && (
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="mb-2 text-sm font-medium text-slate-700">Compression level</p>
          <div className="flex flex-wrap gap-2">
            {LEVELS.map((l) => (
              <button
                key={l.key}
                type="button"
                onClick={() => setLevel(l.key)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                  level === l.key
                    ? "border-brand-500 bg-brand-50 text-brand-700"
                    : "border-slate-300 bg-white text-slate-600 hover:border-slate-400"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {file && !result && (
        busy ? (
          <ProgressBar value={progress} label={`Compressing… ${progress}%`} />
        ) : (
          <ActionButton onClick={compress}>Compress PDF</ActionButton>
        )
      )}

      {result && (
        <DownloadResult
          blob={result}
          filename={withExtension(file?.name ?? "document.pdf", "pdf").replace(
            /\.pdf$/i,
            "-compressed.pdf"
          )}
          originalSize={file?.size}
          onReset={reset}
        />
      )}
    </div>
  );
}
