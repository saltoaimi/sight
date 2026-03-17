import { sid } from "../_helpers";
import { providers } from "../_providers";

export const bnpl: any[] = [
  {
    id: sid("bn", 1),
    category: "bnpl",
    nameEn: "Tabby — Pay in 4",
    descriptionEn: "Split any purchase into 4 interest-free payments with Tabby. No hidden fees.",
    provider: providers.tabby,
    islamicCompliant: true,
    minAmount: "1",
    maxAmount: "5000",
    imageUrl: null,
    fees: [
      { nameEn: "Late Fee", amount: 25, type: "fixed" },
    ],
    features: [
      { en: "Split into 4 interest-free payments" },
      { en: "No hidden fees if you pay on time" },
      { en: "Works at 10,000+ UAE stores" },
      { en: "Sharia-compliant — certified by scholars" },
      { en: "Instant approval" },
    ],
    eligibilityCriteria: {
      minAge: 18,
    },
  },
  {
    id: sid("bn", 2),
    category: "bnpl",
    nameEn: "Tamara — Pay Later",
    descriptionEn: "Shop now and pay later in 3 installments with zero interest using Tamara.",
    provider: providers.tamara,
    islamicCompliant: true,
    minAmount: "1",
    maxAmount: "4000",
    imageUrl: null,
    fees: [
      { nameEn: "Late Fee", amount: 25, type: "fixed" },
    ],
    features: [
      { en: "Pay in 3 installments — 0% interest" },
      { en: "Sharia-compliant" },
      { en: "Available at major UAE retailers" },
      { en: "Quick sign-up via app" },
    ],
    eligibilityCriteria: {
      minAge: 18,
    },
  },
  {
    id: sid("bn", 3),
    category: "bnpl",
    nameEn: "Postpay — Buy Now, Pay Later",
    descriptionEn: "Postpay lets you split your purchase into 3 interest-free payments at checkout.",
    provider: providers.postpay,
    islamicCompliant: false,
    minAmount: "1",
    maxAmount: "3000",
    imageUrl: null,
    fees: [
      { nameEn: "Late Fee", amount: 20, type: "fixed" },
    ],
    features: [
      { en: "3 interest-free installments" },
      { en: "Available at 1,000+ stores in UAE" },
      { en: "Seamless online checkout integration" },
      { en: "Instant credit decision" },
    ],
    eligibilityCriteria: {
      minAge: 18,
    },
  },
];
