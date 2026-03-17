import { sid } from "../_helpers";
import { providers } from "../_providers";

export const homeInsurance: any[] = [
  {
    id: sid("ho", 1),
    category: "home_insurance",
    nameEn: "AXA Smart Home Insurance",
    nameAr: "تأمين المنزل الذكي من أكسا",
    descriptionEn: "Comprehensive home insurance from AXA covering building, contents, and personal liability.",
    provider: providers.axa,
    islamicCompliant: false,
    premiumMin: "800",
    coverageAmount: "1000000",
    imageUrl: null,
    fees: [],
    features: [
      { en: "Building and contents coverage" },
      { en: "Personal liability protection" },
      { en: "Domestic worker cover" },
      { en: "Alternative accommodation if home is uninhabitable" },
    ],
    eligibilityCriteria: {
      minAge: 18,
    },
  },
  {
    id: sid("ho", 2),
    category: "home_insurance",
    nameEn: "ADNIC Home Insurance",
    nameAr: "تأمين المنزل من أدنيك",
    descriptionEn: "ADNIC home insurance protecting your property and belongings against fire, theft, and natural disasters.",
    provider: providers.adnic,
    islamicCompliant: false,
    premiumMin: "600",
    coverageAmount: "750000",
    imageUrl: null,
    fees: [],
    features: [
      { en: "Fire, theft, and natural disaster coverage" },
      { en: "Tenant and landlord options" },
      { en: "Jewellery and valuables rider" },
      { en: "Affordable premiums" },
    ],
    eligibilityCriteria: {
      minAge: 18,
    },
  },
  {
    id: sid("ho", 3),
    category: "home_insurance",
    nameEn: "Sukoon Home Insurance",
    nameAr: "تأمين المنزل من سكون",
    descriptionEn: "Sukoon home insurance with flexible plans for owners and tenants in the UAE.",
    provider: providers.sukoon,
    islamicCompliant: false,
    premiumMin: "700",
    coverageAmount: "500000",
    imageUrl: null,
    fees: [],
    features: [
      { en: "Owner and tenant plans" },
      { en: "Contents and building coverage" },
      { en: "Water damage protection" },
      { en: "Third-party liability" },
    ],
    eligibilityCriteria: {
      minAge: 18,
    },
  },
];
