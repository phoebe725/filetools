"use client";

import { useState } from "react";
import { UploadDropzone } from "../UploadDropzone";
import { FileList, type FileListItem } from "../FileList";
import { ErrorState } from "../ErrorState";
import { ProgressBar } from "../ProgressBar";
import { ActionButton, DownloadResult } from "../DownloadButton";
import type { PageNumberPosition } from "@/lib/pdf";

const MAX_SIZE = 100 * 1024 * 1024;
const ACCEPT = ["application/pdf", ".pdf"];

const POSITIONS: { key: PageNumberPosition; label: string }[] = [
  { key: "bottom-center", label: "Bottom center" },
  { key: "bottom-right", label: "Bottom right" },
  { key: "bottom-left", label: "Bottom left" },
  { key: "top-center", label: "Top center" },
  { key: "top-right", label: "Top right" },
  { key: "top-left", label: "Top left" },
];

export default function AddPageNumbers() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [position, setPosition] = useState<PageNumberPosition>("bottom-center");
  const [startAt, setStartAt] = useState(1);
  const [fontSize, setFontSize] = useState(11);
  const [errors, setErrors] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Blob | null>(null);

  const addFile = async (files: File[]) => {
    const f = files[0];
    setFile(f);
    setResult(null);
    setPageCount(null);
    try {
      const { getPageCount } = await import("@/lib/pdf");
      setPageCount(await getPageCount(f));
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

  const apply = async () => {
    if (!file) return;
    setErrors([]);
    setBusy(true);
    setResult(null);
    try {
      const { addPageNumbers } = await import("@/lib/pdf");
      const blob = await addPageNumbers(file, { position, startAt, fontSize });
      setResult(blob);
    } catch (e) {
      setErrors([e instanceof Error ? e.message : "Couldn't add page numbers."]);
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
          <p className="mb-2 text-sm font-medium text-slate-700">Position</p>
          <div className="flex flex-wrap gap-2">
            {POSITIONS.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => setPosition(p.key)}
                className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                  position === p.key
                    ? "border-brand-500 bg-brand-50 text-brand-700"
                    : "border-slate-300 bg-white text-slate-600 hover:border-slate-400"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-6">
            <label className="text-sm text-slate-600">
              Start at
              <input
                type="number"
                min={0}
                value={startAt}
                onChange={(e) => setStartAt(Math.max(0, parseInt(e.target.value || "0", 10)))}
                className="mt-1 block w-24 rounded-lg border border-slate-300 px-3 py-1.5 text-sm"
              />
            </label>
            <label className="text-sm text-slate-600">
              Font size
              <input
                type="number"
                min={6}
                max={48}
                value={fontSize}
                onChange={(e) =>
                  setFontSize(Math.min(48, Math.max(6, parseInt(e.target.value || "11", 10))))
                }
                className="mt-1 block w-24 rounded-lg border border-slate-300 px-3 py-1.5 text-sm"
              />
            </label>
          </div>
        </div>
      )}

      {file && !result && (
        busy ? (
          <ProgressBar label="Adding page numbers…" />
        ) : (
          <ActionButton onClick={apply}>Add page numbers</ActionButton>
        )
      )}

      {result && (
        <DownloadResult blob={result} filename="numbered.pdf" onReset={reset} />
      )}
    </div>
  );
}
