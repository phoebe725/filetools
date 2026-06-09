"use client";

import { useState } from "react";
import { UploadDropzone } from "../UploadDropzone";
import { FileList, type FileListItem } from "../FileList";
import { ErrorState } from "../ErrorState";
import { ProgressBar } from "../ProgressBar";
import { ActionButton, DownloadResult } from "../DownloadButton";

const MAX_SIZE = 100 * 1024 * 1024; // 100 MB
const ACCEPT = ["application/pdf", ".pdf"];
const ANGLES = [90, 180, 270];

interface SourcePdf {
  id: string;
  file: File;
  pageCount: number | null;
}

export default function RotatePdf() {
  const [source, setSource] = useState<SourcePdf | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [angle, setAngle] = useState(90);
  const [allPages, setAllPages] = useState(true);
  const [ranges, setRanges] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Blob | null>(null);

  const addFiles = (files: File[]) => {
    const file = files[0];
    if (!file) return;
    const next: SourcePdf = {
      id: `${file.name}-${file.size}-0`,
      file,
      pageCount: null,
    };
    setSource(next);
    setResult(null);
    setErrors([]);
    void loadPageCount(next);
  };

  const loadPageCount = async (src: SourcePdf) => {
    try {
      const { getPageCount } = await import("@/lib/pdf");
      const count = await getPageCount(src.file);
      setSource((prev) =>
        prev && prev.id === src.id ? { ...prev, pageCount: count } : prev
      );
    } catch {
      setErrors([
        "Couldn't read this PDF. It may be corrupt or password-protected.",
      ]);
    }
  };

  const items: FileListItem[] = source
    ? [
        {
          id: source.id,
          name: source.file.name,
          size: source.file.size,
          meta:
            source.pageCount === null
              ? "Reading…"
              : `${source.pageCount} page${source.pageCount === 1 ? "" : "s"}`,
        },
      ]
    : [];

  const rotate = async () => {
    if (!source) return;
    setErrors([]);
    setBusy(true);
    setResult(null);
    try {
      const { rotatePdf, parsePageRanges } = await import("@/lib/pdf");
      let indices: number[] | null = null;
      if (!allPages) {
        if (source.pageCount === null) {
          throw new Error("Still reading the PDF. Please try again in a moment.");
        }
        indices = parsePageRanges(ranges, source.pageCount);
      }
      const blob = await rotatePdf(source.file, angle, indices);
      setResult(blob);
    } catch (e) {
      setErrors([
        e instanceof Error
          ? e.message
          : "Couldn't rotate this PDF. It may be corrupt or password-protected.",
      ]);
    } finally {
      setBusy(false);
    }
  };

  const reset = () => {
    setSource(null);
    setResult(null);
    setErrors([]);
    setRanges("");
    setAllPages(true);
    setAngle(90);
  };

  return (
    <div className="flex flex-col gap-4">
      <UploadDropzone
        onFiles={addFiles}
        onErrors={setErrors}
        existingCount={source ? 1 : 0}
        multiple={false}
        accept={ACCEPT}
        maxSizeBytes={MAX_SIZE}
        maxFiles={1}
        hint="A single PDF"
      />

      {errors.length > 0 && (
        <ErrorState messages={errors} onDismiss={() => setErrors([])} />
      )}

      {source && (
        <FileList items={items} onRemove={reset} />
      )}

      {source && !result && (
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="mb-2 text-sm font-medium text-slate-700">
            Rotate clockwise
          </p>
          <div className="flex flex-wrap gap-2">
            {ANGLES.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => {
                  setAngle(a);
                  setResult(null);
                }}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                  angle === a
                    ? "border-brand-500 bg-brand-50 text-brand-700"
                    : "border-slate-300 bg-white text-slate-600 hover:border-slate-400"
                }`}
              >
                {a}°
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                setAllPages(true);
                setResult(null);
              }}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                allPages
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-slate-300 bg-white text-slate-600 hover:border-slate-400"
              }`}
            >
              All pages
            </button>
            <button
              type="button"
              onClick={() => {
                setAllPages(false);
                setResult(null);
              }}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                !allPages
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-slate-300 bg-white text-slate-600 hover:border-slate-400"
              }`}
            >
              Specific pages
            </button>
          </div>

          {!allPages && (
            <div className="mt-4">
              <label className="mb-1 block text-sm text-slate-600">
                Pages to rotate
              </label>
              <input
                type="text"
                value={ranges}
                onChange={(e) => {
                  setRanges(e.target.value);
                  setResult(null);
                }}
                placeholder="e.g. 1-3, 5"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-brand-500"
              />
            </div>
          )}
        </div>
      )}

      {source && !result && (
        busy ? (
          <ProgressBar label="Rotating PDF…" />
        ) : (
          <ActionButton onClick={rotate} disabled={!source}>
            Rotate PDF
          </ActionButton>
        )
      )}

      {result && (
        <DownloadResult
          blob={result}
          filename="rotated.pdf"
          originalSize={source?.file.size}
          onReset={reset}
        />
      )}
    </div>
  );
}
