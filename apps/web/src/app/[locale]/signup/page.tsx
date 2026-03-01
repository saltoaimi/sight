"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, ShieldCheck, Sparkles, BarChart3 } from "lucide-react";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleLoginSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!otpSent && phone) {
      setOtpSent(true);
      return;
    }
    if (otpSent && otp) {
      setSubmitted(true);
    }
  }

  function handleSignupSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (phone) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-md mx-auto px-5 py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-green-light flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green" />
        </div>
        <h1 className="font-display text-3xl font-bold text-slate-900">
          {mode === "login" ? "Welcome back!" : "You\u2019re on the list!"}
        </h1>
        <p className="mt-3 text-slate-500 text-sm">
          {mode === "login"
            ? "You\u2019re signed in. Start exploring pre-approved products."
            : "We\u2019ll notify you when your account is ready. You\u2019ll be the first to see your pre-approved offers."}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 bg-navy text-white font-semibold px-6 py-3 rounded-xl hover:bg-navy-dark transition-all duration-200 text-sm"
        >
          Explore Products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-5 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900">
          {mode === "login" ? "Welcome back" : "Create your account"}
        </h1>
        <p className="mt-3 text-slate-500 text-sm max-w-xs mx-auto">
          {mode === "login"
            ? "Sign in to see your pre-approved products and saved comparisons."
            : "Sign up to unlock pre-approved offers tailored to your profile."}
        </p>
      </div>

      {/* ── SIGN IN MODE ── */}
      {mode === "login" && (
        <form onSubmit={handleLoginSubmit} className="space-y-3.5">
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
                required
                disabled={otpSent}
                className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/10 focus:border-navy transition-all disabled:bg-slate-50 disabled:text-slate-400"
              />
            </div>
          </div>

          {otpSent && (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-medium text-slate-600">Verification code</label>
                <button
                  type="button"
                  onClick={() => { setOtpSent(false); setOtp(""); }}
                  className="text-xs text-navy font-medium hover:underline"
                >
                  Change number
                </button>
              </div>
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="Enter 6-digit code"
                autoFocus
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-center tracking-[0.3em] focus:outline-none focus:ring-2 focus:ring-navy/10 focus:border-navy transition-all"
              />
              <p className="text-xs text-slate-400 mt-1.5">
                We sent a code to +971 {phone}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={!phone || (otpSent && otp.length < 4)}
            className="w-full flex items-center justify-center gap-2 bg-navy text-white font-semibold py-3.5 rounded-xl hover:bg-navy-dark hover:shadow-lg hover:-translate-y-px transition-all duration-200 text-sm mt-1 disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            <Phone className="w-4 h-4" />
            {otpSent ? "Verify & Sign In" : "Send Code"}
          </button>
        </form>
      )}

      {/* ── SIGN UP MODE ── */}
      {mode === "signup" && (
        <>
          {/* UAE PASS */}
          <button className="w-full flex items-center justify-center gap-3 bg-[#1C1C1C] text-white font-semibold py-3.5 rounded-xl hover:bg-black hover:shadow-lg hover:-translate-y-px transition-all duration-200 text-sm">
            <svg width="22" height="22" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0z" fill="#C8102E"/>
              <path d="M128 176h48v160h-48V176zm80 0h64c28 0 52 22 52 52s-24 52-52 52h-28v56h-36V176zm36 76h28c10 0 16-8 16-24 0-14-6-24-16-24h-28v48z" fill="white"/>
            </svg>
            Sign up with UAE PASS
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-4 text-slate-400">or sign up manually</span>
            </div>
          </div>

          <form onSubmit={handleSignupSubmit} className="space-y-3.5">
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
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1.5">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/10 focus:border-navy transition-all"
              />
            </div>
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
                  required
                  className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/10 focus:border-navy transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!phone}
              className="w-full flex items-center justify-center gap-2 bg-navy text-white font-semibold py-3.5 rounded-xl hover:bg-navy-dark hover:shadow-lg hover:-translate-y-px transition-all duration-200 text-sm mt-1 disabled:opacity-40"
            >
              Create Account
            </button>
          </form>

          {/* Value props */}
          <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Why sign up?</p>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-green" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">See pre-approved products</p>
                <p className="text-xs text-slate-400">Know which products you qualify for before you apply</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-navy-light flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-navy" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Personalized recommendations</p>
                <p className="text-xs text-slate-400">Get offers matched to your salary, nationality, and needs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                <BarChart3 className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Track your applications</p>
                <p className="text-xs text-slate-400">Save comparisons and monitor application status in one place</p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Toggle */}
      <p className="mt-6 text-center text-sm text-slate-500">
        {mode === "login" ? "Don\u2019t have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => { setMode(mode === "login" ? "signup" : "login"); setOtpSent(false); setOtp(""); }}
          className="text-navy font-semibold hover:underline"
        >
          {mode === "login" ? "Sign Up" : "Sign In"}
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
