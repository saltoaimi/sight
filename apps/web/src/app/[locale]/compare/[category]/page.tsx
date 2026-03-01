import { fetchAPI, type ProductListResponse } from "@/lib/api";
import { ProductFilters } from "@/components/product-filters";
import { PRODUCT_CATEGORIES } from "@sight/shared";
import { getTranslations } from "next-intl/server";

export async function generateStaticParams() {
  return Object.values(PRODUCT_CATEGORIES).map((category) => ({ category }));
}

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

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  const t = await getTranslations({ locale });

  let products: any[] = [];
  let error = false;

  try {
    const response = await fetchAPI<ProductListResponse>(
      `/api/v1/products?category=${category}&limit=100`
    );
    products = response.data;
  } catch {
    error = true;
  }

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

      {error ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
          <p className="text-slate-600 font-medium">
            Could not load products. Make sure the API server is running on port 3001.
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Run: <code className="bg-slate-100 px-2 py-1 rounded">pnpm --filter @sight/api dev</code>
          </p>
        </div>
      ) : products.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
          <p className="text-slate-400">{t("common.noResults")}</p>
        </div>
      ) : (
        <ProductFilters products={products} locale={locale} category={category} />
      )}
    </div>
  );
}
