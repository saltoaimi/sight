"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, User, Bot, Loader2 } from "lucide-react";
import { checkEligibility } from "@/lib/eligibility-engine";

interface Question {
  id: string;
  text: string;
  type: "choice" | "number";
  options?: { value: string; label: string }[];
  field: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
}

const personalQuestions: Question[] = [
  {
    id: "category",
    text: "What type of product are you looking for?",
    type: "choice",
    field: "category",
    options: [
      { value: "personal_loan", label: "Personal Loan" },
      { value: "credit_card", label: "Credit Card" },
      { value: "mortgage", label: "Mortgage" },
      { value: "auto_loan", label: "Auto Loan" },
      { value: "savings_account", label: "Savings Account" },
      { value: "fixed_deposit", label: "Fixed Deposit" },
      { value: "investment_account", label: "Investments" },
      { value: "bnpl", label: "Buy Now Pay Later" },
      { value: "car_insurance", label: "Car Insurance" },
      { value: "health_insurance", label: "Health Insurance" },
      { value: "life_insurance", label: "Life Insurance" },
      { value: "home_insurance", label: "Home Insurance" },
      { value: "travel_insurance", label: "Travel Insurance" },
      { value: "mobile_plan", label: "Mobile Plan" },
    ],
  },
  {
    id: "salary",
    text: "What is your monthly salary?",
    type: "number",
    field: "salary",
    placeholder: "e.g. 15000",
    prefix: "AED",
  },
  {
    id: "nationality",
    text: "What is your residency status?",
    type: "choice",
    field: "nationality",
    options: [
      { value: "uae", label: "UAE National" },
      { value: "gcc", label: "GCC National" },
      { value: "expat", label: "Expat / Resident" },
      { value: "non_resident", label: "Non-Resident" },
    ],
  },
  {
    id: "employment",
    text: "What is your employment type?",
    type: "choice",
    field: "employmentType",
    options: [
      { value: "salaried", label: "Salaried" },
      { value: "self_employed", label: "Self-Employed" },
      { value: "business_owner", label: "Business Owner" },
    ],
  },
  {
    id: "employmentMonths",
    text: "How many months have you been with your current employer?",
    type: "number",
    field: "employmentMonths",
    placeholder: "e.g. 24",
    suffix: "months",
  },
  {
    id: "age",
    text: "How old are you?",
    type: "number",
    field: "age",
    placeholder: "e.g. 30",
    suffix: "years",
  },
];

const businessQuestions: Question[] = [
  {
    id: "category",
    text: "What type of business product are you looking for?",
    type: "choice",
    field: "category",
    options: [
      { value: "business_loan", label: "Business Term Loan" },
      { value: "sme_loan", label: "SME Loan" },
      { value: "invoice_financing", label: "Invoice Financing" },
      { value: "equipment_financing", label: "Equipment Financing" },
      { value: "business_account", label: "Business Account" },
      { value: "corporate_card", label: "Corporate Card" },
      { value: "pos_solutions", label: "POS Solutions" },
    ],
  },
  {
    id: "revenue",
    text: "What is your annual business revenue?",
    type: "number",
    field: "businessRevenue",
    placeholder: "e.g. 500000",
    prefix: "AED",
  },
  {
    id: "businessAge",
    text: "How many months has your business been operating?",
    type: "number",
    field: "businessAgeMonths",
    placeholder: "e.g. 24",
    suffix: "months",
  },
  {
    id: "nationality",
    text: "What is the business owner's residency status?",
    type: "choice",
    field: "nationality",
    options: [
      { value: "uae", label: "UAE National" },
      { value: "gcc", label: "GCC National" },
      { value: "expat", label: "Expat / Resident" },
    ],
  },
];

interface Message {
  role: "bot" | "user";
  text: string;
}

export function EligibilityChat() {
  const router = useRouter();
  const [step, setStep] = useState<"type" | "questions" | "loading">("type");
  const [userType, setUserType] = useState<"personal" | "business" | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I'll help you find products you qualify for. Are you looking for personal or business products?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const questions = userType === "business" ? businessQuestions : personalQuestions;
  const currentQuestion = step === "questions" ? questions[questionIndex] : null;
  const totalSteps = questions.length;
  const progress = step === "loading" ? 100 : step === "questions" ? ((questionIndex) / totalSteps) * 100 : 0;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function addMessage(role: "bot" | "user", text: string) {
    setMessages((prev) => [...prev, { role, text }]);
  }

  function selectType(type: "personal" | "business") {
    setUserType(type);
    setStep("questions");
    addMessage("user", type === "personal" ? "Personal" : "Business");
    const q = type === "business" ? businessQuestions : personalQuestions;
    setTimeout(() => addMessage("bot", q[0].text), 300);
  }

  function answerQuestion(value: string, displayText: string) {
    if (!currentQuestion) return;
    const newAnswers = {
      ...answers,
      [currentQuestion.field]: currentQuestion.type === "number" ? Number(value) : value,
    };
    setAnswers(newAnswers);
    addMessage("user", displayText);

    const nextIndex = questionIndex + 1;
    if (nextIndex < questions.length) {
      setQuestionIndex(nextIndex);
      setTimeout(() => addMessage("bot", questions[nextIndex].text), 300);
    } else {
      setStep("loading");
      setTimeout(() => {
        addMessage("bot", "Checking your eligibility across all products...");
        submitEligibility(newAnswers);
      }, 300);
    }
  }

  function submitEligibility(finalAnswers: Record<string, string | number>) {
    const payload = { type: userType, ...finalAnswers };
    try {
      const data = checkEligibility({
        type: userType as "personal" | "business",
        category: finalAnswers.category as string,
        salary: finalAnswers.salary as number | undefined,
        nationality: finalAnswers.nationality as string | undefined,
        employmentType: finalAnswers.employmentType as string | undefined,
        employmentMonths: finalAnswers.employmentMonths as number | undefined,
        age: finalAnswers.age as number | undefined,
        businessRevenue: finalAnswers.businessRevenue as number | undefined,
        businessAgeMonths: finalAnswers.businessAgeMonths as number | undefined,
      });
      const approved = (data.data || []).filter(
        (r: any) => r.status === "pre_approved" || r.status === "likely_eligible"
      );
      addMessage(
        "bot",
        approved.length > 0
          ? `Great news! I found ${approved.length} product${approved.length !== 1 ? "s" : ""} you're likely eligible for. Let me show you the results.`
          : "I've checked all available products. Let me show you the results."
      );
      sessionStorage.setItem("eligibility_results", JSON.stringify(data));
      sessionStorage.setItem("eligibility_answers", JSON.stringify(payload));
      setTimeout(() => router.push("/eligibility/results"), 1200);
    } catch {
      addMessage("bot", "Something went wrong. Please try again.");
      setStep("questions");
      setQuestionIndex(0);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      {step !== "type" && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-400">
              {step === "loading" ? "Analyzing..." : `Question ${questionIndex + 1} of ${totalSteps}`}
            </p>
            <p className="text-xs font-medium text-navy">{Math.round(progress)}%</p>
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-navy rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Chat messages */}
      <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-1">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === "bot"
                  ? "bg-navy text-white"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {msg.role === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
            </div>
            <div
              className={`px-4 py-3 rounded-2xl text-sm max-w-md ${
                msg.role === "bot"
                  ? "bg-slate-100 text-slate-900"
                  : "bg-navy text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      {step === "type" && (
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => selectType("personal")}
            className="bg-white border border-slate-200 rounded-xl px-8 py-3.5 text-sm font-medium text-slate-900 hover:border-navy hover:bg-navy-light hover:-translate-y-px transition-all duration-200"
          >
            Personal
          </button>
          <button
            onClick={() => selectType("business")}
            className="bg-white border border-slate-200 rounded-xl px-8 py-3.5 text-sm font-medium text-slate-900 hover:border-navy hover:bg-navy-light hover:-translate-y-px transition-all duration-200"
          >
            Business
          </button>
        </div>
      )}

      {step === "questions" && currentQuestion?.type === "choice" && (
        <div className="flex flex-wrap gap-2 justify-center">
          {currentQuestion.options?.map((opt) => (
            <button
              key={opt.value}
              onClick={() => answerQuestion(opt.value, opt.label)}
              className="bg-white border border-slate-200 rounded-xl px-5 py-2.5 text-sm font-medium text-slate-900 hover:border-navy hover:bg-navy-light hover:-translate-y-px transition-all duration-200"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {step === "questions" && currentQuestion?.type === "number" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (inputValue) {
              const display = [currentQuestion.prefix, inputValue, currentQuestion.suffix]
                .filter(Boolean)
                .join(" ");
              answerQuestion(inputValue, display);
              setInputValue("");
            }
          }}
          className="flex gap-2 max-w-sm mx-auto"
        >
          {currentQuestion.prefix && (
            <span className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-400 bg-slate-50">
              {currentQuestion.prefix}
            </span>
          )}
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={currentQuestion.placeholder || "Type a number..."}
            className="flex-1 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-navy transition-colors"
            autoFocus
          />
          {currentQuestion.suffix && (
            <span className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-400 bg-slate-50">
              {currentQuestion.suffix}
            </span>
          )}
          <button
            type="submit"
            disabled={!inputValue}
            className="bg-navy text-white rounded-xl p-2.5 hover:bg-navy-dark transition-all duration-200 disabled:opacity-40"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      )}

      {step === "loading" && (
        <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
          <Loader2 className="w-4 h-4 animate-spin" />
          Analyzing products...
        </div>
      )}
    </div>
  );
}
