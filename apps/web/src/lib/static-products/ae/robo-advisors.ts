import { sid } from "../_helpers";
import { providers } from "../_providers";

export const roboAdvisors: any[] = [
  {
    id: sid("ra", 1),
    category: "robo_advisor",
    nameEn: "Sarwa Invest",
    nameAr: "سروة للاستثمار",
    descriptionEn:
      "Automated investing platform with diversified ETF portfolios starting from $500. Choose conventional or Halal portfolios.",
    provider: providers.sarwa,
    islamicCompliant: false,
    imageUrl: null,
    annualFee: "0.85",
    minAmount: "500",
    features: [
      { en: "Diversified ETF portfolios" },
      { en: "Halal portfolio option available" },
      { en: "Automatic rebalancing" },
      { en: "DFSA regulated" },
      { en: "Goal-based investing" },
    ],
    fees: [
      { nameEn: "Management Fee", amount: 0.85, type: "percentage" },
      { nameEn: "Fund Expense Ratio (avg)", amount: 0.1, type: "percentage" },
    ],
  },
  {
    id: sid("ra", 2),
    category: "robo_advisor",
    nameEn: "StashAway UAE",
    nameAr: "ستاش أوي الإمارات",
    descriptionEn:
      "Smart portfolio management with economic-regime-based rebalancing. Risk-adjusted portfolios from conservative to aggressive.",
    provider: providers.stashaway,
    islamicCompliant: false,
    imageUrl: null,
    annualFee: "0.80",
    minAmount: "1000",
    features: [
      { en: "ERAA investment framework" },
      { en: "Risk-adjusted portfolios (6–36% risk index)" },
      { en: "No lock-in period" },
      { en: "DFSA regulated" },
      { en: "Flexible cash management portfolio" },
    ],
    fees: [
      { nameEn: "Management Fee", amount: 0.8, type: "percentage" },
      { nameEn: "Fund Expense Ratio (avg)", amount: 0.12, type: "percentage" },
    ],
  },
  {
    id: sid("ra", 3),
    category: "robo_advisor",
    nameEn: "Wealthface Invest",
    nameAr: "ويلث فيس للاستثمار",
    descriptionEn:
      "AI-powered robo-advisor offering globally diversified portfolios with smart tax-loss harvesting and rebalancing.",
    provider: providers.wealthface,
    islamicCompliant: false,
    imageUrl: null,
    annualFee: "0.50",
    minAmount: "500",
    features: [
      { en: "AI-driven portfolio optimization" },
      { en: "Tax-loss harvesting" },
      { en: "Fractional share investing" },
      { en: "SCA regulated" },
      { en: "Thematic investing options" },
    ],
    fees: [
      { nameEn: "Management Fee", amount: 0.5, type: "percentage" },
    ],
  },
  {
    id: sid("ra", 4),
    category: "robo_advisor",
    nameEn: "Wahed Invest",
    nameAr: "واحد للاستثمار",
    descriptionEn:
      "Shariah-compliant robo-advisory platform offering ethical and halal investment portfolios screened by a dedicated Shariah board.",
    provider: providers.wahed,
    islamicCompliant: true,
    imageUrl: null,
    annualFee: "0.79",
    minAmount: "400",
    features: [
      { en: "100% Shariah-compliant portfolios" },
      { en: "Independent Shariah Advisory Board" },
      { en: "Sukuk and halal equity ETFs" },
      { en: "DFSA regulated" },
      { en: "Gold-backed investment options" },
    ],
    fees: [
      { nameEn: "Management Fee", amount: 0.79, type: "percentage" },
      { nameEn: "Fund Expense Ratio (avg)", amount: 0.25, type: "percentage" },
    ],
  },
  {
    id: sid("ra", 5),
    category: "robo_advisor",
    nameEn: "Baraka Portfolios",
    nameAr: "بركة للمحافظ",
    descriptionEn:
      "Automated investment portfolios by Baraka with zero management fees and fractional US stock access.",
    provider: providers.baraka,
    islamicCompliant: false,
    imageUrl: null,
    annualFee: "0",
    minAmount: "100",
    features: [
      { en: "Zero management fees" },
      { en: "Fractional US stock investing" },
      { en: "Curated thematic portfolios" },
      { en: "SCA regulated" },
      { en: "In-app community insights" },
    ],
    fees: [
      { nameEn: "Management Fee", amount: 0, type: "percentage" },
      { nameEn: "FX Conversion Fee", amount: 0.5, type: "percentage" },
    ],
  },
];
