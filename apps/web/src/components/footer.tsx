import Link from "next/link";
import { Logo } from "./logo";

const footerLinks = {
  "Loans & Cards": [
    { label: "Personal Loans", href: "/compare/personal_loan" },
    { label: "Credit Cards", href: "/compare/credit_card" },
    { label: "Mortgages", href: "/compare/mortgage" },
    { label: "Auto Loans", href: "/compare/auto_loan" },
  ],
  Insurance: [
    { label: "Car Insurance", href: "/compare/car_insurance" },
    { label: "Health Insurance", href: "/compare/health_insurance" },
    { label: "Travel Insurance", href: "/compare/travel_insurance" },
    { label: "Life Insurance", href: "/compare/life_insurance" },
  ],
  "Savings & More": [
    { label: "Savings Accounts", href: "/compare/savings_account" },
    { label: "Fixed Deposits", href: "/compare/fixed_deposit" },
    { label: "Investments", href: "/compare/investment_account" },
    { label: "Mobile Plans", href: "/compare/mobile_plan" },
  ],
  Business: [
    { label: "Business Loans", href: "/compare/business_loan" },
    { label: "SME Loans", href: "/compare/sme_loan" },
    { label: "Corporate Cards", href: "/compare/corporate_card" },
    { label: "POS Solutions", href: "/compare/pos_solutions" },
  ],
  Learn: [
    { label: "What Is APR?", href: "/learn/what-is-apr" },
    { label: "Early Settlement", href: "/learn/early-settlement-uae" },
    { label: "Credit Card Types", href: "/learn/credit-card-types-uae" },
    { label: "All Guides", href: "/learn" },
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
    <footer className="bg-navy text-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo variant="white" className="mb-4" />
            <p className="text-xs text-slate-400 leading-relaxed">
              Compare every financial product in the UAE.
            </p>
          </div>
          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-3">{title}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-[10px] text-slate-500">&copy; {new Date().getFullYear()} Sight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
