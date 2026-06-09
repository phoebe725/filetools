"use client";

import { useState } from "react";
import { UploadDropzone } from "../UploadDropzone";
import { FileList, type FileListItem } from "../FileList";
import { ErrorState } from "../ErrorState";
import { ProgressBar } from "../ProgressBar";
import { ActionButton } from "../DownloadButton";
import { downloadBlob } from "@/lib/files";

const MAX_SIZE = 60 * 1024 * 1024;
const MAX_FILES = 10;
const ACCEPT = [
  "application/pdf",
  ".pdf",
  "image/png",
  "image/jpeg",
  "image/webp",
];

interface SourceFile {
  id: string;
  file: File;
}

function isPdf(file: File) {
  return file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
}

export default function OcrPdf() {
  const [sources, setSources] = useState<SourceFile[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [text, setText] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const addFiles = (files: File[]) => {
    const mapped = files.map((file, i) => ({
      id: `${file.name}-${file.size}-${sources.length + i}`,
      file,
    }));
    setSources((prev) => [...prev, ...mapped]);
    setText(null);
  };

  const items: FileListItem[] = sources.map((s) => ({
    id: s.id,
    name: s.file.name,
    size: s.file.size,
  }));

  const runOcr = async () => {
    setErrors([]);
    setText(null);
    setBusy(true);
    setProgress(0);
    setStatus("Preparing…");
    try {
      // Expand PDFs into page images; pass images straight through.
      const pages: Array<string | File> = [];
      const { renderPdfToImages } = await import("@/lib/pdf-render");
      for (const s of sources) {
        if (isPdf(s.file)) {
          setStatus(`Rendering ${s.file.name}…`);
          const rendered = await renderPdfToImages(s.file, 2);
          rendered.forEach((r) => pages.push(r.dataUrl));
        } else {
          pages.push(s.file);
        }
      }
      if (pages.length === 0) throw new Error("Nothing to read.");

      const { createWorker } = await import("tesseract.js");
      setStatus("Loading text-recognition engine (first run downloads ~10 MB)…");
      const worker = await createWorker("eng");

      let all = "";
      for (let i = 0; i < pages.length; i++) {
        setStatus(`Reading page ${i + 1} of ${pages.length}…`);
        const { data } = await worker.recognize(pages[i]);
        const pageText = data.text.trim();
        all += (pages.length > 1 ? `\n\n----- Page ${i + 1} -----\n` : "") + pageText;
        setProgress(Math.round(((i + 1) / pages.length) * 100));
      }
      await worker.terminate();

      const clean = all.trim();
      setText(clean || "(No readable text was found.)");
    } catch (e) {
      setErrors([e instanceof Error ? e.message : "OCR failed. Try a clearer scan."]);
    } finally {
      setBusy(false);
      setStatus("");
    }
  };

  const copy = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setErrors(["Couldn't copy to clipboard."]);
    }
  };

  const reset = () => {
    setSources([]);
    setText(null);
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
        hint="Scanned PDF or images (PNG/JPG) · English"
      />

      {errors.length > 0 && <ErrorState messages={errors} onDismiss={() => setErrors([])} />}

      {sources.length > 0 && (
        <FileList
          items={items}
          onRemove={(id) => setSources((prev) => prev.filter((s) => s.id !== id))}
        />
      )}

      {sources.length > 0 && !text && (
        busy ? (
          <ProgressBar value={progress || undefined} label={status || "Working…"} />
        ) : (
          <ActionButton onClick={runOcr}>Extract text (OCR)</ActionButton>
        )
      )}

      {text && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-700">Extracted text</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={copy}
                className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
              <button
                type="button"
                onClick={() =>
                  downloadBlob(
                    new Blob([text], { type: "text/plain" }),
                    "extracted-text.txt"
                  )
                }
                className="rounded-lg bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                ⬇️ Download .txt
              </button>
            </div>
          </div>
          <textarea
            readOnly
            value={text}
            className="h-72 w-full resize-y rounded-lg border border-slate-300 bg-white p-3 font-mono text-sm text-slate-700"
          />
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
