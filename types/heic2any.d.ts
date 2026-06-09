declare module "heic2any" {
  interface Heic2AnyOptions {
    blob: Blob;
    toType?: "image/jpeg" | "image/png" | "image/gif" | "image/webp";
    quality?: number;
    /** Frame to extract from multi-image HEIC; defaults to the primary image. */
    multiple?: boolean;
  }
  export default function heic2any(
    options: Heic2AnyOptions
  ): Promise<Blob | Blob[]>;
}
