"use client";

import { useState } from "react";
import { UploadDropzone } from "../UploadDropzone";
import { FileList, type FileListItem } from "../FileList";
import { ErrorState } from "../ErrorState";
import { ProgressBar } from "../ProgressBar";
import { ActionButton, DownloadResult } from "../DownloadButton";
import { FidelityNote } from "../FidelityNote";

const MAX_SIZE = 50 * 1024 * 1024;
const ACCEPT = [
  ".docx",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function WordToPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Blob | null>(null);

  const addFile = (files: File[]) => {
    setFile(files[0]);
    setResult(null);
  };

  const items: FileListItem[] = file
    ? [{ id: "doc", name: file.name, size: file.size }]
    : [];

  const convert = async () => {
    if (!file) return;
    setErrors([]);
    setBusy(true);
    setResult(null);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const mammoth = (await import("mammoth/mammoth.browser")).default;
      const { value: html } = await mammoth.convertToHtml({ arrayBuffer });

      // Render to a hidden element to recover readable line breaks.
      const div = document.createElement("div");
      div.style.position = "fixed";
      div.style.left = "-9999px";
      div.innerHTML = html;
      document.body.appendChild(div);
      const text = div.innerText;
      div.remove();

      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "pt", format: "a4" });
      const margin = 48;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const maxWidth = pageWidth - margin * 2;
      const lineHeight = 16;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);

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

      setResult(doc.output("blob"));
    } catch (e) {
      setErrors([
        e instanceof Error
          ? `Couldn't convert this document: ${e.message}`
          : "Couldn't convert this document. Make sure it's a .docx file.",
      ]);
    } finally {
      setBusy(false);
    }
  };

  const reset = () => {
    setFile(null);
    setResult(null);
    setErrors([]);
  };

  return (
    <div className="flex flex-col gap-4">
      <FidelityNote>
        text and paragraph flow are preserved; complex styling, images, and tables
        may be simplified or dropped. Best for mostly-text .docx files (English).
      </FidelityNote>

      <UploadDropzone
        onFiles={addFile}
        onErrors={setErrors}
        multiple={false}
        accept={ACCEPT}
        maxSizeBytes={MAX_SIZE}
        hint="A Word .docx document"
      />

      {errors.length > 0 && <ErrorState messages={errors} onDismiss={() => setErrors([])} />}
      {file && <FileList items={items} onRemove={reset} />}

      {file && !result && (
        busy ? (
          <ProgressBar label="Building PDF…" />
        ) : (
          <ActionButton onClick={convert}>Convert to PDF</ActionButton>
        )
      )}

      {result && file && (
        <DownloadResult
          blob={result}
          filename={file.name.replace(/\.docx?$/i, "") + ".pdf"}
          onReset={reset}
        />
      )}
    </div>
  );
}
