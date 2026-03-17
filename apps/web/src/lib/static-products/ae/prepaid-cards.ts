import { sid } from "../_helpers";
import { providers } from "../_providers";

export const prepaidCards: any[] = [
  {
    id: sid("pc", 1),
    category: "prepaid_card",
    nameEn: "Emirates NBD GlobalCash Card",
    nameAr: "بطاقة جلوبال كاش من بنك الإمارات دبي الوطني",
    descriptionEn:
      "Reloadable prepaid Visa card by Emirates NBD. Use for online shopping, subscriptions, and everyday payments without a bank account.",
    provider: providers.enbd,
    islamicCompliant: false,
    imageUrl: null,
    annualFee: "25",
    features: [
      { en: "No bank account required" },
      { en: "Reload via cash, card, or bank transfer" },
      { en: "Use online and in-store worldwide" },
      { en: "Contactless payments (NFC)" },
      { en: "SMS transaction alerts" },
    ],
    fees: [
      { nameEn: "Annual Fee", amount: 25, type: "fixed" },
      { nameEn: "ATM Withdrawal Fee (domestic)", amount: 5, type: "fixed" },
      { nameEn: "ATM Withdrawal Fee (international)", amount: 15, type: "fixed" },
      { nameEn: "Reload Fee", amount: 0, type: "fixed" },
    ],
  },
  {
    id: sid("pc", 2),
    category: "prepaid_card",
    nameEn: "FAB Prepaid Card",
    nameAr: "بطاقة مسبقة الدفع من بنك أبوظبي الأول",
    descriptionEn:
      "FAB reloadable prepaid Mastercard for secure everyday spending. Ideal for budgeting, gifting, or supplementary card usage.",
    provider: providers.fab,
    islamicCompliant: false,
    imageUrl: null,
    annualFee: "30",
    features: [
      { en: "Mastercard acceptance worldwide" },
      { en: "Reload at any FAB branch or ATM" },
      { en: "Parental controls for dependents" },
      { en: "Set spending limits" },
      { en: "Manage via FAB Mobile app" },
    ],
    fees: [
      { nameEn: "Annual Fee", amount: 30, type: "fixed" },
      { nameEn: "ATM Withdrawal Fee (domestic)", amount: 5, type: "fixed" },
      { nameEn: "ATM Withdrawal Fee (international)", amount: 18, type: "fixed" },
      { nameEn: "FX Markup", amount: 2.75, type: "percentage" },
    ],
  },
  {
    id: sid("pc", 3),
    category: "prepaid_card",
    nameEn: "Pyypl Card",
    nameAr: "بطاقة بيبل",
    descriptionEn:
      "Digital prepaid Visa card that works instantly from your phone. No bank account or Emirates ID required — top up with cash or card.",
    provider: providers.pyypl,
    islamicCompliant: false,
    imageUrl: null,
    annualFee: "0",
    features: [
      { en: "Instant virtual card issuance" },
      { en: "No bank account or Emirates ID needed" },
      { en: "Top up with cash at retail outlets" },
      { en: "Apple Pay and Google Pay compatible" },
      { en: "Send money to other Pyypl users free" },
    ],
    fees: [
      { nameEn: "Virtual Card Fee", amount: 0, type: "fixed" },
      { nameEn: "Physical Card Fee", amount: 25, type: "fixed" },
      { nameEn: "ATM Withdrawal Fee", amount: 10, type: "fixed" },
      { nameEn: "Top-up Fee (cash)", amount: 2, type: "percentage" },
    ],
  },
  {
    id: sid("pc", 4),
    category: "prepaid_card",
    nameEn: "e& money Card",
    nameAr: "بطاقة إي أند موني",
    descriptionEn:
      "Prepaid digital wallet card by e& (Etisalat). Load via app, pay bills, shop online, and send money — all from your phone.",
    provider: providers.emoney,
    islamicCompliant: false,
    imageUrl: null,
    annualFee: "0",
    features: [
      { en: "Linked to e& money digital wallet" },
      { en: "Pay bills, top up mobile, and shop" },
      { en: "Salary advance feature (WPS)" },
      { en: "International money transfers" },
      { en: "Apple Pay support" },
    ],
    fees: [
      { nameEn: "Card Issuance Fee", amount: 20, type: "fixed" },
      { nameEn: "ATM Withdrawal Fee", amount: 5, type: "fixed" },
      { nameEn: "International Transfer Fee", amount: 10, type: "fixed" },
      { nameEn: "Monthly Maintenance Fee", amount: 0, type: "fixed" },
    ],
  },
];
