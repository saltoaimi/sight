import Link from "next/link";
import { articles, ARTICLE_CATEGORIES } from "@/lib/articles";
import { BookOpen, Clock } from "lucide-react";

export const metadata = {
  title: "Learn — Sight",
  description: "Financial literacy guides, UAE banking explainers, and money tips.",
};

export default function LearnPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Learn</h1>
        <p className="text-slate-500 mt-1 text-sm">
          Financial literacy guides, UAE banking explainers, and money tips.
        </p>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(ARTICLE_CATEGORIES).map(([key, cat]) => (
          <span key={key} className={`text-xs font-medium px-3 py-1 rounded-full ${cat.color}`}>
            {cat.label}
          </span>
        ))}
      </div>

      {/* Articles grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => {
          const cat = ARTICLE_CATEGORIES[article.category];
          return (
            <Link
              key={article.slug}
              href={`/learn/${article.slug}`}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 group"
            >
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${cat.color}`}>
                {cat.label}
              </span>
              <h2 className="text-sm font-bold text-slate-900 mt-3 group-hover:text-navy transition-colors">
                {article.title}
              </h2>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-3 mt-3 text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime} min read
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  Guide
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
