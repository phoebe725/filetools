"use client";

import { useState } from "react";
import { UploadDropzone } from "../UploadDropzone";
import { ErrorState } from "../ErrorState";
import { ProgressBar } from "../ProgressBar";
import { ActionButton, DownloadResult } from "../DownloadButton";
import type { PdfThumbnail } from "@/lib/pdf-render";

const MAX_SIZE = 100 * 1024 * 1024;
const ACCEPT = ["application/pdf", ".pdf"];

export default function OrganizePdf() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState<PdfThumbnail[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Blob | null>(null);

  const addFile = async (files: File[]) => {
    const f = files[0];
    setFile(f);
    setPages([]);
    setResult(null);
    setErrors([]);
    setLoading(true);
    setProgress(0);
    try {
      const { renderPdfThumbnails } = await import("@/lib/pdf-render");
      const thumbs = await renderPdfThumbnails(f, 0.45, (done, total) =>
        setProgress(Math.round((done / total) * 100))
      );
      setPages(thumbs);
    } catch {
      setErrors(["Couldn't read this PDF. It may be corrupt or password-protected."]);
      setFile(null);
    } finally {
      setLoading(false);
    }
  };

  const move = (index: number, dir: -1 | 1) => {
    const target = index + dir;
    if (target < 0 || target >= pages.length) return;
    const next = [...pages];
    [next[index], next[target]] = [next[target], next[index]];
    setPages(next);
    setResult(null);
  };

  const remove = (pageNumber: number) => {
    setPages((prev) => prev.filter((p) => p.pageNumber !== pageNumber));
    setResult(null);
  };

  const apply = async () => {
    if (!file || pages.length === 0) return;
    setErrors([]);
    setBusy(true);
    setResult(null);
    try {
      const { extractPages } = await import("@/lib/pdf");
      // Build the new document from the (reordered, trimmed) page numbers.
      const indices = pages.map((p) => p.pageNumber - 1);
      const blob = await extractPages(file, indices);
      setResult(blob);
    } catch (e) {
      setErrors([e instanceof Error ? e.message : "Couldn't build the PDF."]);
    } finally {
      setBusy(false);
    }
  };

  const reset = () => {
    setFile(null);
    setPages([]);
    setResult(null);
    setErrors([]);
  };

  return (
    <div className="flex flex-col gap-4">
      {!file && (
        <UploadDropzone
          onFiles={addFile}
          onErrors={setErrors}
          multiple={false}
          accept={ACCEPT}
          maxSizeBytes={MAX_SIZE}
          hint="A single PDF"
        />
      )}

      {errors.length > 0 && <ErrorState messages={errors} onDismiss={() => setErrors([])} />}

      {loading && <ProgressBar value={progress} label={`Loading pages… ${progress}%`} />}

      {file && pages.length > 0 && !result && (
        <>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-700">
              {pages.length} page{pages.length === 1 ? "" : "s"} · reorder or remove
            </p>
            <button
              type="button"
              onClick={reset}
              className="text-sm text-slate-500 hover:text-slate-800"
            >
              Choose another PDF
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {pages.map((p, index) => (
              <div
                key={p.pageNumber}
                className="flex flex-col gap-1.5 rounded-lg border border-slate-200 bg-white p-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.dataUrl}
                  alt={`Page ${p.pageNumber}`}
                  className="w-full rounded border border-slate-100"
                />
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>#{p.pageNumber}</span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      aria-label="Move earlier"
                      disabled={index === 0}
                      onClick={() => move(index, -1)}
                      className="px-1 enabled:hover:text-slate-800 disabled:opacity-30"
                    >
                      ◀
                    </button>
                    <button
                      type="button"
                      aria-label="Move later"
                      disabled={index === pages.length - 1}
                      onClick={() => move(index, 1)}
                      className="px-1 enabled:hover:text-slate-800 disabled:opacity-30"
                    >
                      ▶
                    </button>
                    <button
                      type="button"
                      aria-label="Remove page"
                      onClick={() => remove(p.pageNumber)}
                      className="px-1 text-slate-400 hover:text-red-600"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {busy ? (
            <ProgressBar label="Building PDF…" />
          ) : (
            <ActionButton onClick={apply} disabled={pages.length === 0}>
              Export organized PDF
            </ActionButton>
          )}
        </>
      )}

      {file && pages.length === 0 && !loading && !result && (
        <ErrorState messages="All pages were removed. Add the PDF again to start over." />
      )}

      {result && <DownloadResult blob={result} filename="organized.pdf" onReset={reset} />}
    </div>
  );
}
