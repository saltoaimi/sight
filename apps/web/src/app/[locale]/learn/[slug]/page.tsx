import { articles, getArticleBySlug, ARTICLE_CATEGORIES } from "@/lib/articles";
import Link from "next/link";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Not Found — Sight" };
  return {
    title: `${article.title} — Sight Learn`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const cat = ARTICLE_CATEGORIES[article.category];
  const content = locale === "ar" ? article.contentAr : article.content;

  // Simple markdown-to-html (handles ##, ###, **, |tables|, -, numbered lists)
  const html = content
    .split("\n")
    .map((line) => {
      if (line.startsWith("### ")) return `<h3 class="text-base font-bold text-slate-900 mt-6 mb-2">${line.slice(4)}</h3>`;
      if (line.startsWith("## ")) return `<h2 class="text-lg font-bold text-slate-900 mt-8 mb-3">${line.slice(3)}</h2>`;
      if (line.startsWith("- **")) {
        const formatted = line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return `<li class="text-sm text-slate-700 leading-relaxed ml-4">${formatted}</li>`;
      }
      if (line.startsWith("- ")) return `<li class="text-sm text-slate-700 leading-relaxed ml-4">• ${line.slice(2)}</li>`;
      if (line.startsWith("| ") && line.includes("|")) {
        const cells = line.split("|").filter(Boolean).map((c) => c.trim());
        if (cells.every((c) => c.match(/^-+$/))) return "";
        const tag = line.includes("---") ? "th" : "td";
        const cellClass = tag === "th" ? "text-[11px] font-semibold text-slate-500 uppercase" : "text-xs text-slate-700";
        return `<tr>${cells.map((c) => `<${tag} class="px-3 py-1.5 border-b border-slate-100 ${cellClass}">${c.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</${tag}>`).join("")}</tr>`;
      }
      if (line.trim() === "") return "<br/>";
      const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return `<p class="text-sm text-slate-700 leading-relaxed">${formatted}</p>`;
    })
    .join("\n");

  // Related articles
  const related = articles.filter((a) => a.category === article.category && a.slug !== article.slug).slice(0, 3);

  return (
    <div className="max-w-[800px] mx-auto px-5 md:px-10 py-8">
      {/* Back link */}
      <Link href="/learn" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-navy transition-colors mb-6">
        <ArrowLeft className="w-3.5 h-3.5" />
        All articles
      </Link>

      {/* Header */}
      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${cat.color}`}>
        {cat.label}
      </span>
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-3">
        {locale === "ar" ? article.titleAr : article.title}
      </h1>
      <div className="flex items-center gap-4 mt-3 text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {article.readTime} min read
        </span>
        <span className="flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5" />
          Guide
        </span>
      </div>

      {/* Content */}
      <div
        className="mt-8 prose-custom"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-sm font-bold text-slate-900 mb-4">Related articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/learn/${r.slug}`}
                className="bg-white border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-all duration-200"
              >
                <p className="text-xs font-bold text-slate-900">{r.title}</p>
                <p className="text-[11px] text-slate-400 mt-1">{r.readTime} min read</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
