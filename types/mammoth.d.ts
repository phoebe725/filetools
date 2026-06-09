declare module "mammoth/mammoth.browser" {
  interface ConvertInput {
    arrayBuffer: ArrayBuffer;
  }
  interface ConvertResult {
    value: string;
    messages: unknown[];
  }
  export function convertToHtml(input: ConvertInput): Promise<ConvertResult>;
  export function extractRawText(input: ConvertInput): Promise<ConvertResult>;
  const _default: {
    convertToHtml: typeof convertToHtml;
    extractRawText: typeof extractRawText;
  };
  export default _default;
}
