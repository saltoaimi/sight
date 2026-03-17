import { sid } from "../_helpers";
import { providers } from "../_providers";

export const realEstateCrowdfunding: any[] = [
  {
    id: sid("rec", 1),
    category: "real_estate_crowdfunding",
    nameEn: "SmartCrowd",
    nameAr: "سمارت كراود",
    descriptionEn:
      "DFSA-regulated fractional real estate platform. Own shares in Dubai rental properties starting from AED 500 and earn monthly rental income.",
    provider: providers.smartcrowd,
    islamicCompliant: false,
    imageUrl: null,
    minAmount: "500",
    features: [
      { en: "Fractional ownership from AED 500" },
      { en: "Monthly rental income distributions" },
      { en: "Properties in Dubai and UAE" },
      { en: "DFSA regulated" },
      { en: "Secondary market for reselling shares" },
    ],
    fees: [
      { nameEn: "Platform Fee", amount: 2, type: "percentage" },
      { nameEn: "Property Management Fee", amount: 0, type: "fixed" },
    ],
  },
  {
    id: sid("rec", 2),
    category: "real_estate_crowdfunding",
    nameEn: "Stake",
    nameAr: "ستيك",
    descriptionEn:
      "Invest in Dubai rental properties with as little as AED 500. Stake handles property management while you earn rental yields.",
    provider: providers.stakeProp,
    islamicCompliant: false,
    imageUrl: null,
    minAmount: "500",
    features: [
      { en: "Fractional real estate from AED 500" },
      { en: "Quarterly rental income payouts" },
      { en: "Fully managed properties in Dubai" },
      { en: "DFSA regulated" },
      { en: "Exit via secondary marketplace" },
    ],
    fees: [
      { nameEn: "Platform Fee", amount: 1.5, type: "percentage" },
      { nameEn: "Exit Fee", amount: 1, type: "percentage" },
    ],
  },
  {
    id: sid("rec", 3),
    category: "real_estate_crowdfunding",
    nameEn: "PRYPCO Blocks",
    nameAr: "بريبكو بلوكس",
    descriptionEn:
      "Blockchain-powered fractional property investment by PRYPCO. Buy tokenized shares in Dubai properties with full transparency.",
    provider: providers.prypco,
    islamicCompliant: false,
    imageUrl: null,
    minAmount: "1000",
    features: [
      { en: "Tokenized real estate ownership" },
      { en: "Blockchain-based transparency" },
      { en: "Properties in prime Dubai locations" },
      { en: "Rental yield distributions" },
      { en: "Digital secondary market" },
    ],
    fees: [
      { nameEn: "Platform Fee", amount: 2, type: "percentage" },
      { nameEn: "Token Transfer Fee", amount: 0.5, type: "percentage" },
    ],
  },
  {
    id: sid("rec", 4),
    category: "real_estate_crowdfunding",
    nameEn: "Baraka Real Estate",
    nameAr: "بركة للعقارات",
    descriptionEn:
      "Access US real estate investment trusts (REITs) through Baraka's commission-free trading platform. Diversified exposure to global property markets.",
    provider: providers.baraka,
    islamicCompliant: false,
    imageUrl: null,
    minAmount: "100",
    features: [
      { en: "Invest in US-listed REITs" },
      { en: "Zero-commission trading" },
      { en: "Fractional shares from $1" },
      { en: "SCA regulated" },
      { en: "Dividend income from real estate" },
    ],
    fees: [
      { nameEn: "Trading Commission", amount: 0, type: "fixed" },
      { nameEn: "FX Conversion Fee", amount: 0.5, type: "percentage" },
    ],
  },
];
