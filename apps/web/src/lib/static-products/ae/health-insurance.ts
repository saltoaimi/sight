import { sid } from "../_helpers";
import { providers } from "../_providers";

export const healthInsurance: any[] = [
  {
    id: sid("hi", 1),
    category: "health_insurance",
    nameEn: "Daman Enhanced Health Insurance",
    nameAr: "تأمين صحي محسّن من ضمان",
    descriptionEn: "Enhanced health insurance plan by Daman with extensive hospital network and comprehensive outpatient coverage.",
    provider: providers.daman,
    islamicCompliant: false,
    premiumMin: "3500",
    coverageAmount: "1000000",
    imageUrl: null,
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 0, type: "fixed" },
    ],
    features: [
      { en: "Inpatient and outpatient coverage" },
      { en: "Dental and optical included" },
      { en: "Maternity coverage available" },
      { en: "Largest hospital network in UAE" },
      { en: "DHA and HAAD compliant" },
    ],
    eligibilityCriteria: {
      minAge: 0,
    },
  },
  {
    id: sid("hi", 2),
    category: "health_insurance",
    nameEn: "AXA Gold Health Insurance",
    nameAr: "تأمين صحي ذهبي من أكسا",
    descriptionEn: "AXA Gold health plan with worldwide coverage, direct billing, and wellness benefits.",
    provider: providers.axa,
    islamicCompliant: false,
    premiumMin: "4500",
    coverageAmount: "2000000",
    imageUrl: null,
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 0, type: "fixed" },
    ],
    features: [
      { en: "Worldwide emergency coverage" },
      { en: "Direct billing at 1000+ facilities" },
      { en: "Annual health check-up included" },
      { en: "Mental health coverage" },
      { en: "Wellness and preventive care" },
    ],
    eligibilityCriteria: {
      minAge: 0,
    },
  },
  {
    id: sid("hi", 3),
    category: "health_insurance",
    nameEn: "Sukoon Family Health Insurance",
    nameAr: "تأمين صحي عائلي من سكون",
    descriptionEn: "Sukoon family health insurance with competitive premiums and comprehensive family coverage.",
    provider: providers.sukoon,
    islamicCompliant: false,
    premiumMin: "3000",
    coverageAmount: "1000000",
    imageUrl: null,
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 0, type: "fixed" },
    ],
    features: [
      { en: "Family coverage — spouse and children" },
      { en: "Outpatient and inpatient care" },
      { en: "Dental and optical coverage" },
      { en: "Maternity benefits included" },
    ],
    eligibilityCriteria: {
      minAge: 0,
    },
  },
  {
    id: sid("hi", 4),
    category: "health_insurance",
    nameEn: "Orient Comprehensive Health Insurance",
    nameAr: "تأمين صحي شامل من أورينت",
    descriptionEn: "Orient Insurance comprehensive health plan with affordable premiums and wide provider network.",
    provider: providers.orient,
    islamicCompliant: false,
    premiumMin: "2500",
    coverageAmount: "500000",
    imageUrl: null,
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 0, type: "fixed" },
    ],
    features: [
      { en: "Affordable premium options" },
      { en: "Wide network of hospitals and clinics" },
      { en: "Prescription medication coverage" },
      { en: "Emergency ambulance service" },
    ],
    eligibilityCriteria: {
      minAge: 0,
    },
  },
];
