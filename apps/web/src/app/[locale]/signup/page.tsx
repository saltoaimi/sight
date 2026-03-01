"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Mail } from "lucide-react";

function UAEPassLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#1C1C1C" />
      <path d="M6 8h3v8H6V8zm4.5 0H14c1.66 0 3 1.34 3 3s-1.34 3-3 3h-1.5v2h-2V8zm2 4.5H14c.55 0 1-.45 1-1s-.45-1-1-1h-1.5v2z" fill="white" />
    </svg>
  );
}

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mode, setMode] = useState<"signup" | "login">("signup");

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
    <div className="max-w-md mx-auto px-5 py-16 md:py-24">
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900">
          {mode === "signup" ? "Create your account" : "Welcome back"}
        </h1>
        <p className="mt-3 text-slate-500 text-sm">
          {mode === "signup"
            ? "Get personalized recommendations, save comparisons, and track applications."
            : "Sign in to access your saved comparisons and recommendations."}
        </p>
      </div>

      {/* UAE PASS */}
      <button className="w-full flex items-center justify-center gap-3 bg-[#1C1C1C] text-white font-semibold py-3.5 rounded-xl hover:bg-black hover:shadow-lg hover:-translate-y-px transition-all duration-200 text-sm">
        <svg width="22" height="22" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0z" fill="#C8102E"/>
          <path d="M128 176h48v160h-48V176zm80 0h64c28 0 52 22 52 52s-24 52-52 52h-28v56h-36V176zm36 76h28c10 0 16-8 16-24 0-14-6-24-16-24h-28v48z" fill="white"/>
        </svg>
        Sign {mode === "signup" ? "up" : "in"} with UAE PASS
      </button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white px-4 text-slate-400">or continue with email</span>
        </div>
      </div>

      {/* Email form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        {mode === "signup" && (
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1.5">Full name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Saleh Al Toaimi"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/10 focus:border-navy transition-all"
            />
          </div>
        )}
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1.5">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/10 focus:border-navy transition-all"
          />
        </div>
        {mode === "signup" && (
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1.5">Phone number</label>
            <div className="flex gap-2">
              <span className="border border-slate-200 rounded-xl px-3 py-3 text-sm text-slate-400 bg-slate-50 select-none">
                +971
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="50 123 4567"
                className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/10 focus:border-navy transition-all"
              />
            </div>
          </div>
        )}
        {mode === "login" && (
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1.5">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/10 focus:border-navy transition-all"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-navy text-white font-semibold py-3.5 rounded-xl hover:bg-navy-dark hover:shadow-lg hover:-translate-y-px transition-all duration-200 text-sm mt-1"
        >
          <Mail className="w-4 h-4" />
          {mode === "signup" ? "Create Account" : "Sign In"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        {mode === "signup" ? "Already have an account?" : "Don\u2019t have an account?"}{" "}
        <button
          onClick={() => setMode(mode === "signup" ? "login" : "signup")}
          className="text-navy font-semibold hover:underline"
        >
          {mode === "signup" ? "Sign In" : "Sign Up"}
        </button>
      </p>

      <p className="mt-4 text-center text-[10px] text-slate-300 leading-relaxed">
        By continuing you agree to our{" "}
        <Link href="/terms" className="underline hover:text-slate-400">Terms of Service</Link>
        {" "}and{" "}
        <Link href="/privacy" className="underline hover:text-slate-400">Privacy Policy</Link>.
      </p>
    </div>
  );
}
