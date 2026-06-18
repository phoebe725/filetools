import { ToolCard } from "@/components/ToolCard";
import { AdSlot } from "@/components/AdSlot";
import {
  TOOLS,
  toolsByCategory,
  comingSoonTools,
  type ToolCategory,
} from "@/lib/tools";
import { isLocale, defaultLocale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { getToolContent } from "@/lib/i18n/tool-content";

const CATEGORY_ORDER: ToolCategory[] = ["pdf", "convert", "image"];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const t = getMessages(locale);

  return (
    <div className="container-page py-10 lg:py-14">
      <section className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {t.home.title}
        </h1>
        <p className="mt-4 text-lg text-slate-600">{t.home.subtitle}</p>
        <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-800">
          {t.home.badge}
        </p>
      </section>

      <div className="my-10">
        <AdSlot placement="tool-top" />
      </div>

      <div className="space-y-12">
        {CATEGORY_ORDER.map((category) => {
          const tools = toolsByCategory(category);
          if (tools.length === 0) return null;
          return (
            <section key={category} id={category} className="scroll-mt-20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {t.categories[category]}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {tools.map((tool) => {
                  const c = getToolContent(tool.slug, locale)!;
                  return (
                    <ToolCard
                      key={tool.slug}
                      href={`/${locale}/tools/${tool.slug}`}
                      icon={tool.icon}
                      status={tool.status}
                      name={c.name}
                      tagline={c.tagline}
                    />
                  );
                })}
              </div>
            </section>
          );
        })}

        {comingSoonTools().length > 0 && (
          <section id="coming-soon" className="scroll-mt-20">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {comingSoonTools().map((tool) => {
                const c = getToolContent(tool.slug, locale)!;
                return (
                  <ToolCard
                    key={tool.slug}
                    href={`/${locale}/tools/${tool.slug}`}
                    icon={tool.icon}
                    status={tool.status}
                    name={c.name}
                    tagline={c.tagline}
                  />
                );
              })}
            </div>
          </section>
        )}
      </div>

      <p className="mt-12 text-center text-sm text-slate-400">
        {t.home.toolsCount.replace("{count}", String(TOOLS.length))}
      </p>
    </div>
  );
}
