// FTC/ASA-style affiliate disclosure. Shown on any page that has partner links.

export function AffiliateDisclosure({ text }: { text: string }) {
  return (
    <p className="rounded-md bg-slate-50 px-3 py-2 text-xs leading-relaxed text-slate-400">
      {text}
    </p>
  );
}
