"use client";

import { useState } from "react";
import { UploadDropzone } from "../UploadDropzone";
import { FileList, type FileListItem } from "../FileList";
import { ErrorState } from "../ErrorState";
import { ProgressBar } from "../ProgressBar";
import { ActionButton } from "../DownloadButton";
import { ResultPartnerCTA } from "../ResultPartnerCTA";
import { downloadBlob, withExtension } from "@/lib/files";
import type { RenderedPage } from "@/lib/pdf-render";

const MAX_SIZE = 100 * 1024 * 1024;
const ACCEPT = ["application/pdf", ".pdf"];

const RESOLUTIONS = [
  { key: "standard", label: "Standard", scale: 1.5 },
  { key: "high", label: "High", scale: 2.5 },
];

export default function PdfToImages() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [scaleKey, setScaleKey] = useState("standard");
  const [pages, setPages] = useState<RenderedPage[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [zipping, setZipping] = useState(false);

  const addFile = async (files: File[]) => {
    const f = files[0];
    setFile(f);
    setPages([]);
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

  const convert = async () => {
    if (!file) return;
    setErrors([]);
    setPages([]);
    setBusy(true);
    setProgress(0);
    try {
      const { renderPdfToImages } = await import("@/lib/pdf-render");
      const scale = RESOLUTIONS.find((r) => r.key === scaleKey)!.scale;
      const rendered = await renderPdfToImages(file, scale, (done, total) =>
        setProgress(Math.round((done / total) * 100))
      );
      setPages(rendered);
    } catch (e) {
      setErrors([e instanceof Error ? e.message : "Couldn't render this PDF."]);
    } finally {
      setBusy(false);
    }
  };

  const baseName = file ? file.name.replace(/\.pdf$/i, "") : "page";

  const downloadAllZip = async () => {
    setZipping(true);
    try {
      const JSZip = (await import("jszip")).default;
      const zip = new JSZip();
      pages.forEach((p) =>
        zip.file(`${baseName}-${String(p.pageNumber).padStart(3, "0")}.png`, p.blob)
      );
      const blob = await zip.generateAsync({ type: "blob" });
      downloadBlob(blob, `${baseName}-images.zip`);
    } catch {
      setErrors(["Couldn't build the ZIP. Try downloading pages individually."]);
    } finally {
      setZipping(false);
    }
  };

  const reset = () => {
    setFile(null);
    setPages([]);
    setPageCount(null);
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

      {file && pages.length === 0 && (
        <>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="mb-2 text-sm font-medium text-slate-700">Resolution</p>
            <div className="flex flex-wrap gap-2">
              {RESOLUTIONS.map((r) => (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => setScaleKey(r.key)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                    scaleKey === r.key
                      ? "border-brand-500 bg-brand-50 text-brand-700"
                      : "border-slate-300 bg-white text-slate-600 hover:border-slate-400"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
          {busy ? (
            <ProgressBar value={progress} label={`Rendering pages… ${progress}%`} />
          ) : (
            <ActionButton onClick={convert}>Convert to images (PNG)</ActionButton>
          )}
        </>
      )}

      {pages.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-slate-700">
              {pages.length} page{pages.length === 1 ? "" : "s"} rendered
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={downloadAllZip}
                disabled={zipping}
                className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
              >
                {zipping ? "Zipping…" : "⬇️ Download all (ZIP)"}
              </button>
              <button
                type="button"
                onClick={reset}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Start over
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {pages.map((p) => (
              <div
                key={p.pageNumber}
                className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.dataUrl}
                  alt={`Page ${p.pageNumber}`}
                  className="w-full rounded border border-slate-100"
                />
                <button
                  type="button"
                  onClick={() =>
                    downloadBlob(
                      p.blob,
                      `${baseName}-${String(p.pageNumber).padStart(3, "0")}.png`
                    )
                  }
                  className="rounded-md border border-slate-300 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  ⬇️ Page {p.pageNumber}
                </button>
              </div>
            ))}
          </div>
          <ResultPartnerCTA />
        </div>
      )}
    </div>
  );
}
