"use client";

import { useState } from "react";
import { UploadDropzone } from "../UploadDropzone";
import { FileList, type FileListItem } from "../FileList";
import { ErrorState } from "../ErrorState";
import { ProgressBar } from "../ProgressBar";
import { ActionButton, DownloadResult } from "../DownloadButton";
import { FidelityNote } from "../FidelityNote";

const MAX_SIZE = 100 * 1024 * 1024;
const ACCEPT = ["application/pdf", ".pdf"];

export default function PdfToWord() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
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
    ? [{ id: "pdf", name: file.name, size: file.size, meta: pageCount ? `${pageCount} pages` : undefined }]
    : [];

  const convert = async () => {
    if (!file) return;
    setErrors([]);
    setBusy(true);
    setResult(null);
    try {
      const { extractPdfPagesAsLines } = await import("@/lib/pdf-text");
      const pages = await extractPdfPagesAsLines(file);
      const { Document, Packer, Paragraph, TextRun, PageBreak } = await import("docx");

      const paragraphs: InstanceType<typeof Paragraph>[] = [];
      pages.forEach((lines, idx) => {
        if (idx > 0) paragraphs.push(new Paragraph({ children: [new PageBreak()] }));
        if (lines.length === 0) {
          paragraphs.push(new Paragraph(""));
          return;
        }
        lines.forEach((l) =>
          paragraphs.push(new Paragraph({ children: [new TextRun(l)] }))
        );
      });

      const doc = new Document({ sections: [{ children: paragraphs }] });
      const blob = await Packer.toBlob(doc);
      setResult(blob);
    } catch (e) {
      setErrors([e instanceof Error ? e.message : "Couldn't convert this PDF."]);
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
      <FidelityNote>
        the text is extracted into an editable Word document. Columns, images, and
        exact positioning are not preserved.
      </FidelityNote>

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
        busy ? (
          <ProgressBar label="Building Word document…" />
        ) : (
          <ActionButton onClick={convert}>Convert to Word (.docx)</ActionButton>
        )
      )}

      {result && file && (
        <DownloadResult
          blob={result}
          filename={file.name.replace(/\.pdf$/i, "") + ".docx"}
          onReset={reset}
        />
      )}
    </div>
  );
}
