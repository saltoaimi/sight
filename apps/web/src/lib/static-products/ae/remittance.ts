import { sid } from "../_helpers";
import { providers } from "../_providers";

export const remittance: any[] = [
  {
    id: sid("rm", 1),
    category: "remittance",
    nameEn: "Al Ansari Exchange Remittance",
    nameAr: "تحويلات الأنصاري للصرافة",
    descriptionEn: "Send money worldwide through Al Ansari Exchange with competitive rates and a vast branch network across the UAE.",
    provider: providers.alansari,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "Send to 200+ countries" },
      { en: "Walk-in branches across all emirates" },
      { en: "Online and app-based transfers" },
      { en: "Same-day delivery to select corridors" },
      { en: "Competitive exchange rates" },
    ],
    fees: [
      { nameEn: "Transfer Fee (India, Philippines)", amount: 10, type: "fixed" },
      { nameEn: "Transfer Fee (Other countries)", amount: 25, type: "fixed" },
    ],
  },
  {
    id: sid("rm", 2),
    category: "remittance",
    nameEn: "Wise International Transfer",
    nameAr: "تحويل دولي من وايز",
    descriptionEn: "Send money abroad at the real mid-market exchange rate with Wise. Low transparent fees and fast delivery.",
    provider: providers.wise,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "Real mid-market exchange rate" },
      { en: "Transparent fee shown upfront" },
      { en: "Delivery in minutes to many countries" },
      { en: "Send from AED via bank transfer or card" },
      { en: "Track transfer in real time" },
    ],
    fees: [
      { nameEn: "Transfer Fee (typical)", amount: 15, type: "fixed" },
      { nameEn: "Conversion Fee", amount: 0.45, type: "percentage" },
    ],
  },
  {
    id: sid("rm", 3),
    category: "remittance",
    nameEn: "Emirates NBD Direct Remit",
    nameAr: "تحويلات مباشرة من بنك الإمارات دبي الوطني",
    descriptionEn: "Instant online remittance from your ENBD account to beneficiaries in India, Pakistan, Philippines, and more.",
    provider: providers.enbd,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "Instant transfers to India and Pakistan" },
      { en: "No additional charges for salary account holders" },
      { en: "Available 24/7 via ENBD app" },
      { en: "Auto-repeat transfer scheduling" },
      { en: "Covers 20+ destination countries" },
    ],
    fees: [
      { nameEn: "Transfer Fee (salary account)", amount: 0, type: "fixed" },
      { nameEn: "Transfer Fee (non-salary)", amount: 15, type: "fixed" },
    ],
  },
  {
    id: sid("rm", 4),
    category: "remittance",
    nameEn: "FAB Global Transfer",
    nameAr: "تحويل عالمي من بنك أبوظبي الأول",
    descriptionEn: "Send money globally with FAB Global Transfer — competitive FX rates and seamless integration with your FAB account.",
    provider: providers.fab,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "Transfers to 50+ countries" },
      { en: "Competitive FX rates for FAB customers" },
      { en: "Initiate via FAB Mobile or online banking" },
      { en: "Scheduled and recurring transfers" },
      { en: "Beneficiary saved for repeat transfers" },
    ],
    fees: [
      { nameEn: "Transfer Fee (standard)", amount: 20, type: "fixed" },
      { nameEn: "Transfer Fee (salary account)", amount: 0, type: "fixed" },
    ],
  },
];
