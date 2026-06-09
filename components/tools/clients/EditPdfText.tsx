"use client";

import { useState } from "react";
import { UploadDropzone } from "../UploadDropzone";
import { ErrorState } from "../ErrorState";
import { ProgressBar } from "../ProgressBar";
import { ActionButton, DownloadResult } from "../DownloadButton";
import { FidelityNote } from "../FidelityNote";

const MAX_SIZE = 100 * 1024 * 1024;
const ACCEPT = ["application/pdf", ".pdf"];

export default function EditPdfText() {
  const [file, setFile] = useState<File | null>(null);
  const [pageTexts, setPageTexts] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Blob | null>(null);

  const addFile = async (files: File[]) => {
    const f = files[0];
    setFile(f);
    setResult(null);
    setPageTexts([]);
    setErrors([]);
    setLoading(true);
    try {
      const { extractPdfPagesAsText } = await import("@/lib/pdf-text");
      setPageTexts(await extractPdfPagesAsText(f));
    } catch {
      setErrors(["Couldn't read this PDF. It may be corrupt or password-protected."]);
      setFile(null);
    } finally {
      setLoading(false);
    }
  };

  const updatePage = (index: number, value: string) => {
    setPageTexts((prev) => prev.map((t, i) => (i === index ? value : t)));
    setResult(null);
  };

  const rebuild = async () => {
    if (!file) return;
    setErrors([]);
    setBusy(true);
    setResult(null);
    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "pt", format: "a4" });
      const margin = 48;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const maxWidth = pageWidth - margin * 2;
      const lineHeight = 16;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);

      pageTexts.forEach((text, idx) => {
        if (idx > 0) doc.addPage();
        let y = margin;
        for (const para of text.split(/\n/)) {
          const wrapped = doc.splitTextToSize(para.length ? para : " ", maxWidth);
          for (const line of wrapped) {
            if (y > pageHeight - margin) {
              doc.addPage();
              y = margin;
            }
            doc.text(line, margin, y);
            y += lineHeight;
          }
        }
      });

      setResult(doc.output("blob"));
    } catch (e) {
      setErrors([e instanceof Error ? e.message : "Couldn't rebuild the PDF."]);
    } finally {
      setBusy(false);
    }
  };

  const reset = () => {
    setFile(null);
    setPageTexts([]);
    setResult(null);
    setErrors([]);
  };

  return (
    <div className="flex flex-col gap-4">
      <FidelityNote>
        this extracts the text so you can edit it, then rebuilds a clean text-only
        PDF. The original fonts, images, and exact layout are not preserved.
      </FidelityNote>

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
      {loading && <ProgressBar label="Extracting text…" />}

      {file && pageTexts.length > 0 && !result && (
        <>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-700">
              Edit text · {pageTexts.length} page{pageTexts.length === 1 ? "" : "s"}
            </p>
            <button
              type="button"
              onClick={reset}
              className="text-sm text-slate-500 hover:text-slate-800"
            >
              Choose another PDF
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {pageTexts.map((text, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-white p-3">
                <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-slate-400">
                  Page {i + 1}
                </p>
                <textarea
                  value={text}
                  onChange={(e) => updatePage(i, e.target.value)}
                  className="h-40 w-full resize-y rounded-md border border-slate-300 p-2 font-mono text-sm text-slate-700"
                />
              </div>
            ))}
          </div>
          {busy ? (
            <ProgressBar label="Rebuilding PDF…" />
          ) : (
            <ActionButton onClick={rebuild}>Rebuild PDF</ActionButton>
          )}
        </>
      )}

      {result && file && (
        <DownloadResult
          blob={result}
          filename={file.name.replace(/\.pdf$/i, "") + "-edited.pdf"}
          onReset={reset}
        />
      )}
    </div>
  );
}
