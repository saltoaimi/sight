import { sid } from "../_helpers";
import { providers } from "../_providers";

export const creditScore: any[] = [
  {
    id: sid("cs", 1),
    category: "credit_score",
    nameEn: "Al Etihad Credit Bureau Report",
    nameAr: "تقرير مكتب الاتحاد للمعلومات الائتمانية",
    descriptionEn: "Official UAE credit report from Al Etihad Credit Bureau (AECB) — view your credit score, payment history, and active liabilities.",
    provider: {
      nameEn: "Al Etihad Credit Bureau",
      logoUrl: "/logos/aecb.svg",
      website: "https://www.aecb.gov.ae",
    },
    islamicCompliant: false,
    imageUrl: null,
    priceMonthly: "0",
    features: [
      { en: "Official UAE credit score" },
      { en: "Full credit report with payment history" },
      { en: "Active liabilities and credit utilization" },
      { en: "One free report per year" },
      { en: "Available online via AECB website or app" },
    ],
    fees: [
      { nameEn: "Credit Report (annual free)", amount: 0, type: "fixed" },
      { nameEn: "Additional Report", amount: 84, type: "fixed" },
    ],
  },
  {
    id: sid("cs", 2),
    category: "credit_score",
    nameEn: "Emirates NBD CreditSight",
    nameAr: "كريدت سايت من بنك الإمارات دبي الوطني",
    descriptionEn: "Free credit score monitoring within the Emirates NBD app — track your score, get tips, and understand your credit health.",
    provider: providers.enbd,
    islamicCompliant: false,
    imageUrl: null,
    priceMonthly: "0",
    features: [
      { en: "Free credit score in ENBD app" },
      { en: "Monthly score updates" },
      { en: "Personalized improvement tips" },
      { en: "Score breakdown by category" },
      { en: "Available to all ENBD customers" },
    ],
    fees: [
      { nameEn: "Monthly Fee", amount: 0, type: "fixed" },
    ],
  },
  {
    id: sid("cs", 3),
    category: "credit_score",
    nameEn: "FAB SmartScore",
    nameAr: "سمارت سكور من بنك أبوظبي الأول",
    descriptionEn: "Access your credit score for free through FAB Mobile — monitor changes and get insights on improving your score.",
    provider: providers.fab,
    islamicCompliant: false,
    imageUrl: null,
    priceMonthly: "0",
    features: [
      { en: "Free credit score via FAB Mobile" },
      { en: "Real-time score monitoring" },
      { en: "Credit health insights and alerts" },
      { en: "Score comparison with UAE average" },
      { en: "Available to all FAB banking customers" },
    ],
    fees: [
      { nameEn: "Monthly Fee", amount: 0, type: "fixed" },
    ],
  },
];
