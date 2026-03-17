import { sid } from "../_helpers";
import { providers } from "../_providers";

export const tradeFinance: any[] = [
  {
    id: sid("tf", 1),
    category: "trade_finance",
    nameEn: "FAB Trade Solutions",
    nameAr: "حلول التجارة من بنك أبوظبي الأول",
    descriptionEn: "Comprehensive trade finance solutions from FAB covering letters of credit, guarantees and documentary collections for international trade.",
    provider: providers.fab,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "Import and export letters of credit" },
      { en: "Bank guarantees and standby LCs" },
      { en: "Documentary collections (D/P and D/A)" },
      { en: "Trade finance advisory for complex transactions" },
      { en: "Digital trade platform for document submission" },
    ],
    fees: [
      { nameEn: "LC Issuance Fee", amount: 0.15, type: "percentage" },
      { nameEn: "LC Amendment Fee", amount: 250, type: "fixed" },
      { nameEn: "Bank Guarantee Fee", amount: 0.2, type: "percentage" },
      { nameEn: "Document Handling Fee", amount: 150, type: "fixed" },
    ],
  },
  {
    id: sid("tf", 2),
    category: "trade_finance",
    nameEn: "Emirates NBD Trade Finance",
    nameAr: "تمويل التجارة من بنك الإمارات دبي الوطني",
    descriptionEn: "Emirates NBD trade finance services including LCs, guarantees and supply chain financing for importers and exporters.",
    provider: providers.enbd,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "Sight and usance letters of credit" },
      { en: "Performance and bid bond guarantees" },
      { en: "Supply chain financing programs" },
      { en: "Multi-currency trade settlements" },
      { en: "Online trade portal with real-time tracking" },
    ],
    fees: [
      { nameEn: "LC Issuance Fee", amount: 0.125, type: "percentage" },
      { nameEn: "Guarantee Issuance Fee", amount: 0.2, type: "percentage" },
      { nameEn: "Collection Fee", amount: 0.1, type: "percentage" },
      { nameEn: "Courier Charges", amount: 100, type: "fixed" },
    ],
  },
  {
    id: sid("tf", 3),
    category: "trade_finance",
    nameEn: "Mashreq Trade Services",
    nameAr: "خدمات التجارة من المشرق",
    descriptionEn: "Mashreq's end-to-end trade services supporting regional and global commerce with letters of credit, guarantees and structured trade solutions.",
    provider: providers.mashreq,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "Import and export documentary credits" },
      { en: "Advance payment and performance guarantees" },
      { en: "Structured commodity trade finance" },
      { en: "Receivables purchase and forfaiting" },
      { en: "Award-winning digital trade platform" },
    ],
    fees: [
      { nameEn: "LC Issuance Fee", amount: 0.15, type: "percentage" },
      { nameEn: "Guarantee Fee (per quarter)", amount: 0.25, type: "percentage" },
      { nameEn: "Documentary Collection Fee", amount: 200, type: "fixed" },
      { nameEn: "SWIFT Charges", amount: 75, type: "fixed" },
    ],
  },
];
