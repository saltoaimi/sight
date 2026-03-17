import { sid } from "../_helpers";
import { providers } from "../_providers";

export const lifeInsurance: any[] = [
  {
    id: sid("li", 1),
    category: "life_insurance",
    nameEn: "AXA Term Life Insurance",
    nameAr: "تأمين على الحياة لأجل من أكسا",
    descriptionEn: "AXA term life insurance providing financial protection for your family with affordable premiums.",
    provider: providers.axa,
    islamicCompliant: false,
    premiumMin: "1500",
    coverageAmount: "1000000",
    imageUrl: null,
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 0, type: "fixed" },
    ],
    features: [
      { en: "Coverage up to AED 1 million" },
      { en: "Affordable premiums from AED 1,500/year" },
      { en: "Critical illness add-on available" },
      { en: "Worldwide coverage" },
    ],
    eligibilityCriteria: {
      minAge: 18,
    },
  },
  {
    id: sid("li", 2),
    category: "life_insurance",
    nameEn: "Sukoon Whole Life Takaful",
    nameAr: "تكافل حياة كاملة من سكون",
    descriptionEn: "Sharia-compliant whole life Takaful plan providing lifelong coverage and savings.",
    provider: providers.sukoon,
    islamicCompliant: true,
    premiumMin: "3000",
    coverageAmount: "2000000",
    imageUrl: null,
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 0, type: "fixed" },
    ],
    features: [
      { en: "Sharia-compliant Takaful structure" },
      { en: "Lifelong coverage" },
      { en: "Savings component with profit sharing" },
      { en: "Coverage up to AED 2 million" },
    ],
    eligibilityCriteria: {
      minAge: 18,
    },
  },
  {
    id: sid("li", 3),
    category: "life_insurance",
    nameEn: "Orient Term Life Plan",
    nameAr: "خطة تأمين على الحياة لأجل من أورينت",
    descriptionEn: "Orient term life insurance with competitive premiums and optional riders for critical illness.",
    provider: providers.orient,
    islamicCompliant: false,
    premiumMin: "1200",
    coverageAmount: "750000",
    imageUrl: null,
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 0, type: "fixed" },
    ],
    features: [
      { en: "Term coverage up to 30 years" },
      { en: "Affordable premiums" },
      { en: "Critical illness rider available" },
      { en: "Disability benefit option" },
    ],
    eligibilityCriteria: {
      minAge: 18,
    },
  },
];
