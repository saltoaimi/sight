import { EligibilityResults } from "@/components/eligibility-results";

export const metadata = {
  title: "Your Eligibility Results — Sight",
  description: "See which financial products you qualify for.",
};

export default function ResultsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Your Results</h1>
        <p className="mt-1 text-sm text-slate-500">
          Based on your answers, here are the products matched to your profile.
        </p>
      </div>
      <EligibilityResults />
    </div>
  );
}
