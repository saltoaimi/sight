import { sid } from "../_helpers";
import { providers } from "../_providers";

export const travelInsurance: any[] = [
  {
    id: sid("ti", 1),
    category: "travel_insurance",
    nameEn: "AXA SmartTraveller Insurance",
    nameAr: "تأمين السفر سمارت ترافيلر من أكسا",
    descriptionEn: "Comprehensive travel insurance covering medical emergencies, trip cancellation, and lost luggage.",
    provider: providers.axa,
    islamicCompliant: false,
    premiumMin: "500",
    coverageAmount: "500000",
    imageUrl: null,
    fees: [],
    features: [
      { en: "Medical emergency cover up to AED 500,000" },
      { en: "Trip cancellation and delay cover" },
      { en: "Lost and delayed luggage cover" },
      { en: "24/7 worldwide assistance" },
    ],
    eligibilityCriteria: {
      minAge: 0,
    },
  },
  {
    id: sid("ti", 2),
    category: "travel_insurance",
    nameEn: "Sukoon Travel Insurance",
    nameAr: "تأمين السفر من سكون",
    descriptionEn: "Sukoon travel insurance for individuals and families with single trip and annual multi-trip options.",
    provider: providers.sukoon,
    islamicCompliant: false,
    premiumMin: "400",
    coverageAmount: "250000",
    imageUrl: null,
    fees: [],
    features: [
      { en: "Single trip and annual multi-trip plans" },
      { en: "Medical evacuation coverage" },
      { en: "Personal liability cover" },
      { en: "Family plan discounts" },
    ],
    eligibilityCriteria: {
      minAge: 0,
    },
  },
  {
    id: sid("ti", 3),
    category: "travel_insurance",
    nameEn: "Orient Travel Insurance",
    nameAr: "تأمين السفر من أورينت",
    descriptionEn: "Orient Insurance travel plan with affordable premiums and worldwide coverage.",
    provider: providers.orient,
    islamicCompliant: false,
    premiumMin: "350",
    coverageAmount: "200000",
    imageUrl: null,
    fees: [],
    features: [
      { en: "Worldwide medical emergency cover" },
      { en: "Affordable premiums from AED 350" },
      { en: "Schengen visa compliant" },
      { en: "Online purchase and instant policy" },
    ],
    eligibilityCriteria: {
      minAge: 0,
    },
  },
];
