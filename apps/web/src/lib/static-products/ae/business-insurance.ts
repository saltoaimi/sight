import { sid } from "../_helpers";
import { providers } from "../_providers";

export const businessInsurance: any[] = [
  {
    id: sid("bi", 1),
    category: "business_insurance",
    nameEn: "AXA Business Shield Insurance",
    nameAr: "تأمين درع الأعمال من أكسا",
    descriptionEn: "Comprehensive business insurance from AXA covering property, liability, and business interruption for SMEs in the UAE.",
    provider: providers.axa,
    islamicCompliant: false,
    imageUrl: null,
    premiumMin: "3000",
    coverageAmount: "1000000",
    features: [
      { en: "Property and contents coverage" },
      { en: "Public and product liability" },
      { en: "Business interruption cover" },
      { en: "Employee dishonesty protection" },
      { en: "Customizable add-ons for specific industries" },
    ],
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 50, type: "fixed" },
    ],
  },
  {
    id: sid("bi", 2),
    category: "business_insurance",
    nameEn: "Orient SME Insurance Package",
    nameAr: "حزمة تأمين المنشآت الصغيرة من أورينت",
    descriptionEn: "All-in-one SME insurance package from Orient covering property damage, third-party liability, and workers' compensation.",
    provider: providers.orient,
    islamicCompliant: false,
    imageUrl: null,
    premiumMin: "2500",
    coverageAmount: "750000",
    features: [
      { en: "Property damage and theft cover" },
      { en: "Third-party liability up to AED 750,000" },
      { en: "Workers' compensation included" },
      { en: "Money in transit coverage" },
    ],
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 40, type: "fixed" },
    ],
  },
  {
    id: sid("bi", 3),
    category: "business_insurance",
    nameEn: "GIG Gulf Commercial Insurance",
    nameAr: "التأمين التجاري من جي آي جي الخليج",
    descriptionEn: "GIG Gulf commercial insurance tailored for UAE businesses with flexible coverage and competitive premiums.",
    provider: providers.gig,
    islamicCompliant: false,
    imageUrl: null,
    premiumMin: "2000",
    coverageAmount: "500000",
    features: [
      { en: "Fire and allied perils coverage" },
      { en: "Professional indemnity option" },
      { en: "Cyber liability add-on available" },
      { en: "Flexible payment plans" },
    ],
    fees: [
      { nameEn: "Policy Issuance Fee", amount: 35, type: "fixed" },
    ],
  },
];
