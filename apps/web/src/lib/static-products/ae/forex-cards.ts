import { sid } from "../_helpers";
import { providers } from "../_providers";

export const forexCards: any[] = [
  {
    id: sid("fc", 1),
    category: "forex_card",
    nameEn: "Wise Multi-Currency Card",
    nameAr: "بطاقة وايز متعددة العملات",
    descriptionEn:
      "Hold and convert 40+ currencies at the mid-market exchange rate. Spend abroad with no hidden markups and low transparent fees.",
    provider: providers.wise,
    islamicCompliant: false,
    imageUrl: null,
    annualFee: "0",
    features: [
      { en: "Hold 40+ currencies in one account" },
      { en: "Mid-market exchange rate — no markup" },
      { en: "Free ATM withdrawals up to AED 800/month" },
      { en: "Instant currency conversion" },
      { en: "Virtual and physical Visa debit card" },
    ],
    fees: [
      { nameEn: "Card Issuance Fee", amount: 35, type: "fixed" },
      { nameEn: "Exchange Markup", amount: 0, type: "percentage" },
      { nameEn: "ATM Fee (above AED 800)", amount: 1.75, type: "percentage" },
      { nameEn: "Conversion Fee (avg)", amount: 0.45, type: "percentage" },
    ],
  },
  {
    id: sid("fc", 2),
    category: "forex_card",
    nameEn: "Al Ansari TravelCard",
    nameAr: "بطاقة السفر من الأنصاري",
    descriptionEn:
      "Prepaid multi-currency travel card by Al Ansari Exchange. Load up to 8 currencies and spend abroad without conversion hassle.",
    provider: providers.alansari,
    islamicCompliant: false,
    imageUrl: null,
    annualFee: "0",
    features: [
      { en: "Load up to 8 currencies" },
      { en: "Accepted worldwide (Visa network)" },
      { en: "Lock in exchange rates at time of loading" },
      { en: "Reload at any Al Ansari branch" },
      { en: "SMS alerts for transactions" },
    ],
    fees: [
      { nameEn: "Card Issuance Fee", amount: 25, type: "fixed" },
      { nameEn: "Exchange Markup", amount: 1.5, type: "percentage" },
      { nameEn: "ATM Withdrawal Fee", amount: 15, type: "fixed" },
      { nameEn: "Reload Fee", amount: 0, type: "fixed" },
    ],
  },
  {
    id: sid("fc", 3),
    category: "forex_card",
    nameEn: "FAB Forex Prepaid Card",
    nameAr: "بطاقة فوركس من بنك أبوظبي الأول",
    descriptionEn:
      "Multi-currency prepaid card from FAB loaded with up to 6 major currencies. Ideal for frequent travelers and online international purchases.",
    provider: providers.fab,
    islamicCompliant: false,
    imageUrl: null,
    annualFee: "0",
    features: [
      { en: "Load USD, EUR, GBP, SAR, and more" },
      { en: "Competitive exchange rates" },
      { en: "Manage via FAB Mobile app" },
      { en: "Chip-and-PIN security" },
      { en: "Free replacement card" },
    ],
    fees: [
      { nameEn: "Card Issuance Fee", amount: 30, type: "fixed" },
      { nameEn: "Exchange Markup", amount: 1.75, type: "percentage" },
      { nameEn: "ATM Withdrawal Fee", amount: 18, type: "fixed" },
      { nameEn: "Inactivity Fee (after 6 months)", amount: 10, type: "fixed" },
    ],
  },
  {
    id: sid("fc", 4),
    category: "forex_card",
    nameEn: "Revolut UAE",
    nameAr: "ريفولوت الإمارات",
    descriptionEn:
      "Digital banking app with multi-currency card. Spend in 150+ currencies at interbank rates with budgeting and analytics built in.",
    provider: providers.revolut,
    islamicCompliant: false,
    imageUrl: null,
    annualFee: "0",
    features: [
      { en: "Spend in 150+ currencies" },
      { en: "Interbank exchange rate on weekdays" },
      { en: "Free ATM withdrawals up to AED 1,500/month" },
      { en: "Instant spending notifications" },
      { en: "Budgeting tools and analytics" },
    ],
    fees: [
      { nameEn: "Card Issuance Fee", amount: 0, type: "fixed" },
      { nameEn: "Exchange Markup (weekday)", amount: 0, type: "percentage" },
      { nameEn: "Weekend Markup", amount: 1, type: "percentage" },
      { nameEn: "ATM Fee (above limit)", amount: 2, type: "percentage" },
    ],
  },
];
