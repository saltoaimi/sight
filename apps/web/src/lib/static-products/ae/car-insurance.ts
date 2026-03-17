import { sid } from "../_helpers";
import { providers } from "../_providers";

export const carInsurance: any[] = [
  {
    id: sid("ci", 1),
    category: "car_insurance",
    nameEn: "Sukoon Comprehensive Motor Insurance",
    nameAr: "تأمين سيارات شامل من سكون",
    descriptionEn: "Comprehensive car insurance covering own damage, third-party liability, and personal accident.",
    provider: providers.sukoon,
    islamicCompliant: false,
    premiumMin: "1200",
    coverageAmount: "500000",
    imageUrl: null,
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 30, type: "fixed" },
    ],
    features: [
      { en: "Comprehensive own damage cover" },
      { en: "Third-party liability up to AED 500,000" },
      { en: "Personal accident cover for driver and passengers" },
      { en: "24/7 roadside assistance" },
      { en: "Agency and non-agency repair options" },
    ],
    eligibilityCriteria: {
      minAge: 18,
    },
  },
  {
    id: sid("ci", 2),
    category: "car_insurance",
    nameEn: "Orient Comprehensive Motor Insurance",
    nameAr: "تأمين سيارات شامل من أورينت",
    descriptionEn: "Orient Insurance comprehensive motor cover with competitive premiums and fast claims settlement.",
    provider: providers.orient,
    islamicCompliant: false,
    premiumMin: "1000",
    coverageAmount: "500000",
    imageUrl: null,
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 35, type: "fixed" },
    ],
    features: [
      { en: "Comprehensive and third-party options" },
      { en: "Fast claims processing" },
      { en: "Windshield cover included" },
      { en: "Oman extension available" },
    ],
    eligibilityCriteria: {
      minAge: 18,
    },
  },
  {
    id: sid("ci", 3),
    category: "car_insurance",
    nameEn: "AXA SmartDrive Motor Insurance",
    nameAr: "تأمين سيارات سمارت درايف من أكسا",
    descriptionEn: "AXA SmartDrive comprehensive motor insurance with flexible add-ons and dedicated claims support.",
    provider: providers.axa,
    islamicCompliant: false,
    premiumMin: "1100",
    coverageAmount: "500000",
    imageUrl: null,
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 30, type: "fixed" },
    ],
    features: [
      { en: "Flexible add-on covers" },
      { en: "Dedicated claims manager" },
      { en: "Replacement car during repairs" },
      { en: "Personal belongings cover" },
    ],
    eligibilityCriteria: {
      minAge: 18,
    },
  },
  {
    id: sid("ci", 4),
    category: "car_insurance",
    nameEn: "ADNIC Comprehensive Motor Insurance",
    nameAr: "تأمين سيارات شامل من أدنيك",
    descriptionEn: "Abu Dhabi National Insurance Company comprehensive auto cover with wide garage network.",
    provider: providers.adnic,
    islamicCompliant: false,
    premiumMin: "1050",
    coverageAmount: "500000",
    imageUrl: null,
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 25, type: "fixed" },
    ],
    features: [
      { en: "Wide network of approved garages" },
      { en: "Natural calamity coverage" },
      { en: "Off-road coverage optional add-on" },
      { en: "Quick online quotation" },
    ],
    eligibilityCriteria: {
      minAge: 18,
    },
  },
];
