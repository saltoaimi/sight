import { sid } from "../_helpers";
import { providers } from "../_providers";

export const balanceTransfers: any[] = [
  {
    id: sid("bt", 1),
    category: "balance_transfer",
    nameEn: "FAB 0% Balance Transfer",
    nameAr: "تحويل الرصيد بدون فوائد من بنك أبوظبي الأول",
    descriptionEn:
      "Transfer your existing credit card balance to FAB and enjoy 0% interest for up to 12 months. Consolidate debt and save on charges.",
    provider: providers.fab,
    islamicCompliant: false,
    imageUrl: null,
    rateValue: "0",
    features: [
      { en: "0% interest for up to 12 months" },
      { en: "Transfer from any UAE bank credit card" },
      { en: "Processing fee starting at 1.99%" },
      { en: "Maximum transfer up to 90% of credit limit" },
      { en: "Easy application via FAB Mobile" },
    ],
    fees: [
      { nameEn: "Processing Fee", amount: 1.99, type: "percentage" },
      { nameEn: "Interest After Promo Period (APR)", amount: 39.99, type: "percentage" },
    ],
  },
  {
    id: sid("bt", 2),
    category: "balance_transfer",
    nameEn: "Emirates NBD Balance Transfer",
    nameAr: "تحويل الرصيد من بنك الإمارات دبي الوطني",
    descriptionEn:
      "Move your credit card debt to Emirates NBD with 0% interest for up to 6 months. Reduce your monthly payments and simplify repayment.",
    provider: providers.enbd,
    islamicCompliant: false,
    imageUrl: null,
    rateValue: "0",
    features: [
      { en: "0% interest for up to 6 months" },
      { en: "Transfer from any UAE credit card" },
      { en: "Processing fee from 2.49%" },
      { en: "Maximum transfer up to 85% of credit limit" },
      { en: "Instant approval for existing cardholders" },
    ],
    fees: [
      { nameEn: "Processing Fee", amount: 2.49, type: "percentage" },
      { nameEn: "Interest After Promo Period (APR)", amount: 39.99, type: "percentage" },
    ],
  },
  {
    id: sid("bt", 3),
    category: "balance_transfer",
    nameEn: "ADCB Balance Transfer",
    nameAr: "تحويل الرصيد من بنك أبوظبي التجاري",
    descriptionEn:
      "Consolidate credit card balances onto your ADCB card at 0% interest for up to 3 months. Available for both new and existing ADCB customers.",
    provider: providers.adcb,
    islamicCompliant: false,
    imageUrl: null,
    rateValue: "0",
    features: [
      { en: "0% interest for up to 3 months" },
      { en: "Transfer from any bank's credit card" },
      { en: "Processing fee from 2.99%" },
      { en: "Maximum transfer up to 80% of credit limit" },
      { en: "Apply online or via ADCB app" },
    ],
    fees: [
      { nameEn: "Processing Fee", amount: 2.99, type: "percentage" },
      { nameEn: "Interest After Promo Period (APR)", amount: 36, type: "percentage" },
    ],
  },
  {
    id: sid("bt", 4),
    category: "balance_transfer",
    nameEn: "Mashreq Balance Transfer",
    nameAr: "تحويل الرصيد من مشرق",
    descriptionEn:
      "Transfer balances from other banks to your Mashreq credit card with a 0% introductory rate for up to 6 months. Simple online process.",
    provider: providers.mashreq,
    islamicCompliant: false,
    imageUrl: null,
    rateValue: "0",
    features: [
      { en: "0% interest for up to 6 months" },
      { en: "Transfer from any UAE bank credit card" },
      { en: "Processing fee from 2.25%" },
      { en: "Maximum transfer up to 85% of credit limit" },
      { en: "Manage via Mashreq Online" },
    ],
    fees: [
      { nameEn: "Processing Fee", amount: 2.25, type: "percentage" },
      { nameEn: "Interest After Promo Period (APR)", amount: 38.99, type: "percentage" },
    ],
  },
];
