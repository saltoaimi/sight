"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-md mx-auto px-5 py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-green-light flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green" />
        </div>
        <h1 className="font-display text-3xl font-bold text-slate-900">You&apos;re on the list!</h1>
        <p className="mt-3 text-slate-500 text-sm">
          We&apos;ll notify you at <strong>{email}</strong> when accounts go live.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 bg-navy text-white font-semibold px-6 py-3 rounded-xl hover:bg-navy-dark transition-all duration-200 text-sm"
        >
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-5 py-24">
      <div className="text-center mb-10">
        <h1 className="font-display text-3xl font-bold text-slate-900">Create your account</h1>
        <p className="mt-3 text-slate-500 text-sm">
          Get personalized product recommendations, save comparisons, and track your applications.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Full name</label>
          <input
            type="text"
            placeholder="Saleh Al Toaimi"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone number</label>
          <div className="flex gap-2">
            <span className="border border-slate-200 rounded-xl px-3 py-3 text-sm text-slate-500 bg-slate-50">+971</span>
            <input
              type="tel"
              placeholder="50 123 4567"
              className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-navy text-white font-semibold py-3 rounded-xl hover:bg-navy-dark hover:shadow-lg hover:-translate-y-px transition-all duration-200 text-sm mt-2"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-slate-400">
        Already have an account?{" "}
        <Link href="/signup" className="text-navy font-medium hover:underline">Sign in</Link>
      </p>

      <p className="mt-4 text-center text-[10px] text-slate-300">
        By signing up you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}
