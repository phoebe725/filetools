// Best-effort HEIC/HEIF → JPG conversion in the browser via heic2any.
// HEIC decoding isn't supported everywhere, so this can fail on some files.

export async function heicToJpeg(file: File, quality = 0.9): Promise<Blob> {
  const heic2any = (await import("heic2any")).default;
  try {
    const result = await heic2any({
      blob: file,
      toType: "image/jpeg",
      quality,
    });
    // heic2any returns a Blob, or an array for multi-image files.
    return Array.isArray(result) ? result[0] : result;
  } catch {
    throw new Error(
      "Couldn't decode this HEIC file. Some HEIC variants aren't supported in the browser — try a different photo."
    );
  }
}
