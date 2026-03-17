import { sid } from "../_helpers";
import { providers } from "../_providers";

export const petInsurance: any[] = [
  {
    id: sid("pi", 1),
    category: "pet_insurance",
    nameEn: "AXA Pet Insurance",
    nameAr: "تأمين الحيوانات الأليفة من أكسا",
    descriptionEn: "Comprehensive pet insurance from AXA covering vet bills, surgeries, and third-party liability for cats and dogs.",
    provider: providers.axa,
    islamicCompliant: false,
    imageUrl: null,
    premiumMin: "1200",
    premiumMax: "3500",
    coverageAmount: "20000",
    features: [
      { en: "Vet consultation and treatment cover" },
      { en: "Surgery and hospitalization cover" },
      { en: "Third-party liability up to AED 100,000" },
      { en: "Coverage for cats and dogs" },
      { en: "Annual wellness check-up included" },
    ],
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 30, type: "fixed" },
    ],
  },
  {
    id: sid("pi", 2),
    category: "pet_insurance",
    nameEn: "Sukoon Pet Care Insurance",
    nameAr: "تأمين رعاية الحيوانات الأليفة من سكون",
    descriptionEn: "Sukoon pet care plan covering accidents, illnesses, and emergency vet visits for your furry companions.",
    provider: providers.sukoon,
    islamicCompliant: false,
    imageUrl: null,
    premiumMin: "900",
    premiumMax: "2800",
    coverageAmount: "15000",
    features: [
      { en: "Accident and illness coverage" },
      { en: "Emergency vet visit cover" },
      { en: "Prescription medication included" },
      { en: "Boarding fees if owner is hospitalized" },
    ],
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 25, type: "fixed" },
    ],
  },
  {
    id: sid("pi", 3),
    category: "pet_insurance",
    nameEn: "Orient Pet Protection Plan",
    nameAr: "خطة حماية الحيوانات الأليفة من أورينت",
    descriptionEn: "Affordable pet protection from Orient Insurance with flexible coverage options and quick claims processing.",
    provider: providers.orient,
    islamicCompliant: false,
    imageUrl: null,
    premiumMin: "800",
    premiumMax: "2500",
    coverageAmount: "10000",
    features: [
      { en: "Flexible coverage tiers" },
      { en: "Accident and illness cover" },
      { en: "Fast claims settlement" },
      { en: "Covers dogs, cats, and exotic pets" },
    ],
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 20, type: "fixed" },
    ],
  },
];
