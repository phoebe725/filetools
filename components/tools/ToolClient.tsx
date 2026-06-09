"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { ProgressBar } from "./ProgressBar";
import { ComingSoonTool } from "./ComingSoonTool";
import { getTool } from "@/lib/tools";

const Loading = () => (
  <div className="rounded-xl border border-slate-200 bg-white p-8">
    <ProgressBar label="Loading tool…" />
  </div>
);

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
};

// Config for phase-2 placeholders and coming-soon tools, all rendered through
// the shared ComingSoonTool so the upload → action UI stays consistent.
interface SoonConfig {
  accept: string[];
  hint: string;
  multiple: boolean;
  actionLabel: string;
}

const SOON_CONFIG: Record<string, SoonConfig> = {
  // honest coming-soon
  "compress-pdf": {
    accept: ["application/pdf", ".pdf"],
    hint: "A single PDF",
    multiple: false,
    actionLabel: "Compress PDF",
  },
  "pdf-to-word": {
    accept: ["application/pdf", ".pdf"],
    hint: "A single PDF",
    multiple: false,
    actionLabel: "Convert to Word",
  },
  "word-to-pdf": {
    accept: [".doc", ".docx", "application/msword"],
    hint: "A Word document",
    multiple: false,
    actionLabel: "Convert to PDF",
  },
  "pdf-to-excel": {
    accept: ["application/pdf", ".pdf"],
    hint: "A single PDF",
    multiple: false,
    actionLabel: "Convert to Excel",
  },
  "pdf-to-powerpoint": {
    accept: ["application/pdf", ".pdf"],
    hint: "A single PDF",
    multiple: false,
    actionLabel: "Convert to PowerPoint",
  },
  "ocr-pdf": {
    accept: ["application/pdf", ".pdf"],
    hint: "A scanned PDF",
    multiple: false,
    actionLabel: "Run OCR",
  },
  "edit-pdf-text": {
    accept: ["application/pdf", ".pdf"],
    hint: "A single PDF",
    multiple: false,
    actionLabel: "Edit text",
  },
};

export function ToolClient({ slug }: { slug: string }) {
  const tool = getTool(slug);
  const Live = LIVE_COMPONENTS[slug];
  if (Live) return <Live />;

  const config = SOON_CONFIG[slug];
  if (config) {
    return (
      <ComingSoonTool
        accept={config.accept}
        hint={config.hint}
        multiple={config.multiple}
        actionLabel={config.actionLabel}
      />
    );
  }

  // Unknown slug fallback.
  return (
    <ComingSoonTool
      actionLabel={tool ? `Use ${tool.name}` : "Continue"}
      hint="Any file"
    />
  );
}
