import { sid } from "../_helpers";
import { providers } from "../_providers";

export const invoiceFinancing: any[] = [
  {
    id: sid("if", 1),
    category: "invoice_financing",
    nameEn: "Mashreq Invoice Discounting",
    nameAr: "خصم الفواتير من المشرق",
    descriptionEn: "Unlock cash tied up in unpaid invoices with Mashreq's invoice discounting facility for UAE businesses.",
    provider: providers.mashreq,
    islamicCompliant: false,
    imageUrl: null,
    rateValue: "3.500",
    minAmount: "50000",
    maxAmount: "10000000",
    features: [
      { en: "Up to 90% advance on invoice value" },
      { en: "Funds available within 24 hours of approval" },
      { en: "Recourse and non-recourse options" },
      { en: "Online portal for invoice submission" },
    ],
    fees: [
      { nameEn: "Discounting Fee", amount: 3.5, type: "percentage" },
      { nameEn: "Processing Fee", amount: 0.5, type: "percentage" },
    ],
  },
  {
    id: sid("if", 2),
    category: "invoice_financing",
    nameEn: "FAB Receivables Finance",
    nameAr: "تمويل المستحقات من بنك أبوظبي الأول",
    descriptionEn: "Receivables financing from FAB to improve cash flow by advancing funds against outstanding trade receivables.",
    provider: providers.fab,
    islamicCompliant: false,
    imageUrl: null,
    rateValue: "3.250",
    minAmount: "100000",
    maxAmount: "20000000",
    features: [
      { en: "Up to 85% advance against eligible receivables" },
      { en: "Flexible facility limits based on turnover" },
      { en: "Integration with major ERP systems" },
      { en: "Dedicated trade finance specialist" },
    ],
    fees: [
      { nameEn: "Facility Fee", amount: 0.25, type: "percentage" },
      { nameEn: "Discounting Margin", amount: 3.25, type: "percentage" },
    ],
  },
  {
    id: sid("if", 3),
    category: "invoice_financing",
    nameEn: "RAKBANK Invoice Finance",
    nameAr: "تمويل الفواتير من بنك رأس الخيمة",
    descriptionEn: "Simple invoice financing from RAKBANK designed for SMEs to bridge cash flow gaps quickly.",
    provider: providers.rakbank,
    islamicCompliant: false,
    imageUrl: null,
    rateValue: "4.000",
    minAmount: "25000",
    maxAmount: "5000000",
    features: [
      { en: "Up to 80% advance on invoice value" },
      { en: "Approval in as few as 5 business days" },
      { en: "No minimum turnover requirement" },
      { en: "Available for free zone and mainland businesses" },
    ],
    fees: [
      { nameEn: "Discounting Fee", amount: 4, type: "percentage" },
      { nameEn: "Setup Fee", amount: 500, type: "fixed" },
    ],
  },
];
