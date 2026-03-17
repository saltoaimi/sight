"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import type { Country } from "@sight/shared";
import { CATEGORY_AVAILABILITY } from "@sight/shared";
import { Logo } from "./logo";
import {
  MegaMenuDropdown,
  loansMenu,
  cardsMenu,
  insuranceMenu,
  bankingMenu,
  investingMenu,
  digitalFinanceMenu,
  telecomMenu,
  businessMenu,
  getMenusForCountry,
} from "./mega-menu";

export function Navbar({ country }: { country: Country }) {
  const t = useTranslations();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Extract locale from pathname (e.g., /ae/en/compare/... → en)
  const segments = pathname.split("/").filter(Boolean);
  const locale = segments[1] || "en";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = getMenusForCountry(country);

  const personalMobile = [
    ...filtered.loans.flatMap((s) => s.items),
    ...filtered.cards.flatMap((s) => s.items),
    ...filtered.insurance.flatMap((s) => s.items),
    ...filtered.banking.flatMap((s) => s.items),
    ...filtered.investing.flatMap((s) => s.items),
    ...filtered.digitalFinance.flatMap((s) => s.items),
    ...filtered.telecom.flatMap((s) => s.items),
  ];
  const businessMobile = filtered.business.flatMap((s) => s.items);

  // Country switcher: swap country code in current path
  const otherCountry = country === "ae" ? "sa" : "ae";
  const restPath = pathname.replace(/^\/(ae|sa)\/[a-z]{2}/, "");
  const switchCountryHref = `/${otherCountry}/${locale}${restPath}`;

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-sm border-b border-slate-100" : ""
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-5 md:px-10 flex items-center justify-between h-14">
        {/* Left: Logo */}
        <Link href={`/${country}/${locale}`} className="shrink-0">
          <Logo variant="dark" />
        </Link>

        {/* Center: Category mega menus (desktop) */}
        <div className="hidden xl:flex items-center gap-5">
          <MegaMenuDropdown label="Loans" sections={filtered.loans} country={country} />
          <MegaMenuDropdown label="Cards" sections={filtered.cards} country={country} />
          <MegaMenuDropdown label="Insurance" sections={filtered.insurance} country={country} />
          <MegaMenuDropdown label="Banking" sections={filtered.banking} country={country} />
          <MegaMenuDropdown label="Investing" sections={filtered.investing} country={country} />
          <MegaMenuDropdown label="Digital Finance" sections={filtered.digitalFinance} country={country} />
          <MegaMenuDropdown label="Telecom" sections={filtered.telecom} country={country} />
          <MegaMenuDropdown label="Business" sections={filtered.business} country={country} />
        </div>

        {/* Right: Learn + Country + Language + Auth + CTA */}
        <div className="hidden xl:flex items-center gap-2">
          <Link
            href={`/${country}/${locale}/learn`}
            className="text-[13px] font-medium text-slate-600 hover:text-navy px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-all"
          >
            Learn
          </Link>

          {/* Country toggle */}
          <Link
            href={switchCountryHref}
            className="flex items-center gap-1.5 text-[13px] text-slate-500 hover:text-navy px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-all"
          >
            <span>{country === "ae" ? "\uD83C\uDDF8\uD83C\uDDE6" : "\uD83C\uDDE6\uD83C\uDDEA"}</span>
            <span className="font-medium">{country === "ae" ? "KSA" : "UAE"}</span>
          </Link>

          {/* Language toggle */}
          <button className="flex items-center gap-1.5 text-[13px] text-slate-500 hover:text-navy px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-all">
            <Globe className="w-3.5 h-3.5" />
            <span className="font-medium">AR</span>
          </button>

          {/* Divider */}
          <div className="w-px h-4 bg-slate-200 mx-1" />

          {/* Sign In */}
          <Link
            href={`/${country}/${locale}/signup`}
            className="text-xs font-semibold text-navy border border-navy/20 px-4 py-2 rounded-lg hover:bg-navy hover:text-white hover:-translate-y-px transition-all duration-200"
          >
            Sign In
          </Link>

          {/* CTA */}
          <Link
            href={`/${country}/${locale}/eligibility`}
            className="bg-navy text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-navy-dark hover:shadow-lg hover:-translate-y-px transition-all duration-200"
          >
            Check Eligibility
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden p-2 text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-slate-100 bg-white px-5 py-4 space-y-3 max-h-[70vh] overflow-y-auto">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Personal</p>
          {personalMobile.map((item) => (
            <Link
              key={item.key}
              href={`/${country}/${locale}/compare/${item.key}`}
              className="block text-sm text-slate-700 py-1"
              onClick={() => setMobileOpen(false)}
            >
              {item.key.replace(/_/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())}
            </Link>
          ))}
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider pt-2">Business</p>
          {businessMobile.map((item) => (
            <Link
              key={item.key}
              href={`/${country}/${locale}/compare/${item.key}`}
              className="block text-sm text-slate-700 py-1"
              onClick={() => setMobileOpen(false)}
            >
              {item.key.replace(/_/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())}
            </Link>
          ))}

          {/* Mobile bottom actions */}
          <div className="pt-4 mt-2 border-t border-slate-100 space-y-2.5">
            {/* Country toggle */}
            <Link
              href={switchCountryHref}
              className="flex items-center gap-2 text-sm text-slate-500 py-1"
              onClick={() => setMobileOpen(false)}
            >
              <span>{country === "ae" ? "\uD83C\uDDF8\uD83C\uDDE6" : "\uD83C\uDDE6\uD83C\uDDEA"}</span>
              {country === "ae" ? "Switch to KSA" : "Switch to UAE"}
            </Link>

            {/* Language toggle */}
            <button className="flex items-center gap-2 text-sm text-slate-500 py-1">
              <Globe className="w-4 h-4" />
              العربية
            </button>

            <div className="flex gap-2">
              <Link
                href={`/${country}/${locale}/signup`}
                className="flex-1 text-center border border-navy/20 text-navy text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-navy hover:text-white transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href={`/${country}/${locale}/eligibility`}
                className="flex-1 block bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-xl text-center"
                onClick={() => setMobileOpen(false)}
              >
                Check Eligibility
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
