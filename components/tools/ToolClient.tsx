"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { ProgressBar } from "./ProgressBar";
import { ComingSoonTool } from "./ComingSoonTool";
import { getTool } from "@/lib/tools";
import { useWidgets } from "@/components/I18nProvider";

function Loading() {
  const w = useWidgets();
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8">
      <ProgressBar label={w.loadingTool} />
    </div>
  );
}

// Heavy, browser-only tool widgets are loaded on the client only (ssr: false),
// which keeps PDF/image libraries out of the static HTML and initial bundle.
// next/dynamic requires the options to be an inline object literal.
const LIVE_COMPONENTS: Record<string, ComponentType> = {
  "image-converter": dynamic(() => import("./clients/ImageConverter"), {
    ssr: false,
    loading: Loading,
  }),
  "resize-image": dynamic(() => import("./clients/ResizeImage"), {
    ssr: false,
    loading: Loading,
  }),
  "compress-image": dynamic(() => import("./clients/CompressImage"), {
    ssr: false,
    loading: Loading,
  }),
  "images-to-pdf": dynamic(() => import("./clients/ImagesToPdf"), {
    ssr: false,
    loading: Loading,
  }),
  "merge-pdf": dynamic(() => import("./clients/MergePdf"), {
    ssr: false,
    loading: Loading,
  }),
  "split-pdf": dynamic(() => import("./clients/SplitPdf"), {
    ssr: false,
    loading: Loading,
  }),
  "rotate-pdf": dynamic(() => import("./clients/RotatePdf"), {
    ssr: false,
    loading: Loading,
  }),
  "add-page-numbers": dynamic(() => import("./clients/AddPageNumbers"), {
    ssr: false,
    loading: Loading,
  }),
  "heic-to-jpg": dynamic(() => import("./clients/HeicToJpg"), {
    ssr: false,
    loading: Loading,
  }),
  "pdf-to-images": dynamic(() => import("./clients/PdfToImages"), {
    ssr: false,
    loading: Loading,
  }),
  "organize-pdf": dynamic(() => import("./clients/OrganizePdf"), {
    ssr: false,
    loading: Loading,
  }),
  "compress-pdf": dynamic(() => import("./clients/CompressPdf"), {
    ssr: false,
    loading: Loading,
  }),
  "ocr-pdf": dynamic(() => import("./clients/OcrPdf"), {
    ssr: false,
    loading: Loading,
  }),
  "pdf-to-word": dynamic(() => import("./clients/PdfToWord"), {
    ssr: false,
    loading: Loading,
  }),
  "pdf-to-excel": dynamic(() => import("./clients/PdfToExcel"), {
    ssr: false,
    loading: Loading,
  }),
  "pdf-to-powerpoint": dynamic(() => import("./clients/PdfToPowerpoint"), {
    ssr: false,
    loading: Loading,
  }),
  "word-to-pdf": dynamic(() => import("./clients/WordToPdf"), {
    ssr: false,
    loading: Loading,
  }),
  "edit-pdf-text": dynamic(() => import("./clients/EditPdfText"), {
    ssr: false,
    loading: Loading,
  }),
};

export function ToolClient({ slug }: { slug: string }) {
  const tool = getTool(slug);
  const Live = LIVE_COMPONENTS[slug];
  if (Live) return <Live />;

  // Fallback for any tool without a dedicated widget yet.
  return (
    <ComingSoonTool
      actionLabel={tool ? `Use ${tool.name}` : "Continue"}
      hint="Any file"
    />
  );
}
