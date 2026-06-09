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

const SLIDE_W = 13.333; // inches (16:9 wide)
const SLIDE_H = 7.5;

export default function PdfToPowerpoint() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);

  const addFile = async (files: File[]) => {
    const f = files[0];
    setFile(f);
    setResult(null);
    setPageCount(null);
    try {
      const { getPdfPageCount } = await import("@/lib/pdf-render");
      setPageCount(await getPdfPageCount(f));
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
    setProgress(0);
    try {
      const { renderPdfToImages } = await import("@/lib/pdf-render");
      const pages = await renderPdfToImages(file, 2, (d, t) =>
        setProgress(Math.round((d / t) * 80))
      );

      const PptxGenJS = (await import("pptxgenjs")).default;
      const pptx = new PptxGenJS();
      pptx.defineLayout({ name: "WIDE", width: SLIDE_W, height: SLIDE_H });
      pptx.layout = "WIDE";

      pages.forEach((p) => {
        const imgAspect = p.width / p.height;
        const slideAspect = SLIDE_W / SLIDE_H;
        let w = SLIDE_W;
        let h = SLIDE_H;
        if (imgAspect > slideAspect) {
          h = SLIDE_W / imgAspect;
        } else {
          w = SLIDE_H * imgAspect;
        }
        const slide = pptx.addSlide();
        slide.addImage({
          data: p.dataUrl,
          x: (SLIDE_W - w) / 2,
          y: (SLIDE_H - h) / 2,
          w,
          h,
        });
      });
      setProgress(95);

      const blob = (await pptx.write({ outputType: "blob" })) as Blob;
      setResult(blob);
      setProgress(100);
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
        each PDF page becomes a full-slide image. Slides look just like the PDF, but
        the text on them isn&apos;t individually editable.
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
          <ProgressBar value={progress} label={`Building slides… ${progress}%`} />
        ) : (
          <ActionButton onClick={convert}>Convert to PowerPoint (.pptx)</ActionButton>
        )
      )}

      {result && file && (
        <DownloadResult
          blob={result}
          filename={file.name.replace(/\.pdf$/i, "") + ".pptx"}
          onReset={reset}
        />
      )}
    </div>
  );
}
