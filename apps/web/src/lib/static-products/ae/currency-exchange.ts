import { sid } from "../_helpers";
import { providers } from "../_providers";

export const currencyExchange: any[] = [
  {
    id: sid("cx", 1),
    category: "currency_exchange",
    nameEn: "Al Ansari Currency Exchange",
    nameAr: "صرافة الأنصاري للعملات",
    descriptionEn: "Exchange currencies at competitive rates through Al Ansari Exchange — the UAE's largest exchange house with branches everywhere.",
    provider: providers.alansari,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "50+ currencies available" },
      { en: "200+ branches across the UAE" },
      { en: "Competitive exchange rates" },
      { en: "Walk-in and online ordering" },
      { en: "Cash and traveller's cheques" },
    ],
    fees: [
      { nameEn: "Exchange Commission", amount: 0, type: "fixed" },
      { nameEn: "Spread built into rate", amount: 0, type: "fixed" },
    ],
  },
  {
    id: sid("cx", 2),
    category: "currency_exchange",
    nameEn: "Wise Multi-Currency Account",
    nameAr: "حساب متعدد العملات من وايز",
    descriptionEn: "Hold and convert 40+ currencies at the real mid-market rate with Wise. No hidden markups.",
    provider: providers.wise,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "Mid-market exchange rate — no markup" },
      { en: "Hold 40+ currencies in one account" },
      { en: "Instant currency conversion" },
      { en: "Multi-currency debit card" },
      { en: "Transparent fees shown before conversion" },
    ],
    fees: [
      { nameEn: "Conversion Fee (typical)", amount: 0.45, type: "percentage" },
    ],
  },
  {
    id: sid("cx", 3),
    category: "currency_exchange",
    nameEn: "Revolut Currency Exchange",
    nameAr: "تبادل العملات من ريفولوت",
    descriptionEn: "Exchange currencies instantly at interbank rates with Revolut. Free exchanges up to a monthly limit on standard plans.",
    provider: providers.revolut,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "Interbank exchange rates" },
      { en: "Free exchanges up to AED 5,000/month (Standard)" },
      { en: "30+ currencies supported" },
      { en: "Instant in-app conversion" },
      { en: "Weekend rate markup of 1%" },
    ],
    fees: [
      { nameEn: "Exchange Fee (within limit)", amount: 0, type: "fixed" },
      { nameEn: "Exchange Fee (above limit)", amount: 0.5, type: "percentage" },
    ],
  },
];
