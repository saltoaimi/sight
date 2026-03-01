"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles, ChevronRight, CheckCircle, XCircle, Info,
  Loader2, ArrowRight, RotateCcw,
} from "lucide-react";
import { checkEligibility } from "@/lib/eligibility-engine";

interface MatchResult {
  product: {
    nameEn: string;
    category: string;
    islamicCompliant?: boolean;
    rateValue?: number;
    profitRate?: number;
    annualFee?: number;
    imageUrl?: string;
  };
  provider: {
    nameEn: string;
    logoUrl?: string;
  };
  status: "pre_approved" | "likely_eligible" | "not_eligible" | "apply";
  unmetCriteria: string[];
}

const STEPS = [
  {
    id: "category",
    question: "What are you looking for?",
    type: "choice" as const,
    field: "category",
    options: [
      { value: "personal_loan", label: "Personal Loan", emoji: "💰" },
      { value: "credit_card", label: "Credit Card", emoji: "💳" },
      { value: "mortgage", label: "Mortgage", emoji: "🏠" },
      { value: "auto_loan", label: "Auto Loan", emoji: "🚗" },
      { value: "savings_account", label: "Savings Account", emoji: "🐖" },
      { value: "car_insurance", label: "Car Insurance", emoji: "🛡️" },
    ],
  },
  {
    id: "salary",
    question: "Monthly salary (AED)",
    type: "number" as const,
    field: "salary",
    placeholder: "e.g. 15000",
  },
  {
    id: "nationality",
    question: "Residency status",
    type: "choice" as const,
    field: "nationality",
    options: [
      { value: "uae", label: "UAE National", emoji: "🇦🇪" },
      { value: "gcc", label: "GCC National", emoji: "🌍" },
      { value: "expat", label: "Expat / Resident", emoji: "🏢" },
    ],
  },
  {
    id: "employment",
    question: "Employment type",
    type: "choice" as const,
    field: "employmentType",
    options: [
      { value: "salaried", label: "Salaried" },
      { value: "self_employed", label: "Self-Employed" },
      { value: "business_owner", label: "Business Owner" },
    ],
  },
];

const statusConfig = {
  pre_approved: { label: "Pre-Approved", color: "text-green bg-green-light", icon: CheckCircle },
  likely_eligible: { label: "Likely Eligible", color: "text-navy bg-navy-light", icon: Info },
  not_eligible: { label: "Not Eligible", color: "text-red-600 bg-red-50", icon: XCircle },
  apply: { label: "Apply", color: "text-slate-600 bg-slate-100", icon: ArrowRight },
};

function fmtRate(val: number | string): string {
  const n = typeof val === "string" ? parseFloat(val) : val;
  if (isNaN(n)) return String(val);
  if (Number.isInteger(n)) return String(n);
  return n.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

export function EligibilityWidget() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<MatchResult[] | null>(null);

  const step = STEPS[currentStep];
  const progress = results ? 100 : ((currentStep) / STEPS.length) * 100;

  function selectOption(value: string) {
    const newAnswers = { ...answers, [step.field]: value };
    setAnswers(newAnswers);
    advance(newAnswers);
  }

  function submitNumber() {
    if (!inputValue) return;
    const newAnswers = { ...answers, [step.field]: Number(inputValue) };
    setAnswers(newAnswers);
    setInputValue("");
    advance(newAnswers);
  }

  function advance(newAnswers: Record<string, string | number>) {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      runCheck(newAnswers);
    }
  }

  function runCheck(finalAnswers: Record<string, string | number>) {
    setLoading(true);
    try {
      const data = checkEligibility({
        type: "personal",
        category: finalAnswers.category as string,
        salary: finalAnswers.salary as number | undefined,
        nationality: finalAnswers.nationality as string | undefined,
        employmentType: finalAnswers.employmentType as string | undefined,
      });
      setResults(data.data || []);
    } catch (err) {
      console.error("[Sight Widget] eligibility check failed:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setCurrentStep(0);
    setAnswers({});
    setInputValue("");
    setResults(null);
    setLoading(false);
  }

  function viewAll() {
    sessionStorage.setItem("eligibility_results", JSON.stringify({ data: results }));
    sessionStorage.setItem("eligibility_answers", JSON.stringify({ type: "personal", ...answers }));
    router.push("/eligibility/results");
  }

  const approved = results?.filter((r) => r.status === "pre_approved" || r.status === "likely_eligible") || [];
  const topResults = approved.slice(0, 3);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-navy px-6 py-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold text-sm">Smart Eligibility Check</h3>
          <p className="text-slate-400 text-xs">Find products you qualify for in seconds</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-slate-100">
        <div
          className="h-full bg-green transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center py-8 gap-3">
            <Loader2 className="w-8 h-8 text-navy animate-spin" />
            <p className="text-sm text-slate-500">Checking eligibility across all products...</p>
          </div>
        )}

        {/* Results */}
        {results && !loading && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-slate-900">
                {approved.length > 0
                  ? `${approved.length} product${approved.length !== 1 ? "s" : ""} matched!`
                  : "No exact matches found"}
              </p>
              <button onClick={reset} className="text-xs text-slate-400 hover:text-navy flex items-center gap-1">
                <RotateCcw className="w-3 h-3" /> Try again
              </button>
            </div>

            {topResults.length > 0 ? (
              <div className="space-y-3">
                {topResults.map((r, i) => {
                  const cfg = statusConfig[r.status];
                  const Icon = cfg.icon;
                  const rate = r.product.rateValue || r.product.profitRate;
                  return (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                      {r.provider.logoUrl ? (
                        <img src={r.provider.logoUrl} alt="" className="w-8 h-8 rounded-lg object-contain bg-white border border-slate-200 p-1" />
                      ) : (
                        <div className="w-8 h-8 rounded-lg bg-navy text-white flex items-center justify-center text-xs font-bold">
                          {r.provider.nameEn.charAt(0)}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 truncate">{r.product.nameEn}</p>
                        <p className="text-xs text-slate-400">{r.provider.nameEn}</p>
                      </div>
                      {rate && (
                        <p className="text-sm font-bold text-slate-900">{fmtRate(rate)}%</p>
                      )}
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${cfg.color}`}>
                        <Icon className="w-3 h-3" />
                        {cfg.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-slate-400 py-4 text-center">
                Try adjusting your details or explore our <a href="/compare/personal_loan" className="text-navy underline">full product catalog</a>.
              </p>
            )}

            {approved.length > 3 && (
              <button
                onClick={viewAll}
                className="mt-4 w-full text-center text-sm font-medium text-navy hover:text-navy-dark py-2"
              >
                View all {approved.length} matched products →
              </button>
            )}

            {approved.length > 0 && approved.length <= 3 && results.length > approved.length && (
              <button
                onClick={viewAll}
                className="mt-4 w-full text-center text-sm font-medium text-navy hover:text-navy-dark py-2"
              >
                View all {results.length} results →
              </button>
            )}
          </div>
        )}

        {/* Questions */}
        {!results && !loading && step && (
          <div>
            <p className="text-sm font-medium text-slate-900 mb-4">{step.question}</p>

            {step.type === "choice" && (
              <div className="grid grid-cols-2 gap-2">
                {step.options?.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => selectOption(opt.value)}
                    className={`flex items-center gap-2 border rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:border-navy hover:bg-navy-light hover:-translate-y-px ${
                      answers[step.field] === opt.value
                        ? "border-navy bg-navy-light text-navy"
                        : "border-slate-200 text-slate-700"
                    }`}
                  >
                    {"emoji" in opt && <span>{(opt as any).emoji}</span>}
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {step.type === "number" && (
              <form
                onSubmit={(e) => { e.preventDefault(); submitNumber(); }}
                className="flex gap-2"
              >
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">AED</span>
                  <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={step.placeholder}
                    className="w-full border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
                    autoFocus
                  />
                </div>
                <button
                  type="submit"
                  disabled={!inputValue}
                  className="bg-navy text-white rounded-xl px-4 py-3 hover:bg-navy-dark transition-all duration-200 disabled:opacity-40"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            )}

            {/* Step indicators */}
            <div className="flex gap-1.5 mt-5 justify-center">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i < currentStep ? "w-6 bg-green" : i === currentStep ? "w-6 bg-navy" : "w-3 bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
