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

const XLSX_MIME =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

export default function PdfToExcel() {
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
      const XLSX = await import("xlsx");

      // Each line becomes a row; runs of 2+ spaces are treated as column breaks.
      const rows: string[][] = [];
      pages.forEach((lines, idx) => {
        if (idx > 0) rows.push([]); // blank separator row between pages
        lines.forEach((line) => {
          rows.push(line.split(/\s{2,}/).map((c) => c.trim()));
        });
      });

      const ws = XLSX.utils.aoa_to_sheet(rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Extracted");
      const out = XLSX.write(wb, { type: "array", bookType: "xlsx" });
      setResult(new Blob([out], { type: XLSX_MIME }));
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
        text is placed into spreadsheet rows, splitting columns on wide gaps. Real
        table structure varies, so check the result and adjust columns as needed.
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
          <ProgressBar label="Building spreadsheet…" />
        ) : (
          <ActionButton onClick={convert}>Convert to Excel (.xlsx)</ActionButton>
        )
      )}

      {result && file && (
        <DownloadResult
          blob={result}
          filename={file.name.replace(/\.pdf$/i, "") + ".xlsx"}
          onReset={reset}
        />
      )}
    </div>
  );
}
