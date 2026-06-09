import type { Faq } from "@/lib/tools";

export function HowItWorks({ steps }: { steps: string[] }) {
  return (
    <section aria-labelledby="how-heading" className="prose-tool">
      <h2 id="how-heading">How it works</h2>
      <ol className="list-decimal space-y-2 pl-5 text-slate-600">
        {steps.map((step, i) => (
          <li key={i} className="leading-relaxed">
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
}

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  if (faqs.length === 0) return null;
  return (
    <section aria-labelledby="faq-heading" className="prose-tool">
      <h2 id="faq-heading">Frequently asked questions</h2>
      <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        {faqs.map((faq, i) => (
          <details key={i} className="group p-4">
            <summary className="cursor-pointer list-none font-medium text-slate-800 marker:hidden">
              <span className="flex items-center justify-between gap-2">
                {faq.q}
                <span className="text-slate-400 transition group-open:rotate-180">⌄</span>
              </span>
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/** JSON-LD FAQ structured data for richer search results. */
export function FaqJsonLd({ faqs }: { faqs: Faq[] }) {
  if (faqs.length === 0) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
