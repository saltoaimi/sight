import { sid } from "../_helpers";
import { providers } from "../_providers";

export const investmentAccounts: any[] = [
  {
    id: sid("ia", 1),
    category: "investment_account",
    nameEn: "ENBD Securities Trading Account",
    nameAr: "حساب تداول الأوراق المالية من بنك الإمارات دبي الوطني",
    descriptionEn: "Trade UAE, GCC, and international equities with Emirates NBD Securities brokerage account.",
    provider: providers.enbd,
    islamicCompliant: false,
    minAmount: "5000",
    imageUrl: null,
    fees: [
      { nameEn: "Account Opening Fee", amount: 0, type: "fixed" },
      { nameEn: "Brokerage Fee (UAE)", amount: 0.15, type: "percentage" },
      { nameEn: "Brokerage Fee (International)", amount: 0.25, type: "percentage" },
    ],
    features: [
      { en: "Trade on DFM, ADX, and Nasdaq Dubai" },
      { en: "Access to international markets" },
      { en: "Research reports and market insights" },
      { en: "Mobile trading app" },
    ],
    eligibilityCriteria: {
      minAge: 21,
      nationalities: ["All nationalities"],
    },
  },
  {
    id: sid("ia", 2),
    category: "investment_account",
    nameEn: "FAB Invest Account",
    nameAr: "حساب الاستثمار من بنك أبوظبي الأول",
    descriptionEn: "FAB investment account offering mutual funds, bonds, and structured products managed by wealth experts.",
    provider: providers.fab,
    islamicCompliant: false,
    minAmount: "10000",
    imageUrl: null,
    fees: [
      { nameEn: "Account Maintenance Fee", amount: 0, type: "fixed" },
      { nameEn: "Fund Management Fee", amount: 1.5, type: "percentage" },
    ],
    features: [
      { en: "Wide range of mutual funds and ETFs" },
      { en: "Bonds and fixed-income products" },
      { en: "Dedicated wealth advisor" },
      { en: "Online portfolio tracking" },
    ],
    eligibilityCriteria: {
      minAge: 21,
      nationalities: ["All nationalities"],
    },
  },
  {
    id: sid("ia", 3),
    category: "investment_account",
    nameEn: "ADCB Invest Account",
    nameAr: "حساب الاستثمار من بنك أبوظبي التجاري",
    descriptionEn: "ADCB investment account with access to mutual funds, equities, and structured deposits.",
    provider: providers.adcb,
    islamicCompliant: false,
    minAmount: "10000",
    imageUrl: null,
    fees: [
      { nameEn: "Account Fee", amount: 0, type: "fixed" },
      { nameEn: "Advisory Fee", amount: 1, type: "percentage" },
    ],
    features: [
      { en: "Diverse asset class exposure" },
      { en: "Robo-advisory option available" },
      { en: "Structured deposits with capital protection" },
      { en: "Regular investment plans" },
    ],
    eligibilityCriteria: {
      minAge: 21,
      nationalities: ["All nationalities"],
    },
  },
];
