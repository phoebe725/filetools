import { ToolCard } from "@/components/ToolCard";
import { AdSlot } from "@/components/AdSlot";
import {
  TOOLS,
  CATEGORY_LABELS,
  toolsByCategory,
  comingSoonTools,
  type ToolCategory,
} from "@/lib/tools";

const CATEGORY_ORDER: ToolCategory[] = ["pdf", "image", "convert"];

export default function HomePage() {
  return (
    <div className="container-page py-10 lg:py-14">
      {/* Hero */}
      <section className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Free, private file tools
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Convert, compress, and combine PDFs and images — right in your browser.
          Nothing is uploaded. Your files never leave your device.
        </p>
        <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-800">
          🔒 100% in-browser · No sign-up · No file storage
        </p>
      </section>

      <div className="my-10">
        <AdSlot placement="tool-top" />
      </div>

      {/* Tool categories */}
      <div className="space-y-12">
        {CATEGORY_ORDER.map((category) => {
          const tools = toolsByCategory(category);
          if (tools.length === 0) return null;
          return (
            <section key={category} id={category} className="scroll-mt-20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {CATEGORY_LABELS[category]}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {tools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Coming soon (only shown if any tools are still in this state) */}
        {comingSoonTools().length > 0 && (
          <section id="coming-soon" className="scroll-mt-20">
            <h2 className="mb-1 text-2xl font-bold text-slate-900">Coming soon</h2>
            <p className="mb-4 text-sm text-slate-500">
              In development. We won&apos;t fake results — these will ship when they
              genuinely work.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {comingSoonTools().map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </section>
        )}
      </div>

      <p className="mt-12 text-center text-sm text-slate-400">
        {TOOLS.length} tools and counting.
      </p>
    </div>
  );
}
