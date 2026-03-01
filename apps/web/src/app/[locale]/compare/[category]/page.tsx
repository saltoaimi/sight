import { getStaticProducts } from "@/lib/static-products";
import { ProductFilters } from "@/components/product-filters";
import { getTranslations } from "next-intl/server";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  const t = await getTranslations({ locale, namespace: "categories" });
  const categoryName = t(category as any);

  return {
    title: `Compare ${categoryName} in UAE — Sight`,
    description: `Compare the best ${categoryName.toLowerCase()} from UAE banks and providers. Find the lowest rates and best deals.`,
  };
}

async function loadProducts(category: string): Promise<any[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (apiUrl && !apiUrl.includes("localhost")) {
    try {
      const res = await fetch(`${apiUrl}/api/v1/products?category=${category}&limit=100`, {
        headers: { "Content-Type": "application/json" },
        next: { revalidate: 300 },
      });
      if (res.ok) {
        const data = await res.json();
        if (data.data && data.data.length > 0) return data.data;
      }
    } catch {
      // fall through to static
    }
  }
  return getStaticProducts(category);
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  const t = await getTranslations({ locale });
  const products = await loadProducts(category);
  const categoryName = t(`categories.${category}` as any);

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-6">
        <a href="/" className="hover:text-navy transition-colors">Home</a>
        <span className="mx-2">/</span>
        <span className="text-slate-900 font-medium">{categoryName}</span>
      </nav>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          {t("common.compare")} {categoryName}
        </h1>
        <p className="text-slate-500 mt-1 text-sm">
          Find the best {categoryName.toLowerCase()} in the UAE
        </p>
      </div>

      {products.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
          <p className="text-slate-400">{t("common.noResults")}</p>
        </div>
      ) : (
        <ProductFilters products={products} locale={locale} category={category} />
      )}
    </div>
  );
}
