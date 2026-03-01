import { EligibilityChat } from "@/components/eligibility-chat";

export const metadata = {
  title: "Check Your Eligibility — Sight",
  description:
    "Find out which financial products you qualify for in under 60 seconds.",
};

export default function EligibilityPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-16">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl font-bold text-slate-900 tracking-tight">
          Check Your Eligibility
        </h1>
        <p className="mt-3 text-slate-500">
          Answer a few questions. We&apos;ll match you with products you qualify
          for.
        </p>
      </div>
      <EligibilityChat />
    </div>
  );
}
