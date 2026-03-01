# Sight Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign Sight with navy/white TradePay-inspired aesthetic, mega menu navigation, AI eligibility checker, expanded SME categories, and real UAE product data.

**Architecture:** Next.js 15 frontend with Fastify API. Redesign is frontend-heavy with DB schema extensions for eligibility and new SME categories. Eligibility checker is a structured questionnaire with server-side rule matching.

**Tech Stack:** Next.js 15, Tailwind CSS 4, Space Grotesk + Inter fonts, Fastify 5, Drizzle ORM, Neon PostgreSQL, Lucide React icons.

**Design Notes:**
- All backgrounds are **white** (`#ffffff`). No dark sections except footer.
- TradePay-inspired **motion**: smooth hover transitions (scale, shadow lift), subtle fade-in on scroll, button hover effects with translate/shadow. Use `transition-all duration-200` liberally.
- Navy (`#1e3a5f`) is the primary brand color. Green (`#059669`) only for "Apply" / "Pre-Approved" action states.
- Cards hover: `hover:-translate-y-0.5 hover:shadow-md transition-all duration-200`
- Buttons hover: `hover:shadow-lg hover:-translate-y-px transition-all duration-200`

---

### Task 1: Update Color System & Fonts

**Files:**
- Modify: `apps/web/src/app/globals.css`
- Modify: `apps/web/src/app/[locale]/layout.tsx`

**Step 1: Update globals.css with navy color system and fonts**

Replace the entire `apps/web/src/app/globals.css` with:

```css
@import "tailwindcss";

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap');

@theme {
  --color-navy: #1e3a5f;
  --color-navy-dark: #152e4a;
  --color-navy-light: #f0f4f8;
  --color-green: #059669;
  --color-green-light: #ecfdf5;
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

**Step 2: Update layout.tsx to use new font classes**

In `apps/web/src/app/[locale]/layout.tsx`, change the body className:

```tsx
<body className={`font-body bg-white ${dir === "rtl" ? "font-arabic" : ""}`}>
```

**Step 3: Verify dev server compiles**

Run: `cd /Users/salehaltoaimi/sight && pnpm --filter @sight/web dev`
Expected: Compiles without errors, page loads with Inter font.

**Step 4: Commit**

```bash
git add apps/web/src/app/globals.css apps/web/src/app/[locale]/layout.tsx
git commit -m "style: update color system to navy/black/white with Space Grotesk + Inter fonts"
```

---

### Task 2: Copy Logo & Create Logo Component

**Files:**
- Create: `apps/web/public/logo-white.png`
- Create: `apps/web/src/components/logo.tsx`

**Step 1: Copy logo to public directory**

```bash
cp /Users/salehaltoaimi/Desktop/Logos/sight.png /Users/salehaltoaimi/sight/apps/web/public/logo-white.png
```

**Step 2: Create Logo component**

Create `apps/web/src/components/logo.tsx`:

```tsx
import Image from "next/image";

export function Logo({ variant = "dark", className = "" }: { variant?: "dark" | "white"; className?: string }) {
  // White logo with CSS filter for dark variant
  return (
    <Image
      src="/logo-white.png"
      alt="Sight"
      width={100}
      height={32}
      className={`${variant === "dark" ? "brightness-0" : ""} ${className}`}
      priority
    />
  );
}
```

**Step 3: Commit**

```bash
git add apps/web/public/logo-white.png apps/web/src/components/logo.tsx
git commit -m "feat: add Sight logo component with dark/white variants"
```

---

### Task 3: Install Lucide Icons

**Step 1: Install lucide-react in web app**

```bash
cd /Users/salehaltoaimi/sight && pnpm --filter @sight/web add lucide-react
```

**Step 2: Verify import works**

No test needed — we'll use icons in subsequent tasks. Just verify install succeeded.

**Step 3: Commit**

```bash
git add apps/web/package.json pnpm-lock.yaml
git commit -m "deps: add lucide-react icons"
```

---

### Task 4: Expand Product Categories for SME

**Files:**
- Modify: `packages/shared/src/constants/categories.ts`
- Modify: `packages/i18n/src/messages/en.json`
- Modify: `packages/i18n/src/messages/ar.json`

**Step 1: Add SME categories to shared constants**

In `packages/shared/src/constants/categories.ts`, add to PRODUCT_CATEGORIES:

```typescript
export const PRODUCT_CATEGORIES = {
  // Banking & Lending
  PERSONAL_LOAN: "personal_loan",
  AUTO_LOAN: "auto_loan",
  MORTGAGE: "mortgage",
  CREDIT_CARD: "credit_card",
  BUSINESS_LOAN: "business_loan",
  SAVINGS_ACCOUNT: "savings_account",
  FIXED_DEPOSIT: "fixed_deposit",
  CURRENT_ACCOUNT: "current_account",
  // Insurance
  CAR_INSURANCE: "car_insurance",
  HEALTH_INSURANCE: "health_insurance",
  TRAVEL_INSURANCE: "travel_insurance",
  HOME_INSURANCE: "home_insurance",
  LIFE_INSURANCE: "life_insurance",
  PET_INSURANCE: "pet_insurance",
  BUSINESS_INSURANCE: "business_insurance",
  // Telecom
  MOBILE_PLAN: "mobile_plan",
  HOME_INTERNET: "home_internet",
  TV_STREAMING: "tv_streaming",
  // Investments
  INVESTMENT_ACCOUNT: "investment_account",
  GOLD_SAVINGS: "gold_savings",
  // Money Transfer
  REMITTANCE: "remittance",
  CURRENCY_EXCHANGE: "currency_exchange",
  // Credit & Financial Health
  CREDIT_SCORE: "credit_score",
  DEBT_MANAGEMENT: "debt_management",
  // SME / Business (NEW)
  SME_LOAN: "sme_loan",
  INVOICE_FINANCING: "invoice_financing",
  EQUIPMENT_FINANCING: "equipment_financing",
  BUSINESS_ACCOUNT: "business_account",
  CORPORATE_CARD: "corporate_card",
  TRADE_FINANCE: "trade_finance",
  WORKING_CAPITAL: "working_capital",
  POS_SOLUTIONS: "pos_solutions",
  PAYMENT_GATEWAY: "payment_gateway",
} as const;
```

Update CATEGORY_GROUPS to add a `business` group:

```typescript
export const CATEGORY_GROUPS = {
  banking: [
    PRODUCT_CATEGORIES.PERSONAL_LOAN,
    PRODUCT_CATEGORIES.AUTO_LOAN,
    PRODUCT_CATEGORIES.MORTGAGE,
    PRODUCT_CATEGORIES.CREDIT_CARD,
    PRODUCT_CATEGORIES.SAVINGS_ACCOUNT,
    PRODUCT_CATEGORIES.FIXED_DEPOSIT,
    PRODUCT_CATEGORIES.CURRENT_ACCOUNT,
    PRODUCT_CATEGORIES.BUSINESS_LOAN,
  ],
  insurance: [
    PRODUCT_CATEGORIES.CAR_INSURANCE,
    PRODUCT_CATEGORIES.HEALTH_INSURANCE,
    PRODUCT_CATEGORIES.TRAVEL_INSURANCE,
    PRODUCT_CATEGORIES.HOME_INSURANCE,
    PRODUCT_CATEGORIES.LIFE_INSURANCE,
    PRODUCT_CATEGORIES.PET_INSURANCE,
    PRODUCT_CATEGORIES.BUSINESS_INSURANCE,
  ],
  telecom: [
    PRODUCT_CATEGORIES.MOBILE_PLAN,
    PRODUCT_CATEGORIES.HOME_INTERNET,
    PRODUCT_CATEGORIES.TV_STREAMING,
  ],
  investments: [
    PRODUCT_CATEGORIES.INVESTMENT_ACCOUNT,
    PRODUCT_CATEGORIES.GOLD_SAVINGS,
  ],
  money_transfer: [
    PRODUCT_CATEGORIES.REMITTANCE,
    PRODUCT_CATEGORIES.CURRENCY_EXCHANGE,
  ],
  credit_health: [
    PRODUCT_CATEGORIES.CREDIT_SCORE,
    PRODUCT_CATEGORIES.DEBT_MANAGEMENT,
  ],
  business: [
    PRODUCT_CATEGORIES.BUSINESS_LOAN,
    PRODUCT_CATEGORIES.SME_LOAN,
    PRODUCT_CATEGORIES.INVOICE_FINANCING,
    PRODUCT_CATEGORIES.EQUIPMENT_FINANCING,
    PRODUCT_CATEGORIES.BUSINESS_ACCOUNT,
    PRODUCT_CATEGORIES.CORPORATE_CARD,
    PRODUCT_CATEGORIES.TRADE_FINANCE,
    PRODUCT_CATEGORIES.WORKING_CAPITAL,
    PRODUCT_CATEGORIES.POS_SOLUTIONS,
    PRODUCT_CATEGORIES.PAYMENT_GATEWAY,
  ],
} as const;
```

**Step 2: Add i18n translations for new categories**

In `packages/i18n/src/messages/en.json`, add to the `categories` object:

```json
"sme_loan": "SME Loans",
"invoice_financing": "Invoice Financing",
"equipment_financing": "Equipment Financing",
"business_account": "Business Accounts",
"corporate_card": "Corporate Cards",
"trade_finance": "Trade Finance",
"working_capital": "Working Capital",
"pos_solutions": "POS Solutions",
"payment_gateway": "Payment Gateway",
"internet_plan": "Internet Plans",
"travel_insurance": "Travel Insurance",
"life_insurance": "Life Insurance"
```

In `packages/i18n/src/messages/ar.json`, add Arabic equivalents:

```json
"sme_loan": "تمويل المنشآت الصغيرة والمتوسطة",
"invoice_financing": "تمويل الفواتير",
"equipment_financing": "تمويل المعدات",
"business_account": "حسابات الأعمال",
"corporate_card": "بطاقات الشركات",
"trade_finance": "تمويل التجارة",
"working_capital": "رأس المال العامل",
"pos_solutions": "حلول نقاط البيع",
"payment_gateway": "بوابة الدفع",
"internet_plan": "باقات الإنترنت",
"travel_insurance": "تأمين السفر",
"life_insurance": "تأمين الحياة"
```

**Step 3: Build shared package to verify**

Run: `cd /Users/salehaltoaimi/sight && pnpm --filter @sight/shared build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add packages/shared/src/constants/categories.ts packages/i18n/src/messages/en.json packages/i18n/src/messages/ar.json
git commit -m "feat: add SME product categories and i18n translations"
```

---

### Task 5: Build Mega Menu Navigation

**Files:**
- Create: `apps/web/src/components/mega-menu.tsx`
- Modify: `apps/web/src/components/navbar.tsx`

**Step 1: Create the mega menu data and component**

Create `apps/web/src/components/mega-menu.tsx`:

```tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Banknote, CreditCard, Home, Car, PiggyBank, Smartphone,
  Shield, Heart, Plane, HeartPulse,
  Building2, Receipt, Wrench, Landmark, CreditCard as CorpCard,
  ArrowLeftRight, Wallet, Store, Globe,
  ChevronDown,
} from "lucide-react";

const personalMenu = {
  banking: [
    { key: "personal_loan", icon: Banknote, desc: "Compare rates from 20+ banks" },
    { key: "credit_card", icon: CreditCard, desc: "Cashback, miles & rewards" },
    { key: "mortgage", icon: Home, desc: "Home finance & Islamic mortgages" },
    { key: "auto_loan", icon: Car, desc: "New & used car financing" },
  ],
  insurance: [
    { key: "car_insurance", icon: Shield, desc: "Comprehensive & third-party" },
    { key: "health_insurance", icon: Heart, desc: "Individual & family plans" },
    { key: "travel_insurance", icon: Plane, desc: "Single & multi-trip cover" },
    { key: "life_insurance", icon: HeartPulse, desc: "Term & whole life policies" },
  ],
  everyday: [
    { key: "savings_account", icon: PiggyBank, desc: "High-yield savings" },
    { key: "mobile_plan", icon: Smartphone, desc: "du, e& & Virgin plans" },
  ],
};

const businessMenu = {
  financing: [
    { key: "business_loan", icon: Building2, desc: "Term loans for businesses" },
    { key: "sme_loan", icon: Landmark, desc: "SME-specific finance" },
    { key: "invoice_financing", icon: Receipt, desc: "Unlock cash from receivables" },
    { key: "equipment_financing", icon: Wrench, desc: "Asset & equipment finance" },
  ],
  banking: [
    { key: "business_account", icon: Landmark, desc: "Current & savings accounts" },
    { key: "corporate_card", icon: CorpCard, desc: "Business credit & charge cards" },
    { key: "trade_finance", icon: ArrowLeftRight, desc: "LCs, guarantees & more" },
    { key: "working_capital", icon: Wallet, desc: "Short-term business funding" },
  ],
  payments: [
    { key: "pos_solutions", icon: Store, desc: "Point-of-sale terminals" },
    { key: "payment_gateway", icon: Globe, desc: "Online payment processing" },
  ],
};

function MenuColumn({ title, items }: { title: string; items: typeof personalMenu.banking }) {
  const t = useTranslations("categories");
  return (
    <div>
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{title}</p>
      <div className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.key}
            href={`/compare/${item.key}`}
            className="flex items-start gap-3 p-2 rounded-lg hover:bg-navy-light transition-colors group"
          >
            <item.icon className="w-5 h-5 text-navy mt-0.5 shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-medium text-slate-900 group-hover:text-navy">{t(item.key as any)}</p>
              <p className="text-xs text-slate-400">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function MegaMenuDropdown({
  label,
  menu,
  columnTitles,
}: {
  label: string;
  menu: Record<string, typeof personalMenu.banking>;
  columnTitles: Record<string, string>;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const handleEnter = () => {
    clearTimeout(timeout.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeout.current = setTimeout(() => setOpen(false), 200);
  };

  useEffect(() => () => clearTimeout(timeout.current), []);

  return (
    <div ref={ref} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="relative">
      <button
        className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-navy transition-colors py-2"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-slate-200 rounded-2xl shadow-lg p-6 z-50 min-w-[640px]">
          <div className="grid grid-cols-3 gap-8">
            {Object.entries(menu).map(([key, items]) => (
              <MenuColumn key={key} title={columnTitles[key] || key} items={items} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export { personalMenu, businessMenu };
```

**Step 2: Rewrite navbar.tsx**

Replace `apps/web/src/components/navbar.tsx` entirely:

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { MegaMenuDropdown, personalMenu, businessMenu } from "./mega-menu";

export function Navbar() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-sm border-b border-slate-200" : ""
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-5 md:px-10 flex items-center justify-between h-16">
        {/* Left: Logo */}
        <Link href="/" className="shrink-0">
          <Logo variant="dark" />
        </Link>

        {/* Center: Mega menus (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <MegaMenuDropdown
            label={t("nav.personal") as string}
            menu={personalMenu}
            columnTitles={{ banking: "Banking", insurance: "Insurance", everyday: "Everyday" }}
          />
          <MegaMenuDropdown
            label={t("nav.business") as string}
            menu={businessMenu}
            columnTitles={{ financing: "Financing", banking: "Banking", payments: "Payments" }}
          />
        </div>

        {/* Right: Language + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm text-slate-500 hover:text-navy font-medium">
            العربية
          </button>
          <Link
            href="/eligibility"
            className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-navy-dark transition-colors"
          >
            {t("eligibility.checkNow")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-5 py-4 space-y-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Personal</p>
          {Object.values(personalMenu).flat().map((item) => (
            <Link
              key={item.key}
              href={`/compare/${item.key}`}
              className="block text-sm text-slate-700 py-1"
              onClick={() => setMobileOpen(false)}
            >
              {item.key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </Link>
          ))}
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider pt-2">Business</p>
          {Object.values(businessMenu).flat().map((item) => (
            <Link
              key={item.key}
              href={`/compare/${item.key}`}
              className="block text-sm text-slate-700 py-1"
              onClick={() => setMobileOpen(false)}
            >
              {item.key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </Link>
          ))}
          <Link
            href="/eligibility"
            className="block bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-xl text-center"
          >
            Check Eligibility
          </Link>
        </div>
      )}
    </header>
  );
}
```

**Step 3: Add nav.personal and nav.business to i18n**

In `packages/i18n/src/messages/en.json`, add to `nav`:

```json
"personal": "Personal",
"business": "Business"
```

In `packages/i18n/src/messages/ar.json`:

```json
"personal": "شخصي",
"business": "أعمال"
```

**Step 4: Verify the nav renders**

Run dev server: `cd /Users/salehaltoaimi/sight && pnpm --filter @sight/web dev`
Visit http://localhost:3000 — mega menu should appear on hover.

**Step 5: Commit**

```bash
git add apps/web/src/components/mega-menu.tsx apps/web/src/components/navbar.tsx packages/i18n/src/messages/en.json packages/i18n/src/messages/ar.json
git commit -m "feat: build mega menu navigation with Personal and Business dropdowns"
```

---

### Task 6: Redesign Homepage

**Files:**
- Modify: `apps/web/src/app/[locale]/page.tsx`

**Step 1: Rewrite the homepage**

Replace `apps/web/src/app/[locale]/page.tsx` entirely:

```tsx
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Banknote, CreditCard, Home, Car, Shield, Heart,
  Building2, Landmark, Receipt, Store,
} from "lucide-react";

const featuredCategories = [
  { key: "personal_loan", icon: Banknote },
  { key: "credit_card", icon: CreditCard },
  { key: "mortgage", icon: Home },
  { key: "car_insurance", icon: Shield },
  { key: "business_loan", icon: Building2 },
  { key: "sme_loan", icon: Landmark },
  { key: "corporate_card", icon: CreditCard },
  { key: "pos_solutions", icon: Store },
];

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-24 pb-20 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Compare every financial
            <br />
            product in the UAE
          </h1>
          <p className="mt-5 text-lg text-slate-500 max-w-xl mx-auto">
            Loans, cards, insurance, business finance — real rates from real providers.
          </p>
          <div className="mt-8">
            <Link
              href="/compare/personal_loan"
              className="inline-block bg-navy text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-navy-dark transition-colors text-sm"
            >
              Start Comparing
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-slate-50/50">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            {t("home.popularCategories")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.key}
                href={`/compare/${cat.key}`}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-navy hover:shadow-sm transition-all group"
              >
                <cat.icon
                  className="w-8 h-8 text-navy mb-3"
                  strokeWidth={1.5}
                />
                <p className="font-semibold text-sm text-slate-900 group-hover:text-navy">
                  {t(`categories.${cat.key}`)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility CTA */}
      <section className="bg-white">
        <div className="max-w-2xl mx-auto px-5 md:px-10 py-20 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Find what you qualify for in 60 seconds
          </h2>
          <p className="text-slate-500 mb-8">
            Answer a few questions. We'll match you with pre-approved products.
          </p>
          <Link
            href="/eligibility"
            className="inline-block bg-navy text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-navy-dark transition-colors text-sm"
          >
            Check My Eligibility
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-8 text-center">
          <p className="text-sm text-slate-400">
            15+ providers · 200+ products · Real rates, updated weekly
          </p>
        </div>
      </section>
    </>
  );
}
```

**Step 2: Verify homepage renders**

Visit http://localhost:3000 — should see clean white hero, category grid, eligibility CTA, trust bar.

**Step 3: Commit**

```bash
git add apps/web/src/app/[locale]/page.tsx
git commit -m "feat: redesign homepage with minimal TradePay-inspired hero"
```

---

### Task 7: Redesign Footer

**Files:**
- Modify: `apps/web/src/components/footer.tsx`

**Step 1: Rewrite footer**

Replace `apps/web/src/components/footer.tsx`:

```tsx
import Link from "next/link";
import { Logo } from "./logo";

const footerLinks = {
  Personal: [
    { label: "Personal Loans", href: "/compare/personal_loan" },
    { label: "Credit Cards", href: "/compare/credit_card" },
    { label: "Mortgages", href: "/compare/mortgage" },
    { label: "Auto Loans", href: "/compare/auto_loan" },
    { label: "Savings Accounts", href: "/compare/savings_account" },
  ],
  Business: [
    { label: "Business Loans", href: "/compare/business_loan" },
    { label: "SME Loans", href: "/compare/sme_loan" },
    { label: "Corporate Cards", href: "/compare/corporate_card" },
    { label: "POS Solutions", href: "/compare/pos_solutions" },
  ],
  Insurance: [
    { label: "Car Insurance", href: "/compare/car_insurance" },
    { label: "Health Insurance", href: "/compare/health_insurance" },
    { label: "Travel Insurance", href: "/compare/travel_insurance" },
    { label: "Life Insurance", href: "/compare/life_insurance" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo variant="white" className="mb-4" />
            <p className="text-sm text-slate-400">
              Compare every financial product in the UAE.
            </p>
          </div>
          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">{title}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Sight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Verify footer renders**

Visit http://localhost:3000 — dark footer with logo and link columns.

**Step 3: Commit**

```bash
git add apps/web/src/components/footer.tsx
git commit -m "feat: redesign footer with navy/dark theme and link columns"
```

---

### Task 8: Redesign Product Card (List Layout)

**Files:**
- Modify: `apps/web/src/components/product-card.tsx`

**Step 1: Rewrite product card for list layout**

Replace `apps/web/src/components/product-card.tsx`:

```tsx
import Link from "next/link";

function formatRate(product: any): string | null {
  if (product.rateValue) return `${product.rateValue}% APR`;
  if (product.profitRate) return `${product.profitRate}% Profit Rate`;
  if (product.annualFee !== undefined && product.annualFee !== null) return `AED ${product.annualFee} / year`;
  if (product.priceMonthly) return `AED ${product.priceMonthly} / month`;
  if (product.premiumMin) return `From AED ${product.premiumMin}`;
  return null;
}

function getSpecs(product: any): { label: string; value: string }[] {
  const specs: { label: string; value: string }[] = [];
  if (product.minAmount && product.maxAmount) {
    specs.push({ label: "Amount", value: `AED ${Number(product.minAmount).toLocaleString()} – ${Number(product.maxAmount).toLocaleString()}` });
  }
  if (product.minTenureMonths && product.maxTenureMonths) {
    specs.push({ label: "Tenure", value: `${product.minTenureMonths} – ${product.maxTenureMonths} months` });
  }
  if (product.minSalary) {
    specs.push({ label: "Min Salary", value: `AED ${Number(product.minSalary).toLocaleString()}` });
  }
  if (product.processingFeePercent) {
    specs.push({ label: "Processing Fee", value: `${product.processingFeePercent}%` });
  }
  if (product.cashbackRate) {
    specs.push({ label: "Cashback", value: `${product.cashbackRate}%` });
  }
  if (product.dataGb) {
    specs.push({ label: "Data", value: product.dataGb === "unlimited" ? "Unlimited" : `${product.dataGb} GB` });
  }
  if (product.coverageAmount) {
    specs.push({ label: "Coverage", value: `AED ${Number(product.coverageAmount).toLocaleString()}` });
  }
  return specs.slice(0, 4);
}

export function ProductCard({ product, locale }: { product: any; locale: string }) {
  const rate = formatRate(product);
  const specs = getSpecs(product);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center gap-4 hover:border-slate-300 transition-colors">
      {/* Left: Provider + Name */}
      <div className="flex-1 min-w-0">
        <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
          {product.provider?.nameEn || "Provider"}
        </p>
        <h3 className="text-base font-semibold text-slate-900 mt-0.5 truncate">
          {locale === "ar" ? product.nameAr || product.nameEn : product.nameEn}
        </h3>
        {product.islamicCompliant && (
          <span className="inline-block mt-1.5 text-xs font-medium text-navy bg-navy-light px-2 py-0.5 rounded-full">
            Islamic
          </span>
        )}
      </div>

      {/* Center: Hero metric */}
      {rate && (
        <div className="md:text-center md:px-6 md:border-x md:border-slate-100">
          <p className="text-xl font-bold text-slate-900">{rate}</p>
        </div>
      )}

      {/* Specs */}
      {specs.length > 0 && (
        <div className="flex flex-wrap gap-x-5 gap-y-1 md:px-4">
          {specs.map((spec) => (
            <div key={spec.label}>
              <p className="text-xs text-slate-400">{spec.label}</p>
              <p className="text-sm font-medium text-slate-700">{spec.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Right: Actions */}
      <div className="flex items-center gap-2 shrink-0">
        <button className="text-sm font-medium text-navy border border-navy rounded-xl px-4 py-2 hover:bg-navy-light transition-colors">
          Compare
        </button>
        <button className="text-sm font-medium text-white bg-green rounded-xl px-4 py-2 hover:bg-emerald-700 transition-colors">
          Apply
        </button>
      </div>
    </div>
  );
}
```

**Step 2: Update category page to use list layout**

In `apps/web/src/app/[locale]/compare/[category]/page.tsx`, change the grid to a vertical list:

Replace the grid div:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```
with:
```tsx
<div className="flex flex-col gap-4">
```

Also update the breadcrumb to use navy styling and remove the filter pills section (we'll add proper filters later):

Full replacement of the page:

```tsx
import { fetchAPI, type ProductListResponse } from "@/lib/api";
import { ProductCard } from "@/components/product-card";
import { PRODUCT_CATEGORIES } from "@sight/shared";
import { getTranslations } from "next-intl/server";

export async function generateStaticParams() {
  return Object.values(PRODUCT_CATEGORIES).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  const t = await getTranslations({ locale, namespace: "categories" });
  const categoryName = t(category as any);

  return {
    title: `Compare ${categoryName} in UAE — Sight`,
    description: `Compare the best ${categoryName.toLowerCase()} from UAE banks and providers. Find the lowest rates and best deals.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  const t = await getTranslations({ locale });

  let products: any[] = [];
  let error = false;

  try {
    const response = await fetchAPI<ProductListResponse>(
      `/api/v1/products?category=${category}&limit=20`
    );
    products = response.data;
  } catch {
    error = true;
  }

  const categoryName = t(`categories.${category}` as any);

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-6">
        <a href="/" className="hover:text-navy">Home</a>
        <span className="mx-2">/</span>
        <span className="text-slate-900 font-medium">{categoryName}</span>
      </nav>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {t("common.compare")} {categoryName}
          </h1>
          <p className="text-slate-500 mt-1 text-sm">
            {products.length} {products.length === 1 ? "product" : "products"} available
          </p>
        </div>
      </div>

      {error ? (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
          <p className="text-slate-600 font-medium">
            Could not load products. Make sure the API server is running on port 3001.
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Run: <code className="bg-slate-100 px-2 py-1 rounded">pnpm --filter @sight/api dev</code>
          </p>
        </div>
      ) : products.length === 0 ? (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
          <p className="text-slate-400">{t("common.noResults")}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}
```

**Step 3: Verify category page renders**

Visit http://localhost:3000/compare/personal_loan — should see list-style product cards.

**Step 4: Commit**

```bash
git add apps/web/src/components/product-card.tsx apps/web/src/app/[locale]/compare/[category]/page.tsx
git commit -m "feat: redesign product cards with list layout and navy/green action buttons"
```

---

### Task 9: Extend Database Schema for Eligibility

**Files:**
- Modify: `services/api/src/db/schema/products.ts`

**Step 1: Add structured eligibility columns to products table**

The existing `eligibilityCriteria` jsonb column already exists. We need to ensure the data we seed includes proper eligibility criteria. No schema change needed — the jsonb column is flexible.

However, we should define the eligibility criteria structure clearly. In `packages/shared/src/types/product.ts`, verify `EligibilityCriteria` includes:

```typescript
export interface EligibilityCriteria {
  minSalary?: number;
  maxSalary?: number;
  minAge?: number;
  maxAge?: number;
  nationalities?: string[]; // ["uae", "gcc", "expat"] or ["any"]
  employmentTypes?: string[]; // ["salaried", "self_employed", "business_owner"]
  minEmploymentMonths?: number;
  existingBankRelationship?: boolean;
  minCreditScore?: number;
  minBusinessRevenue?: number; // for SME products
  minBusinessAge?: number; // months
  [key: string]: any; // extensible
}
```

**Step 2: Verify the type exists**

Read and verify `packages/shared/src/types/product.ts` has this interface. If not, add it.

**Step 3: Commit if changes made**

```bash
git add packages/shared/src/types/product.ts
git commit -m "feat: ensure EligibilityCriteria type supports full matching fields"
```

---

### Task 10: Build Eligibility API Endpoint

**Files:**
- Create: `services/api/src/routes/eligibility.ts`
- Modify: `services/api/src/app.ts`

**Step 1: Create eligibility matching route**

Create `services/api/src/routes/eligibility.ts`:

```typescript
import { FastifyPluginAsync } from "fastify";
import { db } from "../db";
import { products } from "../db/schema";
import { providers } from "../db/schema";
import { eq, and } from "drizzle-orm";

interface EligibilityRequest {
  type: "personal" | "business";
  category: string;
  salary?: number;
  nationality?: string;
  employmentType?: string;
  employmentMonths?: number;
  age?: number;
  existingBank?: string;
  businessRevenue?: number;
  businessAgeMonths?: number;
}

interface MatchResult {
  product: any;
  provider: any;
  status: "pre_approved" | "likely_eligible" | "not_eligible" | "apply";
  unmetCriteria: string[];
}

function matchProduct(product: any, answers: EligibilityRequest): MatchResult {
  const criteria = product.eligibilityCriteria as Record<string, any> | null;
  const unmet: string[] = [];

  // Products without eligibility criteria → "apply" status
  if (!criteria || Object.keys(criteria).length === 0) {
    return { product, provider: product.provider, status: "apply", unmetCriteria: [] };
  }

  if (criteria.minSalary && answers.salary && answers.salary < criteria.minSalary) {
    unmet.push(`Minimum salary AED ${criteria.minSalary.toLocaleString()} required`);
  }

  if (criteria.minAge && answers.age && answers.age < criteria.minAge) {
    unmet.push(`Minimum age ${criteria.minAge} required`);
  }

  if (criteria.maxAge && answers.age && answers.age > criteria.maxAge) {
    unmet.push(`Maximum age ${criteria.maxAge}`);
  }

  if (criteria.nationalities && criteria.nationalities.length > 0 && !criteria.nationalities.includes("any")) {
    if (answers.nationality && !criteria.nationalities.includes(answers.nationality)) {
      unmet.push(`Available for: ${criteria.nationalities.join(", ")}`);
    }
  }

  if (criteria.employmentTypes && criteria.employmentTypes.length > 0) {
    if (answers.employmentType && !criteria.employmentTypes.includes(answers.employmentType)) {
      unmet.push(`Available for: ${criteria.employmentTypes.join(", ")}`);
    }
  }

  if (criteria.minEmploymentMonths && answers.employmentMonths && answers.employmentMonths < criteria.minEmploymentMonths) {
    unmet.push(`Minimum ${criteria.minEmploymentMonths} months employment required`);
  }

  if (criteria.minBusinessRevenue && answers.businessRevenue && answers.businessRevenue < criteria.minBusinessRevenue) {
    unmet.push(`Minimum annual revenue AED ${criteria.minBusinessRevenue.toLocaleString()} required`);
  }

  if (criteria.minBusinessAge && answers.businessAgeMonths && answers.businessAgeMonths < criteria.minBusinessAge) {
    unmet.push(`Business must be at least ${criteria.minBusinessAge} months old`);
  }

  const status = unmet.length === 0 ? "pre_approved" : "not_eligible";

  return { product, provider: product.provider, status, unmetCriteria: unmet };
}

export const eligibilityRoutes: FastifyPluginAsync = async (app) => {
  app.post<{ Body: EligibilityRequest }>("/check", async (request, reply) => {
    const answers = request.body;

    const allProducts = await db
      .select({
        product: products,
        provider: providers,
      })
      .from(products)
      .innerJoin(providers, eq(products.providerId, providers.id))
      .where(
        and(
          eq(products.category, answers.category),
          eq(products.status, "active")
        )
      );

    const results: MatchResult[] = allProducts.map(({ product, provider }) => {
      const p = { ...product, provider };
      return matchProduct(p, answers);
    });

    // Sort: pre_approved first, then apply, then not_eligible
    const order = { pre_approved: 0, likely_eligible: 1, apply: 2, not_eligible: 3 };
    results.sort((a, b) => order[a.status] - order[b.status]);

    return { data: results, total: results.length };
  });
};
```

**Step 2: Register the route in app.ts**

In `services/api/src/app.ts`, add:

```typescript
import { eligibilityRoutes } from "./routes/eligibility";
```

And register it:

```typescript
app.register(eligibilityRoutes, { prefix: "/api/v1/eligibility" });
```

**Step 3: Verify API starts**

Run: `cd /Users/salehaltoaimi/sight && pnpm --filter @sight/api dev`
Expected: Server starts without errors on port 3001.

**Step 4: Commit**

```bash
git add services/api/src/routes/eligibility.ts services/api/src/app.ts
git commit -m "feat: add eligibility matching API endpoint"
```

---

### Task 11: Build Eligibility Chat UI

**Files:**
- Create: `apps/web/src/app/[locale]/eligibility/page.tsx`
- Create: `apps/web/src/components/eligibility-chat.tsx`

**Step 1: Create the chat component**

Create `apps/web/src/components/eligibility-chat.tsx`:

```tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, User, Bot } from "lucide-react";

interface Question {
  id: string;
  text: string;
  type: "choice" | "number" | "text";
  options?: { value: string; label: string }[];
  field: string;
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
      { value: "car_insurance", label: "Car Insurance" },
      { value: "health_insurance", label: "Health Insurance" },
    ],
  },
  {
    id: "salary",
    text: "What is your monthly salary in AED?",
    type: "number",
    field: "salary",
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
  },
  {
    id: "age",
    text: "How old are you?",
    type: "number",
    field: "age",
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
    text: "What is your annual business revenue in AED?",
    type: "number",
    field: "businessRevenue",
  },
  {
    id: "businessAge",
    text: "How many months has your business been operating?",
    type: "number",
    field: "businessAgeMonths",
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
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! I'll help you find products you qualify for. Are you looking for personal or business products?" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const questions = userType === "business" ? businessQuestions : personalQuestions;
  const currentQuestion = step === "questions" ? questions[questionIndex] : null;

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
    const newAnswers = { ...answers, [currentQuestion.field]: currentQuestion.type === "number" ? Number(value) : value };
    setAnswers(newAnswers);
    addMessage("user", displayText);

    const nextIndex = questionIndex + 1;
    if (nextIndex < questions.length) {
      setQuestionIndex(nextIndex);
      setTimeout(() => addMessage("bot", questions[nextIndex].text), 300);
    } else {
      setStep("loading");
      setTimeout(() => {
        addMessage("bot", "Checking your eligibility...");
        submitEligibility(newAnswers);
      }, 300);
    }
  }

  async function submitEligibility(finalAnswers: Record<string, any>) {
    const payload = { type: userType, ...finalAnswers };
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/api/v1/eligibility/check`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      // Store results in sessionStorage and navigate
      sessionStorage.setItem("eligibility_results", JSON.stringify(data));
      sessionStorage.setItem("eligibility_answers", JSON.stringify(payload));
      router.push("/eligibility/results");
    } catch {
      addMessage("bot", "Something went wrong. Please try again.");
      setStep("questions");
      setQuestionIndex(0);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Chat messages */}
      <div className="space-y-4 mb-6">
        {messages.map((msg, i) => (
          <div key={i} className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              msg.role === "bot" ? "bg-navy text-white" : "bg-slate-100 text-slate-600"
            }`}>
              {msg.role === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
            </div>
            <div className={`px-4 py-3 rounded-2xl text-sm max-w-md ${
              msg.role === "bot"
                ? "bg-slate-100 text-slate-900"
                : "bg-navy text-white"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      {step === "type" && (
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => selectType("personal")}
            className="bg-white border border-slate-200 rounded-xl px-6 py-3 text-sm font-medium text-slate-900 hover:border-navy transition-colors"
          >
            Personal
          </button>
          <button
            onClick={() => selectType("business")}
            className="bg-white border border-slate-200 rounded-xl px-6 py-3 text-sm font-medium text-slate-900 hover:border-navy transition-colors"
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
              className="bg-white border border-slate-200 rounded-xl px-5 py-2.5 text-sm font-medium text-slate-900 hover:border-navy transition-colors"
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
              answerQuestion(inputValue, inputValue);
              setInputValue("");
            }
          }}
          className="flex gap-2 max-w-sm mx-auto"
        >
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a number..."
            className="flex-1 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-navy"
            autoFocus
          />
          <button
            type="submit"
            className="bg-navy text-white rounded-xl p-2.5 hover:bg-navy-dark transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      )}

      {step === "loading" && (
        <div className="text-center text-sm text-slate-400">Analyzing products...</div>
      )}
    </div>
  );
}
```

**Step 2: Create the eligibility page**

Create `apps/web/src/app/[locale]/eligibility/page.tsx`:

```tsx
import { EligibilityChat } from "@/components/eligibility-chat";

export const metadata = {
  title: "Check Your Eligibility — Sight",
  description: "Find out which financial products you qualify for in under 60 seconds.",
};

export default function EligibilityPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-16">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl font-bold text-slate-900 tracking-tight">
          Check Your Eligibility
        </h1>
        <p className="mt-3 text-slate-500">
          Answer a few questions. We'll match you with products you qualify for.
        </p>
      </div>
      <EligibilityChat />
    </div>
  );
}
```

**Step 3: Verify page renders**

Visit http://localhost:3000/eligibility — should see chat UI.

**Step 4: Commit**

```bash
git add apps/web/src/components/eligibility-chat.tsx apps/web/src/app/[locale]/eligibility/page.tsx
git commit -m "feat: build eligibility checker chat UI with question flow"
```

---

### Task 12: Build Eligibility Results Page

**Files:**
- Create: `apps/web/src/app/[locale]/eligibility/results/page.tsx`
- Create: `apps/web/src/components/eligibility-results.tsx`

**Step 1: Create results client component**

Create `apps/web/src/components/eligibility-results.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, XCircle, ArrowRight, Info } from "lucide-react";

interface MatchResult {
  product: any;
  provider: any;
  status: "pre_approved" | "likely_eligible" | "not_eligible" | "apply";
  unmetCriteria: string[];
}

const statusConfig = {
  pre_approved: {
    label: "Pre-Approved",
    bgColor: "bg-green-light",
    textColor: "text-green",
    icon: CheckCircle,
    buttonBg: "bg-green hover:bg-emerald-700",
    buttonText: "Apply Now",
  },
  likely_eligible: {
    label: "Likely Eligible",
    bgColor: "bg-navy-light",
    textColor: "text-navy",
    icon: Info,
    buttonBg: "bg-navy hover:bg-navy-dark",
    buttonText: "Apply",
  },
  not_eligible: {
    label: "Not Eligible",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    icon: XCircle,
    buttonBg: "bg-slate-200 cursor-not-allowed",
    buttonText: "Not Eligible",
  },
  apply: {
    label: "Apply",
    bgColor: "bg-slate-50",
    textColor: "text-slate-600",
    icon: ArrowRight,
    buttonBg: "bg-navy hover:bg-navy-dark",
    buttonText: "Apply",
  },
};

export function EligibilityResults() {
  const router = useRouter();
  const [results, setResults] = useState<MatchResult[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const stored = sessionStorage.getItem("eligibility_results");
    if (!stored) {
      router.push("/eligibility");
      return;
    }
    const parsed = JSON.parse(stored);
    setResults(parsed.data || []);
  }, [router]);

  const filtered = filter === "all" ? results : results.filter((r) => r.status === filter);

  const counts = {
    all: results.length,
    pre_approved: results.filter((r) => r.status === "pre_approved").length,
    not_eligible: results.filter((r) => r.status === "not_eligible").length,
  };

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-2 mb-8">
        {[
          { key: "all", label: `All (${counts.all})` },
          { key: "pre_approved", label: `Pre-Approved (${counts.pre_approved})` },
          { key: "not_eligible", label: `Not Eligible (${counts.not_eligible})` },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              filter === tab.key
                ? "bg-navy text-white"
                : "bg-white border border-slate-200 text-slate-600 hover:border-navy"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="space-y-4">
        {filtered.map((result, i) => {
          const config = statusConfig[result.status];
          const product = result.product;
          return (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center gap-4"
            >
              {/* Provider + Product */}
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                  {result.provider?.nameEn || "Provider"}
                </p>
                <h3 className="text-base font-semibold text-slate-900 mt-0.5">
                  {product.nameEn}
                </h3>
                {product.islamicCompliant && (
                  <span className="inline-block mt-1 text-xs font-medium text-navy bg-navy-light px-2 py-0.5 rounded-full">
                    Islamic
                  </span>
                )}
              </div>

              {/* Rate */}
              <div className="md:text-center md:px-6">
                {product.rateValue && (
                  <p className="text-xl font-bold text-slate-900">{product.rateValue}% APR</p>
                )}
                {product.annualFee !== undefined && product.annualFee !== null && !product.rateValue && (
                  <p className="text-xl font-bold text-slate-900">AED {product.annualFee}/yr</p>
                )}
              </div>

              {/* Status badge */}
              <div className="flex items-center gap-3 shrink-0">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${config.bgColor} ${config.textColor}`}>
                  <config.icon className="w-3.5 h-3.5" />
                  {config.label}
                </span>
                <button
                  className={`text-sm font-medium text-white rounded-xl px-5 py-2.5 transition-colors ${config.buttonBg}`}
                  disabled={result.status === "not_eligible"}
                >
                  {config.buttonText}
                </button>
              </div>

              {/* Unmet criteria (for not_eligible) */}
              {result.unmetCriteria.length > 0 && (
                <div className="w-full md:col-span-full">
                  <ul className="text-xs text-red-500 mt-1 space-y-0.5">
                    {result.unmetCriteria.map((c, j) => (
                      <li key={j}>• {c}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400">No products match this filter.</p>
        </div>
      )}
    </div>
  );
}
```

**Step 2: Create the results page**

Create `apps/web/src/app/[locale]/eligibility/results/page.tsx`:

```tsx
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
```

**Step 3: Verify page renders**

Complete the eligibility flow at http://localhost:3000/eligibility → should redirect to results page.

**Step 4: Commit**

```bash
git add apps/web/src/components/eligibility-results.tsx apps/web/src/app/[locale]/eligibility/results/page.tsx
git commit -m "feat: build eligibility results page with pre-approved/not-eligible status"
```

---

### Task 13: Seed Real UAE Product Data — Top 5 Banks (Personal Loans)

**Files:**
- Create: `services/api/src/db/seed-real-data.ts`

**Step 1: Create comprehensive seed script with real UAE bank product data**

Create `services/api/src/db/seed-real-data.ts`. This is a large file — it contains real product data scraped from UAE bank public websites for the top 5 banks' personal loan products.

The seed script should:
1. Clear existing dummy data
2. Insert real providers (top 5 UAE banks)
3. Insert real personal loan products with actual rates, fees, and eligibility criteria
4. Be extensible for future categories

**Important:** Before writing this task, the executing agent must research real current rates from ENBD, FAB, ADCB, Mashreq, and DIB public websites using web fetch. Store the actual published rates, fees, min salary, and eligibility criteria.

The seed script pattern:

```typescript
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { createId } from "./utils";

async function seed() {
  const sql = neon(process.env.DATABASE_URL!);
  const db = drizzle(sql, { schema });

  // Delete existing data
  await db.delete(schema.products);
  await db.delete(schema.providers);

  // Insert providers with real data
  const providerData = [/* real provider objects */];

  // Insert products with real rates and eligibility
  const productData = [/* real product objects */];

  // ... insert logic
}

seed().then(() => console.log("Seeded")).catch(console.error);
```

Add script to `services/api/package.json`:
```json
"db:seed-real": "tsx src/db/seed-real-data.ts"
```

**Step 2: Run the seed**

```bash
cd /Users/salehaltoaimi/sight && pnpm --filter @sight/api db:seed-real
```

**Step 3: Verify via API**

```bash
curl http://localhost:3001/api/v1/products?category=personal_loan
```

Expected: Real products with actual rates from ENBD, FAB, ADCB, Mashreq, DIB.

**Step 4: Commit**

```bash
git add services/api/src/db/seed-real-data.ts services/api/package.json
git commit -m "feat: seed real UAE personal loan data from top 5 banks"
```

---

### Task 14: Seed Real Data — Credit Cards

**Files:**
- Modify: `services/api/src/db/seed-real-data.ts`

**Step 1: Research and add real credit card data**

The executing agent must web-fetch the top 5 banks' credit card pages and add real card products to the seed script. Include:
- Card name, annual fee, cashback/rewards rate, min salary, grace days
- Eligibility criteria (min salary, employment type, nationality)

**Step 2: Re-run seed**

```bash
cd /Users/salehaltoaimi/sight && pnpm --filter @sight/api db:seed-real
```

**Step 3: Commit**

```bash
git add services/api/src/db/seed-real-data.ts
git commit -m "feat: add real UAE credit card data to seed"
```

---

### Task 15: Seed Real Data — Mortgages & Auto Loans

Same pattern as Task 14 but for mortgage and auto loan products from the top 5 banks.

**Step 1: Research and add mortgage + auto loan data**
**Step 2: Re-run seed**
**Step 3: Commit**

```bash
git commit -m "feat: add real UAE mortgage and auto loan data to seed"
```

---

### Task 16: Seed Real Data — Insurance Products

Research and add car insurance, health insurance from Oman Insurance, AXA Gulf, Orient Insurance, Sukoon, Daman.

**Step 1: Research and add insurance data**
**Step 2: Re-run seed**
**Step 3: Commit**

```bash
git commit -m "feat: add real UAE insurance product data to seed"
```

---

### Task 17: Seed Real Data — Telecom Plans

Research and add du, e& (Etisalat), Virgin Mobile UAE mobile plans and internet packages.

**Step 1: Research and add telecom data**
**Step 2: Re-run seed**
**Step 3: Commit**

```bash
git commit -m "feat: add real UAE telecom plan data to seed"
```

---

### Task 18: Seed Real Data — SME/Business Products

Research and add business loans, SME loans, corporate cards, POS solutions from the top banks.

**Step 1: Research and add business product data**
**Step 2: Re-run seed**
**Step 3: Commit**

```bash
git commit -m "feat: add real UAE SME and business product data to seed"
```

---

### Task 19: Seed Remaining Providers (Banks 6-15)

Expand data with RAKBank, CBD, ADIB, Ajman Bank, UAB, NBF, Al Hilal, Sharjah Islamic Bank, Emirates Islamic, Wio Bank.

**Step 1: Research and add remaining bank products**
**Step 2: Re-run seed**
**Step 3: Commit**

```bash
git commit -m "feat: add remaining UAE bank providers and products"
```

---

### Task 20: End-to-End Verification

**Step 1: Run API server**

```bash
cd /Users/salehaltoaimi/sight && pnpm --filter @sight/api dev
```

**Step 2: Run web server**

```bash
cd /Users/salehaltoaimi/sight && pnpm --filter @sight/web dev
```

**Step 3: Verify all pages**

- http://localhost:3000 — Homepage with hero, categories, eligibility CTA
- http://localhost:3000/compare/personal_loan — Real product data in list cards
- http://localhost:3000/compare/credit_card — Credit cards
- http://localhost:3000/compare/business_loan — Business products
- http://localhost:3000/eligibility — Chat questionnaire works
- http://localhost:3000/eligibility/results — Results with pre-approved/not-eligible badges

**Step 4: Run existing tests**

```bash
cd /Users/salehaltoaimi/sight && pnpm test
```

Expected: All tests pass.

**Step 5: Final commit**

```bash
git commit -m "chore: end-to-end verification complete"
```
