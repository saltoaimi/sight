import { EligibilityResults } from "@/components/eligibility-results";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Your Eligibility Results — Sight",
  description: "See which financial products you qualify for.",
};

export default function ResultsPage() {
  return (
    <div className="max-w-[900px] mx-auto px-5 md:px-10 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-6">
        <a href="/" className="hover:text-navy transition-colors">Home</a>
        <span className="mx-2">/</span>
        <a href="/eligibility" className="hover:text-navy transition-colors">Eligibility</a>
        <span className="mx-2">/</span>
        <span className="text-slate-900 font-medium">Results</span>
      </nav>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Your Eligibility Results</h1>
        <p className="mt-1 text-sm text-slate-500">
          Products matched to your profile, sorted by best fit.
        </p>
      </div>
      <EligibilityResults />
    </div>
  );
}
