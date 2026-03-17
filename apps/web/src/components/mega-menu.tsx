"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import {
  Banknote, CreditCard, Home, Car, PiggyBank, Smartphone,
  Shield, Heart, Plane, HeartPulse, HomeIcon,
  Building2, Receipt, Wrench, Landmark,
  ArrowLeftRight, Wallet, Store, Globe,
  TrendingUp, Coins, BadgeDollarSign,
  Send, RefreshCw, Wifi, Tv, Signal,
  GraduationCap, Clock, Users, Dog, Baby,
  Bot, Building, BarChart3, Bitcoin, CircleDollarSign,
  Gift, Zap, Banknote as BanknoteAlt, Home as HomeAlt,
  HandCoins, Handshake,
  ChevronDown,
} from "lucide-react";
import type { Country } from "@sight/shared";
import { CATEGORY_AVAILABILITY } from "@sight/shared";

type MenuItem = { key: string; icon: any; desc: string };
type MenuSection = { title: string; items: MenuItem[] };

// ── Loans ────────────────────────────────────────────────────
export const loansMenu: MenuSection[] = [
  {
    title: "Personal",
    items: [
      { key: "personal_loan", icon: Banknote, desc: "Compare rates from 20+ banks" },
      { key: "education_loan", icon: GraduationCap, desc: "Student & education finance" },
      { key: "salary_advance", icon: Clock, desc: "Earned wage access apps" },
      { key: "hajj_umrah_financing", icon: Landmark, desc: "Hajj & Umrah travel finance" },
    ],
  },
  {
    title: "Auto & Home",
    items: [
      { key: "auto_loan", icon: Car, desc: "New & used car financing" },
      { key: "mortgage", icon: Home, desc: "Mortgages & Islamic home finance" },
    ],
  },
];

// ── Cards ────────────────────────────────────────────────────
export const cardsMenu: MenuSection[] = [
  {
    title: "Credit Cards",
    items: [
      { key: "credit_card", icon: CreditCard, desc: "Cashback, miles & rewards cards" },
      { key: "balance_transfer", icon: ArrowLeftRight, desc: "0% balance transfer offers" },
    ],
  },
  {
    title: "Prepaid & Forex",
    items: [
      { key: "prepaid_card", icon: CreditCard, desc: "General-purpose prepaid cards" },
      { key: "forex_card", icon: Globe, desc: "Multi-currency travel cards" },
    ],
  },
  {
    title: "Buy Now Pay Later",
    items: [
      { key: "bnpl", icon: Wallet, desc: "Tabby, Tamara & more" },
    ],
  },
];

// ── Insurance ────────────────────────────────────────────────
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
      { key: "domestic_helper_insurance", icon: Users, desc: "Mandatory domestic worker cover" },
    ],
  },
  {
    title: "Property & Other",
    items: [
      { key: "home_insurance", icon: HomeIcon, desc: "Buildings & contents cover" },
      { key: "pet_insurance", icon: Dog, desc: "Vet bills & liability cover" },
      { key: "business_insurance", icon: Building2, desc: "Commercial insurance plans" },
    ],
  },
];

// ── Banking ──────────────────────────────────────────────────
export const bankingMenu: MenuSection[] = [
  {
    title: "Accounts",
    items: [
      { key: "savings_account", icon: PiggyBank, desc: "Best savings rates" },
      { key: "current_account", icon: Wallet, desc: "Everyday banking accounts" },
      { key: "fixed_deposit", icon: BadgeDollarSign, desc: "Lock in high deposit rates" },
      { key: "kids_account", icon: Baby, desc: "Accounts for children & teens" },
    ],
  },
  {
    title: "Money Transfer",
    items: [
      { key: "remittance", icon: Send, desc: "Best rates for sending money" },
      { key: "currency_exchange", icon: RefreshCw, desc: "Compare exchange rates" },
    ],
  },
  {
    title: "Government Programs",
    items: [
      { key: "sah_sukuk", icon: BadgeDollarSign, desc: "Sah savings sukuk program" },
      { key: "sakani_housing_support", icon: HomeAlt, desc: "Sakani housing support program" },
    ],
  },
];

// ── Investing ────────────────────────────────────────────────
export const investingMenu: MenuSection[] = [
  {
    title: "Managed",
    items: [
      { key: "robo_advisor", icon: Bot, desc: "Sarwa, StashAway & more" },
      { key: "real_estate_crowdfunding", icon: Building, desc: "Fractional property investing" },
    ],
  },
  {
    title: "Self-Directed",
    items: [
      { key: "stock_trading", icon: BarChart3, desc: "Stocks, ETFs & mutual funds" },
      { key: "crypto_exchange", icon: Bitcoin, desc: "Regulated crypto exchanges" },
      { key: "gold_trading", icon: CircleDollarSign, desc: "Physical & digital gold" },
    ],
  },
  {
    title: "Savings Plans",
    items: [
      { key: "investment_account", icon: TrendingUp, desc: "Brokerage & investment accounts" },
      { key: "gold_savings", icon: Coins, desc: "Digital gold savings plans" },
    ],
  },
];

// ── Digital Finance ──────────────────────────────────────────
export const digitalFinanceMenu: MenuSection[] = [
  {
    title: "Wallets & Payments",
    items: [
      { key: "digital_wallet", icon: Smartphone, desc: "Digital wallet apps" },
    ],
  },
  {
    title: "Credit & Rewards",
    items: [
      { key: "credit_score", icon: BarChart3, desc: "Check & monitor your score" },
      { key: "debt_management", icon: Receipt, desc: "Consolidation & management" },
      { key: "loyalty_program", icon: Gift, desc: "Rewards & loyalty programs" },
    ],
  },
  {
    title: "Alternative Finance",
    items: [
      { key: "microfinance", icon: HandCoins, desc: "Micro-lending platforms" },
      { key: "debt_crowdfunding", icon: Handshake, desc: "Peer-to-peer debt funding" },
    ],
  },
];

// ── Telecom ──────────────────────────────────────────────────
export const telecomMenu: MenuSection[] = [
  {
    title: "Mobile",
    items: [
      { key: "mobile_plan", icon: Signal, desc: "Compare mobile plans" },
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

// ── Business ─────────────────────────────────────────────────
export const businessMenu: MenuSection[] = [
  {
    title: "Financing",
    items: [
      { key: "business_loan", icon: Building2, desc: "Term loans for businesses" },
      { key: "sme_loan", icon: Landmark, desc: "SME-specific finance" },
      { key: "invoice_financing", icon: Receipt, desc: "Unlock cash from receivables" },
      { key: "equipment_financing", icon: Wrench, desc: "Asset & equipment finance" },
      { key: "trade_finance", icon: ArrowLeftRight, desc: "LCs, guarantees & more" },
      { key: "working_capital", icon: Wallet, desc: "Short-term business funding" },
    ],
  },
  {
    title: "Banking & Cards",
    items: [
      { key: "business_account", icon: Landmark, desc: "Business current & savings" },
      { key: "business_credit_card", icon: CreditCard, desc: "Business credit cards" },
      { key: "corporate_card", icon: CreditCard, desc: "Corporate charge cards" },
    ],
  },
  {
    title: "Payments",
    items: [
      { key: "pos_solutions", icon: Store, desc: "Point-of-sale terminals" },
      { key: "payment_gateway", icon: Globe, desc: "Online payment processing" },
      { key: "merchant_account", icon: Zap, desc: "Payment processing accounts" },
    ],
  },
];

// ── Country filtering ────────────────────────────────────────
function filterSections(sections: MenuSection[], country: Country): MenuSection[] {
  return sections
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) => CATEGORY_AVAILABILITY[item.key]?.includes(country)
      ),
    }))
    .filter((section) => section.items.length > 0);
}

export function getMenusForCountry(country: Country) {
  return {
    loans: filterSections(loansMenu, country),
    cards: filterSections(cardsMenu, country),
    insurance: filterSections(insuranceMenu, country),
    banking: filterSections(bankingMenu, country),
    investing: filterSections(investingMenu, country),
    digitalFinance: filterSections(digitalFinanceMenu, country),
    telecom: filterSections(telecomMenu, country),
    business: filterSections(businessMenu, country),
  };
}

// ── MenuColumn component ────────────────────────────────────
function MenuColumn({ section, country }: { section: MenuSection; country: Country }) {
  const t = useTranslations("categories");
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const locale = segments[1] || "en";

  return (
    <div>
      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">{section.title}</p>
      <div className="space-y-0.5">
        {section.items.map((item) => (
          <Link
            key={item.key}
            href={`/${country}/${locale}/compare/${item.key}`}
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
  country,
}: {
  label: string;
  sections: MenuSection[];
  country: Country;
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

  if (sections.length === 0) return null;

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
              <MenuColumn key={i} section={section} country={country} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
