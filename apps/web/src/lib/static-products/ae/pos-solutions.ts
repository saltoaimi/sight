import { sid } from "../_helpers";
import { providers } from "../_providers";

export const posSolutions: any[] = [
  {
    id: sid("pos", 1),
    category: "pos_solutions",
    nameEn: "Network International SmartPOS",
    nameAr: "جهاز الدفع الذكي من نتورك إنترناشونال",
    descriptionEn: "All-in-one Android-based smart POS terminal from Network International with integrated payment acceptance and business tools.",
    provider: providers.network,
    islamicCompliant: false,
    imageUrl: null,
    priceMonthly: "199",
    features: [
      { en: "Accept cards, NFC, QR codes and digital wallets" },
      { en: "Built-in receipt printer and barcode scanner" },
      { en: "Real-time transaction dashboard" },
      { en: "Next-day settlement to your bank account" },
    ],
    fees: [
      { nameEn: "Monthly Rental", amount: 199, type: "fixed" },
      { nameEn: "Visa/Mastercard Transaction Fee", amount: 1.75, type: "percentage" },
      { nameEn: "Setup Fee", amount: 500, type: "fixed" },
    ],
  },
  {
    id: sid("pos", 2),
    category: "pos_solutions",
    nameEn: "Telr POS Terminal",
    nameAr: "جهاز نقطة البيع من تلر",
    descriptionEn: "Compact POS terminal from Telr with omnichannel payment acceptance and e-commerce integration.",
    provider: providers.telr,
    islamicCompliant: false,
    imageUrl: null,
    priceMonthly: "149",
    features: [
      { en: "Unified in-store and online payments" },
      { en: "Accepts Visa, Mastercard and Apple Pay" },
      { en: "Integrated inventory management" },
      { en: "Multi-location support with central reporting" },
    ],
    fees: [
      { nameEn: "Monthly Fee", amount: 149, type: "fixed" },
      { nameEn: "Transaction Fee (Domestic)", amount: 2, type: "percentage" },
      { nameEn: "Transaction Fee (International)", amount: 2.75, type: "percentage" },
    ],
  },
  {
    id: sid("pos", 3),
    category: "pos_solutions",
    nameEn: "Emirates NBD PayMerchant",
    nameAr: "باي ميرشنت من بنك الإمارات دبي الوطني",
    descriptionEn: "Emirates NBD's merchant payment solution with countertop and portable POS options for businesses of all sizes.",
    provider: providers.enbd,
    islamicCompliant: false,
    imageUrl: null,
    priceMonthly: "175",
    features: [
      { en: "Countertop, portable and mobile POS options" },
      { en: "Same-day settlement for ENBD account holders" },
      { en: "DCC (Dynamic Currency Conversion) support" },
      { en: "24/7 merchant support helpline" },
    ],
    fees: [
      { nameEn: "Monthly Rental", amount: 175, type: "fixed" },
      { nameEn: "Debit Card Transaction Fee", amount: 1.5, type: "percentage" },
      { nameEn: "Credit Card Transaction Fee", amount: 2, type: "percentage" },
    ],
  },
];
