"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, XCircle, ArrowRight, Info } from "lucide-react";

interface MatchResult {
  product: {
    nameEn: string;
    islamicCompliant?: boolean;
    rateValue?: number;
    annualFee?: number;
  };
  provider: {
    nameEn: string;
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
    not_eligible: results.filter((r) => r.status === "not_eligible").length,
  };

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-2 mb-8">
        {[
          { key: "all", label: `All (${counts.all})` },
          { key: "pre_approved", label: `Pre-Approved (${counts.pre_approved})` },
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

      {/* Results */}
      <div className="space-y-4">
        {filtered.map((result, i) => {
          const config = statusConfig[result.status];
          const product = result.product;
          const StatusIcon = config.icon;
          return (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center gap-4"
            >
              {/* Provider + Product */}
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                  {result.provider?.nameEn || "Provider"}
                </p>
                <h3 className="text-base font-semibold text-slate-900 mt-0.5">
                  {product.nameEn}
                </h3>
                {product.islamicCompliant && (
                  <span className="inline-block mt-1 text-xs font-medium text-navy bg-navy-light px-2 py-0.5 rounded-full">
                    Islamic
                  </span>
                )}
              </div>

              {/* Rate */}
              <div className="md:text-center md:px-6">
                {product.rateValue && (
                  <p className="text-xl font-bold text-slate-900">
                    {product.rateValue}% APR
                  </p>
                )}
                {product.annualFee !== undefined &&
                  product.annualFee !== null &&
                  !product.rateValue && (
                    <p className="text-xl font-bold text-slate-900">
                      AED {product.annualFee}/yr
                    </p>
                  )}
              </div>

              {/* Status badge + button */}
              <div className="flex items-center gap-3 shrink-0">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${config.bgColor} ${config.textColor}`}
                >
                  <StatusIcon className="w-3.5 h-3.5" />
                  {config.label}
                </span>
                <button
                  className={`text-sm font-medium text-white rounded-xl px-5 py-2.5 transition-all duration-200 ${config.buttonBg}`}
                  disabled={result.status === "not_eligible"}
                >
                  {config.buttonText}
                </button>
              </div>

              {/* Unmet criteria */}
              {result.unmetCriteria.length > 0 && (
                <div className="w-full">
                  <ul className="text-xs text-red-500 mt-1 space-y-0.5">
                    {result.unmetCriteria.map((c, j) => (
                      <li key={j}>&#8226; {c}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400">No products match this filter.</p>
        </div>
      )}
    </div>
  );
}
