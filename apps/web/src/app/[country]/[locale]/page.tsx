import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Banknote, CreditCard, Home, Car, Shield, Heart,
  Building2, PiggyBank, BadgeDollarSign, TrendingUp,
  Smartphone, Send, Wallet, HeartPulse, Plane, Wifi,
  ArrowRight, Bot, Bitcoin, BarChart3, ArrowLeftRight,
  Gift, Baby,
} from "lucide-react";
import { EligibilityWidget } from "@/components/eligibility-widget";

const featuredCategories = [
  { key: "personal_loan", icon: Banknote, desc: "Compare rates from 20+ banks" },
  { key: "credit_card", icon: CreditCard, desc: "Cashback, miles & rewards" },
  { key: "mortgage", icon: Home, desc: "Home finance & Islamic mortgages" },
  { key: "auto_loan", icon: Car, desc: "New & used car financing" },
  { key: "car_insurance", icon: Shield, desc: "Comprehensive & third-party" },
  { key: "health_insurance", icon: Heart, desc: "Individual & family plans" },
  { key: "savings_account", icon: PiggyBank, desc: "Best savings rates in UAE" },
  { key: "fixed_deposit", icon: BadgeDollarSign, desc: "Lock in high returns" },
  { key: "mobile_plan", icon: Smartphone, desc: "du, e& & Virgin plans" },
  { key: "business_loan", icon: Building2, desc: "SME & business finance" },
  { key: "robo_advisor", icon: Bot, desc: "Sarwa, StashAway & more" },
  { key: "crypto_exchange", icon: Bitcoin, desc: "VARA-regulated exchanges" },
];

const quickLinks = [
  { label: "Travel Insurance", href: "/compare/travel_insurance", icon: Plane },
  { label: "Stock Trading", href: "/compare/stock_trading", icon: BarChart3 },
  { label: "Digital Wallets", href: "/compare/digital_wallet", icon: Wallet },
  { label: "Balance Transfers", href: "/compare/balance_transfer", icon: ArrowLeftRight },
  { label: "Home Internet", href: "/compare/home_internet", icon: Wifi },
  { label: "Loyalty Programs", href: "/compare/loyalty_program", icon: Gift },
  { label: "Money Transfer", href: "/compare/remittance", icon: Send },
  { label: "Kids Accounts", href: "/compare/kids_account", icon: Baby },
];

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero + Eligibility Widget */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-20 pb-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Hero text */}
            <div className="pt-4">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Compare every financial product in the UAE
              </h1>
              <p className="mt-5 text-base text-slate-500 max-w-lg">
                Loans, cards, insurance, savings & more — real rates from real providers. Find the best deal in minutes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/compare/personal_loan"
                  className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-7 py-3 rounded-xl hover:bg-navy-dark hover:shadow-lg hover:-translate-y-px transition-all duration-200 text-sm"
                >
                  Start Comparing
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/learn"
                  className="inline-block border border-slate-200 text-slate-700 font-semibold px-7 py-3 rounded-xl hover:border-navy hover:text-navy hover:-translate-y-px transition-all duration-200 text-sm"
                >
                  Financial Guides
                </Link>
              </div>

              {/* Quick stats */}
              <div className="mt-10 flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-slate-900">40+</p>
                  <p className="text-xs text-slate-400">Providers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">250+</p>
                  <p className="text-xs text-slate-400">Products</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">100%</p>
                  <p className="text-xs text-slate-400">Free to use</p>
                </div>
              </div>
            </div>

            {/* Right: Eligibility widget */}
            <div>
              <EligibilityWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900">
              {t("home.popularCategories")}
            </h2>
            <p className="mt-2 text-sm text-slate-500">Browse and compare across all product categories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.key}
                href={`/compare/${cat.key}`}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-navy hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 group"
              >
                <cat.icon
                  className="w-6 h-6 text-navy mb-2.5"
                  strokeWidth={1.5}
                />
                <p className="font-medium text-sm text-slate-900 group-hover:text-navy">
                  {t(`categories.${cat.key}`)}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{cat.desc}</p>
              </Link>
            ))}
          </div>

          {/* Quick links for remaining categories */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-navy bg-white border border-slate-200 rounded-full px-3 py-1.5 hover:border-navy transition-all duration-200"
              >
                <link.icon className="w-3 h-3" strokeWidth={1.5} />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-16">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            {t("home.howItWorks")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: t("home.step1Title"), desc: t("home.step1Desc"), color: "bg-navy-light text-navy" },
              { step: "02", title: t("home.step2Title"), desc: t("home.step2Desc"), color: "bg-green-light text-green" },
              { step: "03", title: t("home.step3Title"), desc: t("home.step3Desc"), color: "bg-amber-50 text-amber-600" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-sm font-bold">{item.step}</span>
                </div>
                <h3 className="font-semibold text-lg text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to find your best deal?
          </h2>
          <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">
            Join thousands of UAE residents who save money by comparing before they apply.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/compare/personal_loan"
              className="inline-flex items-center gap-2 bg-white text-navy font-semibold px-7 py-3 rounded-xl hover:bg-slate-50 hover:-translate-y-px transition-all duration-200 text-sm"
            >
              Compare Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/eligibility"
              className="inline-block border border-slate-600 text-white font-semibold px-7 py-3 rounded-xl hover:border-white hover:-translate-y-px transition-all duration-200 text-sm"
            >
              Check Eligibility
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
