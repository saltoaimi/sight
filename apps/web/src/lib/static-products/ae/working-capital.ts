import { sid } from "../_helpers";
import { providers } from "../_providers";

export const workingCapital: any[] = [
  {
    id: sid("wc", 1),
    category: "working_capital",
    nameEn: "Emirates NBD Working Capital Finance",
    nameAr: "تمويل رأس المال العامل من بنك الإمارات دبي الوطني",
    descriptionEn: "Revolving working capital facility from Emirates NBD to manage day-to-day business cash flow needs.",
    provider: providers.enbd,
    islamicCompliant: false,
    imageUrl: null,
    rateValue: "5.250",
    minAmount: "100000",
    maxAmount: "10000000",
    features: [
      { en: "Revolving credit facility with annual review" },
      { en: "Draw down and repay as needed" },
      { en: "Interest charged only on utilized amount" },
      { en: "Linked to business current account" },
    ],
    fees: [
      { nameEn: "Facility Arrangement Fee", amount: 1, type: "percentage" },
      { nameEn: "Commitment Fee on Unused Portion", amount: 0.5, type: "percentage" },
    ],
  },
  {
    id: sid("wc", 2),
    category: "working_capital",
    nameEn: "RAKBANK Business Overdraft",
    nameAr: "تسهيلات السحب على المكشوف من بنك رأس الخيمة",
    descriptionEn: "Flexible overdraft facility from RAKBANK providing instant access to additional funds when your business needs them.",
    provider: providers.rakbank,
    islamicCompliant: false,
    imageUrl: null,
    rateValue: "6.000",
    minAmount: "25000",
    maxAmount: "3000000",
    features: [
      { en: "Instant access to funds up to approved limit" },
      { en: "Pay interest only on the amount used" },
      { en: "No fixed repayment schedule" },
      { en: "Renewable annually with minimal paperwork" },
    ],
    fees: [
      { nameEn: "Facility Setup Fee", amount: 1.5, type: "percentage" },
      { nameEn: "Annual Renewal Fee", amount: 0.5, type: "percentage" },
    ],
  },
  {
    id: sid("wc", 3),
    category: "working_capital",
    nameEn: "Mashreq Working Capital Facility",
    nameAr: "تسهيلات رأس المال العامل من المشرق",
    descriptionEn: "Mashreq's working capital solutions including overdrafts, revolving credit and short-term loans for business operations.",
    provider: providers.mashreq,
    islamicCompliant: false,
    imageUrl: null,
    rateValue: "5.500",
    minAmount: "50000",
    maxAmount: "7500000",
    features: [
      { en: "Overdraft and revolving credit options" },
      { en: "Short-term bridge financing available" },
      { en: "Digital cash management integration" },
      { en: "Flexible collateral structures" },
    ],
    fees: [
      { nameEn: "Arrangement Fee", amount: 1, type: "percentage" },
      { nameEn: "Minimum Usage Fee", amount: 0.25, type: "percentage" },
    ],
  },
];
