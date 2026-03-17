import { sid } from "../_helpers";
import { providers } from "../_providers";

export const goldSavings: any[] = [
  {
    id: sid("gs", 1),
    category: "gold_savings",
    nameEn: "Emirates NBD Gold Savings Plan",
    nameAr: "خطة ادخار الذهب من بنك الإمارات دبي الوطني",
    descriptionEn: "Accumulate gold in small amounts with Emirates NBD's Gold Savings Plan — buy, sell, and track gold digitally.",
    provider: providers.enbd,
    islamicCompliant: false,
    imageUrl: null,
    minAmount: "100",
    features: [
      { en: "Buy gold starting from AED 100" },
      { en: "Track gold holdings via ENBD app" },
      { en: "Sell gold anytime at live market rates" },
      { en: "Physical gold delivery option" },
      { en: "No storage fees" },
    ],
    fees: [
      { nameEn: "Account Fee", amount: 0, type: "fixed" },
      { nameEn: "Spread", amount: 1.5, type: "percentage" },
    ],
  },
  {
    id: sid("gs", 2),
    category: "gold_savings",
    nameEn: "Mashreq Gold Edge Account",
    nameAr: "حساب جولد إيدج من مشرق",
    descriptionEn: "Mashreq Gold Edge account lets you save in gold with competitive spreads and flexible withdrawal options.",
    provider: providers.mashreq,
    islamicCompliant: false,
    imageUrl: null,
    minAmount: "500",
    features: [
      { en: "Invest in gold from AED 500" },
      { en: "Competitive buy/sell spreads" },
      { en: "Auto-invest monthly standing order" },
      { en: "Convert gold to cash anytime" },
      { en: "Integrated with Mashreq Online banking" },
    ],
    fees: [
      { nameEn: "Account Fee", amount: 0, type: "fixed" },
      { nameEn: "Spread", amount: 1.0, type: "percentage" },
    ],
  },
  {
    id: sid("gs", 3),
    category: "gold_savings",
    nameEn: "ADIB Gold Savings Account",
    nameAr: "حساب ادخار الذهب من مصرف أبوظبي الإسلامي",
    descriptionEn: "Sharia-compliant gold savings account from ADIB — invest in gold the halal way with full transparency.",
    provider: providers.adib,
    islamicCompliant: true,
    imageUrl: null,
    minAmount: "250",
    features: [
      { en: "Sharia-compliant gold investment" },
      { en: "Start from AED 250" },
      { en: "Physical gold withdrawal option" },
      { en: "Live gold price tracking" },
      { en: "Backed by allocated physical gold" },
    ],
    fees: [
      { nameEn: "Account Fee", amount: 0, type: "fixed" },
      { nameEn: "Spread", amount: 1.25, type: "percentage" },
    ],
  },
];
