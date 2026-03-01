"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

function fmtPct(val: string | number): string {
  const n = parseFloat(String(val));
  if (Number.isInteger(n)) return String(n);
  return n.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

function formatRate(product: any): { label: string; value: string } | null {
  if (product.rateValue) return { label: "APR", value: `${fmtPct(product.rateValue)}%` };
  if (product.profitRate) return { label: "Profit Rate", value: `${fmtPct(product.profitRate)}%` };
  if (product.annualFee !== undefined && product.annualFee !== null) {
    const fee = parseFloat(product.annualFee);
    return fee === 0
      ? { label: "Annual Fee", value: "Free" }
      : { label: "Annual Fee", value: `AED ${Math.round(fee)}` };
  }
  if (product.priceMonthly) return { label: "Monthly", value: `AED ${Math.round(parseFloat(product.priceMonthly))}` };
  if (product.premiumMin) return { label: "From", value: `AED ${Math.round(parseFloat(product.premiumMin))}` };
  return null;
}

function getHighlights(product: any): string[] {
  const h: string[] = [];
  // Pull top features
  if (product.features && Array.isArray(product.features)) {
    product.features.slice(0, 3).forEach((f: any) => {
      const text = typeof f === "string" ? f : f.en || f.value || f.nameEn || "";
      if (text) h.push(text);
    });
  }
  return h;
}

function getQuickStats(product: any): { label: string; value: string }[] {
  const stats: { label: string; value: string }[] = [];
  if (product.cashbackRate) stats.push({ label: "Cashback", value: `Up to ${fmtPct(product.cashbackRate)}%` });
  if (product.minAmount && product.maxAmount) {
    stats.push({ label: "Amount", value: `AED ${Number(product.minAmount).toLocaleString()} – ${Number(product.maxAmount).toLocaleString()}` });
  }
  if (product.minTenureMonths && product.maxTenureMonths) {
    stats.push({ label: "Tenure", value: `${product.minTenureMonths} – ${product.maxTenureMonths} mo` });
  }
  if (product.dataGb) stats.push({ label: "Data", value: product.dataGb === "unlimited" ? "Unlimited" : `${product.dataGb} GB` });
  if (product.coverageAmount) stats.push({ label: "Coverage", value: `AED ${Number(product.coverageAmount).toLocaleString()}` });
  if (product.minSalary) stats.push({ label: "Min Salary", value: `AED ${Number(product.minSalary).toLocaleString()}` });
  if (product.processingFeePercent) stats.push({ label: "Processing", value: `${fmtPct(product.processingFeePercent)}%` });
  return stats.slice(0, 3);
}

function getDetails(product: any): { label: string; value: string }[] {
  const details: { label: string; value: string }[] = [];
  if (product.rateType) details.push({ label: "Rate Type", value: product.rateType.charAt(0).toUpperCase() + product.rateType.slice(1) });
  if (product.rateValue) details.push({ label: "Interest Rate", value: `${fmtPct(product.rateValue)}% p.a.` });
  if (product.profitRate) details.push({ label: "Profit Rate", value: `${fmtPct(product.profitRate)}% p.a.` });
  if (product.minAmount) details.push({ label: "Min Amount", value: `AED ${Number(product.minAmount).toLocaleString()}` });
  if (product.maxAmount) details.push({ label: "Max Amount", value: `AED ${Number(product.maxAmount).toLocaleString()}` });
  if (product.minTenureMonths) details.push({ label: "Min Tenure", value: `${product.minTenureMonths} months` });
  if (product.maxTenureMonths) details.push({ label: "Max Tenure", value: `${product.maxTenureMonths} months` });
  if (product.processingFeePercent) details.push({ label: "Processing Fee", value: `${fmtPct(product.processingFeePercent)}%` });
  if (product.earlySettlementFeePercent) details.push({ label: "Early Settlement", value: `${fmtPct(product.earlySettlementFeePercent)}%` });
  if (product.annualFee !== undefined && product.annualFee !== null) details.push({ label: "Annual Fee", value: parseFloat(product.annualFee) === 0 ? "Free" : `AED ${Math.round(parseFloat(product.annualFee))}` });
  if (product.annualFeeWaiver) details.push({ label: "Fee Waiver", value: product.annualFeeWaiver });
  if (product.cashbackRate) details.push({ label: "Cashback Rate", value: `${fmtPct(product.cashbackRate)}%` });
  if (product.rewardType && product.rewardType !== "none") details.push({ label: "Reward Type", value: product.rewardType.charAt(0).toUpperCase() + product.rewardType.slice(1) });
  if (product.rewardRate) details.push({ label: "Reward Rate", value: `${product.rewardRate}x` });
  if (product.interestFreeGraceDays) details.push({ label: "Grace Period", value: `${product.interestFreeGraceDays} days` });
  if (product.supplementaryCardFee !== undefined && product.supplementaryCardFee !== null) details.push({ label: "Supplementary Card", value: parseFloat(product.supplementaryCardFee) === 0 ? "Free" : `AED ${product.supplementaryCardFee}` });
  if (product.premiumMin) details.push({ label: "Min Premium", value: `AED ${Number(product.premiumMin).toLocaleString()}` });
  if (product.premiumMax) details.push({ label: "Max Premium", value: `AED ${Number(product.premiumMax).toLocaleString()}` });
  if (product.coverageAmount) details.push({ label: "Coverage", value: `AED ${Number(product.coverageAmount).toLocaleString()}` });
  if (product.deductible) details.push({ label: "Deductible", value: `AED ${Number(product.deductible).toLocaleString()}` });
  if (product.networkType) details.push({ label: "Network", value: product.networkType.charAt(0).toUpperCase() + product.networkType.slice(1) });
  if (product.coPayPercent) details.push({ label: "Co-Pay", value: `${fmtPct(product.coPayPercent)}%` });
  if (product.dataGb) details.push({ label: "Data", value: product.dataGb === "unlimited" ? "Unlimited" : `${product.dataGb} GB` });
  if (product.minutes) details.push({ label: "Minutes", value: product.minutes === "unlimited" ? "Unlimited" : product.minutes });
  if (product.sms) details.push({ label: "SMS", value: product.sms === "unlimited" ? "Unlimited" : product.sms });
  if (product.priceMonthly) details.push({ label: "Monthly Price", value: `AED ${product.priceMonthly}` });
  if (product.contractMonths) details.push({ label: "Contract", value: `${product.contractMonths} months` });
  if (product.speed) details.push({ label: "Speed", value: product.speed });
  return details;
}

function getAllFeatures(product: any): string[] {
  if (!product.features || !Array.isArray(product.features)) return [];
  return product.features
    .map((f: any) => (typeof f === "string" ? f : f.en || f.value || f.nameEn || ""))
    .filter(Boolean);
}

function getFees(product: any): { name: string; value: string }[] {
  if (!product.fees || !Array.isArray(product.fees)) return [];
  return product.fees.map((f: any) => ({
    name: f.nameEn || f.name || "Fee",
    value: f.type === "percentage" ? `${f.amount}%` : `AED ${f.amount}`,
  }));
}

const INSURANCE_CATEGORIES = ["car_insurance", "health_insurance", "travel_insurance", "life_insurance", "home_insurance"];
const PRODUCT_IMAGE_CATEGORIES = ["credit_card", "mobile_plan"];
const SHORY_URL = "https://shory.com";

export function ProductCard({ product, locale }: { product: any; locale: string }) {
  const [expanded, setExpanded] = useState(false);
  const rate = formatRate(product);
  const quickStats = getQuickStats(product);
  const highlights = getHighlights(product);
  const isInsurance = INSURANCE_CATEGORIES.includes(product.category);
  const hasProductImage = product.imageUrl && PRODUCT_IMAGE_CATEGORIES.includes(product.category);
  const applyUrl = isInsurance ? SHORY_URL : product.provider?.website || "#";
  const logoUrl = product.provider?.logoUrl;
  const details = getDetails(product);
  const allFeatures = getAllFeatures(product);
  const fees = getFees(product);
  const description = locale === "ar" ? product.descriptionAr || product.descriptionEn : product.descriptionEn;
  const productName = locale === "ar" ? product.nameAr || product.nameEn : product.nameEn;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-sm transition-all duration-200">
      <div className="flex flex-col md:flex-row">
        {/* Left: Image / Logo column */}
        <div className="md:w-52 shrink-0 flex items-center justify-center p-6 md:border-r border-slate-100 bg-slate-50/50">
          {hasProductImage ? (
            <img
              src={product.imageUrl}
              alt={productName}
              className="w-full max-w-[160px] h-auto object-contain rounded-lg"
            />
          ) : logoUrl ? (
            <img
              src={logoUrl}
              alt={product.provider?.nameEn || ""}
              className="w-20 h-auto object-contain"
            />
          ) : (
            <div className="w-16 h-16 bg-slate-200 rounded-xl flex items-center justify-center">
              <span className="text-lg font-bold text-slate-400">
                {(product.provider?.nameEn || "?").charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Right: Content */}
        <div className="flex-1 p-6">
          {/* Top row: Name + Rate */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
            <div className="flex-1">
              {/* Provider line */}
              <div className="flex items-center gap-2 mb-1">
                <p className="text-xs text-slate-400 font-medium">
                  {product.provider?.nameEn || "Provider"}
                </p>
                {isInsurance && (
                  <span className="inline-flex items-center gap-1 text-[10px] text-slate-400">
                    via
                    <img src="/shory-logo-dark.svg" alt="Shory" className="h-3 inline-block opacity-60" />
                  </span>
                )}
                {product.islamicCompliant && (
                  <span className="text-[10px] font-medium text-navy bg-navy-light px-1.5 py-0.5 rounded-full">
                    Islamic
                  </span>
                )}
              </div>

              {/* Product name — full, no truncation */}
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {productName}
              </h3>

              {/* Description excerpt */}
              {description && (
                <p className="text-sm text-slate-500 mt-1 line-clamp-2">{description}</p>
              )}
            </div>

            {/* Rate badge */}
            {rate && (
              <div className="shrink-0 text-right md:pl-6">
                <p className="text-2xl font-bold text-slate-900">{rate.value}</p>
                <p className="text-xs text-slate-400">{rate.label}</p>
              </div>
            )}
          </div>

          {/* Key features — shown upfront like NerdWallet */}
          {highlights.length > 0 && (
            <div className="mt-4 flex flex-col gap-1.5">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm text-slate-700">{h}</span>
                </div>
              ))}
            </div>
          )}

          {/* Quick stats row */}
          {quickStats.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {quickStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wide">{stat.label}</p>
                  <p className="text-sm font-semibold text-slate-800">{stat.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Action row */}
          <div className="mt-5 flex items-center gap-3">
            <a
              href={applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white bg-green rounded-lg px-6 py-2.5 hover:bg-emerald-700 transition-all duration-200 inline-block"
            >
              {isInsurance ? "Get Quote" : "Apply Now"}
            </a>
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors flex items-center gap-1"
            >
              {expanded ? "Hide" : "More"} details
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Expandable details panel */}
      {expanded && (
        <div className="border-t border-slate-100 bg-slate-50/30 px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Details */}
            {details.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Product Details</p>
                <div className="space-y-2.5">
                  {details.map((d, i) => (
                    <div key={i} className="flex justify-between text-sm gap-2">
                      <span className="text-slate-500">{d.label}</span>
                      <span className="font-medium text-slate-900 text-right">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Features */}
            {allFeatures.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Features</p>
                <ul className="space-y-2">
                  {allFeatures.map((f, i) => (
                    <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                      <Check className="w-4 h-4 text-green shrink-0 mt-0.5" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Fees */}
            {fees.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Fees & Charges</p>
                <div className="space-y-2.5">
                  {fees.map((f, i) => (
                    <div key={i} className="flex justify-between text-sm gap-2">
                      <span className="text-slate-500">{f.name}</span>
                      <span className="font-medium text-slate-900">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Eligibility criteria */}
          {product.eligibilityCriteria && Object.keys(product.eligibilityCriteria).length > 0 && (
            <div className="mt-6 pt-5 border-t border-slate-200">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Eligibility</p>
              <div className="flex flex-wrap gap-2">
                {product.eligibilityCriteria.minSalary && (
                  <span className="text-xs bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600">
                    Min salary: AED {Number(product.eligibilityCriteria.minSalary).toLocaleString()}
                  </span>
                )}
                {product.eligibilityCriteria.nationalities?.length > 0 && (
                  <span className="text-xs bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600">
                    {product.eligibilityCriteria.nationalities.join(", ")}
                  </span>
                )}
                {product.eligibilityCriteria.employmentTypes?.length > 0 && (
                  <span className="text-xs bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600">
                    {product.eligibilityCriteria.employmentTypes.join(", ")}
                  </span>
                )}
                {product.eligibilityCriteria.minEmploymentMonths && (
                  <span className="text-xs bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600">
                    Min {product.eligibilityCriteria.minEmploymentMonths} months employed
                  </span>
                )}
                {product.eligibilityCriteria.minAge && (
                  <span className="text-xs bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600">
                    Age {product.eligibilityCriteria.minAge}+
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
