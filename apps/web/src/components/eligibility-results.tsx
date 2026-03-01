"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Info, RotateCcw } from "lucide-react";

interface MatchResult {
  product: {
    nameEn: string;
    islamicCompliant?: boolean;
    rateValue?: number | string;
    profitRate?: number | string;
    annualFee?: number | string;
    monthlyPrice?: number | string;
    category?: string;
  };
  provider: {
    nameEn: string;
    logoUrl?: string;
  };
  status: "pre_approved" | "likely_eligible" | "not_eligible" | "apply";
  unmetCriteria: string[];
}

const statusConfig = {
  pre_approved: {
    label: "Pre-Approved",
    bgColor: "bg-green-light",
    textColor: "text-green",
    icon: CheckCircle,
    buttonBg: "bg-green hover:bg-emerald-700",
    buttonText: "Apply Now",
  },
  likely_eligible: {
    label: "Likely Eligible",
    bgColor: "bg-navy-light",
    textColor: "text-navy",
    icon: Info,
    buttonBg: "bg-navy hover:bg-navy-dark",
    buttonText: "Apply",
  },
  not_eligible: {
    label: "Not Eligible",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    icon: XCircle,
    buttonBg: "bg-slate-200 cursor-not-allowed",
    buttonText: "Not Eligible",
  },
  apply: {
    label: "Apply",
    bgColor: "bg-slate-50",
    textColor: "text-slate-600",
    icon: ArrowRight,
    buttonBg: "bg-navy hover:bg-navy-dark",
    buttonText: "Apply",
  },
};

function fmtRate(val: number | string): string {
  const n = typeof val === "string" ? parseFloat(val) : val;
  if (isNaN(n)) return String(val);
  if (Number.isInteger(n)) return String(n);
  return n.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

function getHighlight(product: MatchResult["product"]): string | null {
  const rate = product.rateValue || product.profitRate;
  if (rate) return `${fmtRate(rate)}% APR`;
  if (product.annualFee !== undefined && product.annualFee !== null) {
    const fee = typeof product.annualFee === "string" ? parseFloat(product.annualFee) : product.annualFee;
    return fee === 0 ? "No Annual Fee" : `AED ${fee.toLocaleString()}/yr`;
  }
  if (product.monthlyPrice) return `AED ${product.monthlyPrice}/mo`;
  return null;
}

export function EligibilityResults() {
  const router = useRouter();
  const [results, setResults] = useState<MatchResult[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const stored = sessionStorage.getItem("eligibility_results");
    if (!stored) {
      router.push("/eligibility");
      return;
    }
    const parsed = JSON.parse(stored);
    setResults(parsed.data || []);
  }, [router]);

  const filtered =
    filter === "all" ? results : results.filter((r) => r.status === filter);

  const counts = {
    all: results.length,
    pre_approved: results.filter((r) => r.status === "pre_approved").length,
    likely_eligible: results.filter((r) => r.status === "likely_eligible").length,
    not_eligible: results.filter((r) => r.status === "not_eligible").length,
  };

  return (
    <div>
      {/* Summary bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-wrap gap-2">
          {[
            { key: "all", label: `All (${counts.all})` },
            { key: "pre_approved", label: `Pre-Approved (${counts.pre_approved})` },
            { key: "likely_eligible", label: `Likely Eligible (${counts.likely_eligible})` },
            { key: "not_eligible", label: `Not Eligible (${counts.not_eligible})` },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                filter === tab.key
                  ? "bg-navy text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-navy"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <Link
          href="/eligibility"
          className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-navy transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Redo
        </Link>
      </div>

      {/* Results grid */}
      <div className="space-y-3">
        {filtered.map((result, i) => {
          const config = statusConfig[result.status];
          const product = result.product;
          const StatusIcon = config.icon;
          const highlight = getHighlight(product);

          return (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-5 transition-all hover:shadow-sm"
            >
              {/* Top row: provider + status + action */}
              <div className="flex items-start justify-between gap-4">
                {/* Left: provider info */}
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  {/* Provider logo */}
                  {result.provider?.logoUrl ? (
                    <img
                      src={result.provider.logoUrl}
                      alt=""
                      className="w-10 h-10 rounded-lg object-contain bg-white border border-slate-100 p-1 shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center text-sm font-bold shrink-0">
                      {(result.provider?.nameEn || "?").charAt(0)}
                    </div>
                  )}

                  {/* Product details */}
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wide">
                      {result.provider?.nameEn || "Provider"}
                    </p>
                    <h3 className="text-sm font-semibold text-slate-900 mt-0.5 leading-snug">
                      {product.nameEn}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      {product.islamicCompliant && (
                        <span className="text-[10px] font-medium text-navy bg-navy-light px-2 py-0.5 rounded-full">
                          Islamic
                        </span>
                      )}
                      {highlight && (
                        <span className="text-sm font-bold text-slate-900">
                          {highlight}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: status + button */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold ${config.bgColor} ${config.textColor}`}
                  >
                    <StatusIcon className="w-3 h-3" />
                    {config.label}
                  </span>
                  <Link
                    href="/signup"
                    className={`text-xs font-semibold text-white rounded-lg px-4 py-2 transition-all duration-200 ${
                      result.status === "not_eligible"
                        ? "bg-slate-200 text-slate-400 pointer-events-none"
                        : config.buttonBg
                    }`}
                  >
                    {config.buttonText}
                  </Link>
                </div>
              </div>

              {/* Unmet criteria */}
              {result.unmetCriteria.length > 0 && (
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {result.unmetCriteria.map((c, j) => (
                      <li key={j} className="text-xs text-red-500 flex items-center gap-1">
                        <XCircle className="w-3 h-3 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-slate-400">No products match this filter.</p>
          <Link
            href="/eligibility"
            className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-navy hover:underline"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Try different answers
          </Link>
        </div>
      )}
    </div>
  );
}
