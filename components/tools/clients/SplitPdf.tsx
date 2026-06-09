"use client";

import { useState } from "react";
import { UploadDropzone } from "../UploadDropzone";
import { FileList, type FileListItem } from "../FileList";
import { ErrorState } from "../ErrorState";
import { ProgressBar } from "../ProgressBar";
import { ActionButton, DownloadResult } from "../DownloadButton";

const MAX_SIZE = 100 * 1024 * 1024; // 100 MB
const ACCEPT = ["application/pdf", ".pdf"];

interface SourcePdf {
  id: string;
  file: File;
  pageCount: number | null;
}

export default function SplitPdf() {
  const [source, setSource] = useState<SourcePdf | null>(null);
  const [ranges, setRanges] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Blob | null>(null);

  const addFiles = async (files: File[]) => {
    const file = files[0];
    if (!file) return;
    setErrors([]);
    setResult(null);
    const next: SourcePdf = {
      id: `${file.name}-${file.size}-0`,
      file,
      pageCount: null,
    };
    setSource(next);
    try {
      const { getPageCount } = await import("@/lib/pdf");
      const pageCount = await getPageCount(file);
      setSource((prev) =>
        prev && prev.id === next.id ? { ...prev, pageCount } : prev
      );
    } catch (e) {
      setErrors([
        e instanceof Error
          ? `Couldn't read this PDF: ${e.message}`
          : "Couldn't read this PDF. It may be corrupt or password-protected.",
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
              : `${source.pageCount} pages`,
        },
      ]
    : [];

  const split = async () => {
    if (!source) return;
    setErrors([]);
    setBusy(true);
    setResult(null);
    try {
      const { parsePageRanges, extractPages } = await import("@/lib/pdf");
      const pageCount =
        source.pageCount ??
        (await (await import("@/lib/pdf")).getPageCount(source.file));
      const indices = parsePageRanges(ranges, pageCount);
      const blob = await extractPages(source.file, indices);
      setResult(blob);
    } catch (e) {
      setErrors([
        e instanceof Error
          ? e.message
          : "Couldn't split this PDF. Check your page ranges and try again.",
      ]);
    } finally {
      setBusy(false);
    }
  };

  const reset = () => {
    setSource(null);
    setRanges("");
    setResult(null);
    setErrors([]);
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
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Pages to extract
          </label>
          <input
            type="text"
            value={ranges}
            onChange={(e) => setRanges(e.target.value)}
            placeholder="e.g. 1-3, 5, 8-10"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
          <p className="mt-2 text-sm text-slate-500">
            Use commas for separate pages and dashes for ranges.
          </p>
        </div>
      )}

      {source && !result && (
        busy ? (
          <ProgressBar label="Splitting PDF…" />
        ) : (
          <ActionButton onClick={split} disabled={ranges.trim().length === 0}>
            Split PDF
          </ActionButton>
        )
      )}

      {result && (
        <DownloadResult blob={result} filename="split.pdf" onReset={reset} />
      )}
    </div>
  );
}
