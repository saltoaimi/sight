"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Banknote, CreditCard, Home, Car, PiggyBank, Smartphone,
  Shield, Heart, Plane, HeartPulse, HomeIcon,
  Building2, Receipt, Wrench, Landmark,
  ArrowLeftRight, Wallet, Store, Globe,
  TrendingUp, Coins, BadgeDollarSign,
  Send, RefreshCw, Wifi, Tv, Signal,
  ChevronDown,
} from "lucide-react";

type MenuItem = { key: string; icon: any; desc: string };
type MenuSection = { title: string; items: MenuItem[] };

// ── Loans & Mortgages ───────────────────────────────────────
export const loansMenu: MenuSection[] = [
  {
    title: "Personal Loans",
    items: [
      { key: "personal_loan", icon: Banknote, desc: "Compare rates from 20+ banks" },
      { key: "auto_loan", icon: Car, desc: "New & used car financing" },
    ],
  },
  {
    title: "Home Finance",
    items: [
      { key: "mortgage", icon: Home, desc: "Mortgages & Islamic home finance" },
    ],
  },
];

// ── Cards & BNPL ────────────────────────────────────────────
export const cardsMenu: MenuSection[] = [
  {
    title: "Credit Cards",
    items: [
      { key: "credit_card", icon: CreditCard, desc: "Cashback, miles & rewards cards" },
    ],
  },
  {
    title: "Buy Now Pay Later",
    items: [
      { key: "bnpl", icon: Wallet, desc: "Tabby, Tamara & more" },
    ],
  },
  {
    title: "Business Cards",
    items: [
      { key: "corporate_card", icon: CreditCard, desc: "Business credit & charge cards" },
    ],
  },
];

// ── Insurance ───────────────────────────────────────────────
export const insuranceMenu: MenuSection[] = [
  {
    title: "Motor & Travel",
    items: [
      { key: "car_insurance", icon: Shield, desc: "Comprehensive & third-party" },
      { key: "travel_insurance", icon: Plane, desc: "Single & multi-trip cover" },
    ],
  },
  {
    title: "Health & Life",
    items: [
      { key: "health_insurance", icon: Heart, desc: "Individual & family plans" },
      { key: "life_insurance", icon: HeartPulse, desc: "Term & whole life policies" },
    ],
  },
  {
    title: "Home",
    items: [
      { key: "home_insurance", icon: HomeIcon, desc: "Buildings & contents cover" },
    ],
  },
];

// ── Savings & Investments ───────────────────────────────────
export const savingsMenu: MenuSection[] = [
  {
    title: "Savings",
    items: [
      { key: "savings_account", icon: PiggyBank, desc: "Best savings rates in UAE" },
      { key: "fixed_deposit", icon: BadgeDollarSign, desc: "Lock in high deposit rates" },
      { key: "current_account", icon: Wallet, desc: "Everyday banking accounts" },
    ],
  },
  {
    title: "Investments",
    items: [
      { key: "investment_account", icon: TrendingUp, desc: "Brokerage & investment accounts" },
      { key: "gold_savings", icon: Coins, desc: "Digital gold savings plans" },
    ],
  },
  {
    title: "Money Transfer",
    items: [
      { key: "remittance", icon: Send, desc: "Best rates for sending money" },
      { key: "currency_exchange", icon: RefreshCw, desc: "Compare exchange rates" },
    ],
  },
];

// ── Telecom ─────────────────────────────────────────────────
export const telecomMenu: MenuSection[] = [
  {
    title: "Mobile",
    items: [
      { key: "mobile_plan", icon: Smartphone, desc: "du, e& & Virgin plans" },
    ],
  },
  {
    title: "Home",
    items: [
      { key: "home_internet", icon: Wifi, desc: "Broadband & fibre packages" },
      { key: "tv_streaming", icon: Tv, desc: "TV & streaming bundles" },
    ],
  },
];

// ── Business ────────────────────────────────────────────────
export const businessMenu: MenuSection[] = [
  {
    title: "Financing",
    items: [
      { key: "business_loan", icon: Building2, desc: "Term loans for businesses" },
      { key: "sme_loan", icon: Landmark, desc: "SME-specific finance" },
      { key: "invoice_financing", icon: Receipt, desc: "Unlock cash from receivables" },
      { key: "equipment_financing", icon: Wrench, desc: "Asset & equipment finance" },
    ],
  },
  {
    title: "Banking & Cards",
    items: [
      { key: "business_account", icon: Landmark, desc: "Current & savings accounts" },
      { key: "corporate_card", icon: CreditCard, desc: "Business credit & charge cards" },
      { key: "trade_finance", icon: ArrowLeftRight, desc: "LCs, guarantees & more" },
      { key: "working_capital", icon: Wallet, desc: "Short-term business funding" },
    ],
  },
  {
    title: "Payments",
    items: [
      { key: "pos_solutions", icon: Store, desc: "Point-of-sale terminals" },
      { key: "payment_gateway", icon: Globe, desc: "Online payment processing" },
    ],
  },
];

// ── MenuColumn component ────────────────────────────────────
function MenuColumn({ section }: { section: MenuSection }) {
  const t = useTranslations("categories");
  return (
    <div>
      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">{section.title}</p>
      <div className="space-y-0.5">
        {section.items.map((item) => (
          <Link
            key={item.key}
            href={`/compare/${item.key}`}
            className="flex items-start gap-3 p-2 rounded-lg hover:bg-navy-light transition-all duration-200 group"
          >
            <item.icon className="w-4.5 h-4.5 text-navy mt-0.5 shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-medium text-slate-900 group-hover:text-navy">{t(item.key as any)}</p>
              <p className="text-[11px] text-slate-400 leading-tight">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── MegaMenuDropdown component ──────────────────────────────
export function MegaMenuDropdown({
  label,
  sections,
}: {
  label: string;
  sections: MenuSection[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleEnter = () => {
    clearTimeout(timeout.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeout.current = setTimeout(() => setOpen(false), 200);
  };

  useEffect(() => () => clearTimeout(timeout.current), []);

  const cols = sections.length;

  return (
    <div ref={ref} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="relative">
      <button
        className="flex items-center gap-1 text-[13px] font-medium text-slate-600 hover:text-navy transition-colors py-2"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-slate-200 rounded-2xl shadow-lg p-8 z-50 min-w-[640px]">
          <div style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }} className="grid gap-10">
            {sections.map((section, i) => (
              <MenuColumn key={i} section={section} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
