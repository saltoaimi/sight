"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal, ArrowUpDown, X } from "lucide-react";
import { ProductCard } from "./product-card";

type SortOption = "default" | "rate_low" | "rate_high" | "fee_low" | "fee_high" | "salary_low" | "name_az";

const SORT_LABELS: Record<SortOption, string> = {
  default: "Recommended",
  rate_low: "Rate: Low to High",
  rate_high: "Rate: High to Low",
  fee_low: "Fee: Low to High",
  fee_high: "Fee: High to Low",
  salary_low: "Min Salary: Low to High",
  name_az: "Name: A to Z",
};

function getProviders(products: any[]): string[] {
  const set = new Set<string>();
  products.forEach((p) => {
    if (p.provider?.nameEn) set.add(p.provider.nameEn);
  });
  return Array.from(set).sort();
}

function getSortValue(product: any, sort: SortOption): number {
  switch (sort) {
    case "rate_low":
    case "rate_high": {
      const rate = parseFloat(product.rateValue || product.profitRate || "0");
      return rate || 999;
    }
    case "fee_low":
    case "fee_high": {
      const fee = parseFloat(product.annualFee || product.priceMonthly || product.premiumMin || "0");
      return fee || 999;
    }
    case "salary_low": {
      const salary = parseFloat(product.minSalary || product.eligibilityCriteria?.minSalary || "0");
      return salary || 999999;
    }
    case "name_az":
      return 0;
    default:
      return 0;
  }
}

export function ProductFilters({
  products,
  locale,
  category,
}: {
  products: any[];
  locale: string;
  category: string;
}) {
  const [sort, setSort] = useState<SortOption>("default");
  const [selectedProviders, setSelectedProviders] = useState<Set<string>>(new Set());
  const [islamicOnly, setIslamicOnly] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const providers = useMemo(() => getProviders(products), [products]);
  const hasIslamic = useMemo(() => products.some((p) => p.islamicCompliant), [products]);

  const filtered = useMemo(() => {
    let result = [...products];

    // Provider filter
    if (selectedProviders.size > 0) {
      result = result.filter((p) => selectedProviders.has(p.provider?.nameEn || ""));
    }

    // Islamic filter
    if (islamicOnly) {
      result = result.filter((p) => p.islamicCompliant);
    }

    // Sort
    if (sort === "name_az") {
      result.sort((a, b) => (a.nameEn || "").localeCompare(b.nameEn || ""));
    } else if (sort !== "default") {
      const desc = sort === "rate_high" || sort === "fee_high";
      result.sort((a, b) => {
        const va = getSortValue(a, sort);
        const vb = getSortValue(b, sort);
        return desc ? vb - va : va - vb;
      });
    }

    return result;
  }, [products, sort, selectedProviders, islamicOnly]);

  const activeFilterCount =
    (selectedProviders.size > 0 ? 1 : 0) + (islamicOnly ? 1 : 0);

  const clearFilters = () => {
    setSelectedProviders(new Set());
    setIslamicOnly(false);
    setSort("default");
  };

  const toggleProvider = (name: string) => {
    setSelectedProviders((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className={`flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border transition-all duration-200 ${
              filtersOpen || activeFilterCount > 0
                ? "border-navy bg-navy text-white"
                : "border-slate-200 text-slate-600 hover:border-slate-300"
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-white text-navy text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-3 h-3" />
              Clear all
            </button>
          )}
        </div>

        {/* Sort dropdown */}
        <div className="flex items-center gap-1.5">
          <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="text-xs font-medium text-slate-600 bg-transparent border-none outline-none cursor-pointer pr-4"
          >
            {Object.entries(SORT_LABELS).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Filter panel */}
      {filtersOpen && (
        <div className="bg-white border border-slate-200 rounded-xl p-4 mb-5">
          <div className="flex flex-wrap gap-6">
            {/* Provider filter */}
            {providers.length > 1 && (
              <div>
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Provider
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {providers.map((name) => (
                    <button
                      key={name}
                      onClick={() => toggleProvider(name)}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-full border transition-all duration-200 ${
                        selectedProviders.has(name)
                          ? "border-navy bg-navy text-white"
                          : "border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Islamic filter */}
            {hasIslamic && (
              <div>
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Type
                </p>
                <button
                  onClick={() => setIslamicOnly(!islamicOnly)}
                  className={`text-[11px] font-medium px-2.5 py-1 rounded-full border transition-all duration-200 ${
                    islamicOnly
                      ? "border-navy bg-navy text-white"
                      : "border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  Islamic / Shariah-compliant
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Results count */}
      <p className="text-xs text-slate-400 mb-4">
        {filtered.length} {filtered.length === 1 ? "product" : "products"}
        {activeFilterCount > 0 && ` (filtered from ${products.length})`}
      </p>

      {/* Product list */}
      {filtered.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
          <p className="text-slate-400 text-sm">No products match your filters.</p>
          <button
            onClick={clearFilters}
            className="text-xs text-navy font-medium mt-2 hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((product: any) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}
