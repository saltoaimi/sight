import { sid } from "../_helpers";
import { providers } from "../_providers";

export const paymentGateways: any[] = [
  {
    id: sid("pg", 1),
    category: "payment_gateway",
    nameEn: "Telr Payment Gateway",
    nameAr: "بوابة الدفع من تلر",
    descriptionEn: "UAE-based payment gateway from Telr with multi-currency support, subscription billing and easy e-commerce integration.",
    provider: providers.telr,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "Accept 120+ currencies" },
      { en: "Recurring billing and subscription management" },
      { en: "Pre-built plugins for WooCommerce, Magento and Shopify" },
      { en: "Hosted and embedded checkout options" },
    ],
    fees: [
      { nameEn: "Monthly Fee", amount: 349, type: "fixed" },
      { nameEn: "Domestic Transaction Fee", amount: 2.49, type: "percentage" },
      { nameEn: "International Transaction Fee", amount: 3.49, type: "percentage" },
    ],
  },
  {
    id: sid("pg", 2),
    category: "payment_gateway",
    nameEn: "PayTabs Payment Gateway",
    nameAr: "بوابة الدفع من بيتابس",
    descriptionEn: "PayTabs payment gateway with fraud protection, tokenization and seamless checkout for MENA businesses.",
    provider: providers.paytabs,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "PCI DSS Level 1 certified" },
      { en: "Advanced fraud detection and prevention" },
      { en: "Card tokenization for repeat customers" },
      { en: "Supports Apple Pay, Samsung Pay and mada" },
    ],
    fees: [
      { nameEn: "Monthly Fee", amount: 299, type: "fixed" },
      { nameEn: "Transaction Fee", amount: 2.75, type: "percentage" },
      { nameEn: "Per Transaction Fixed Fee", amount: 1, type: "fixed" },
    ],
  },
  {
    id: sid("pg", 3),
    category: "payment_gateway",
    nameEn: "Stripe UAE",
    nameAr: "سترايب الإمارات",
    descriptionEn: "Stripe's global payment infrastructure now available in the UAE with developer-friendly APIs and transparent pricing.",
    provider: providers.stripe,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "Developer-friendly API and SDKs" },
      { en: "Supports 135+ currencies and local payment methods" },
      { en: "Built-in fraud prevention with Stripe Radar" },
      { en: "No setup fees or monthly charges" },
    ],
    fees: [
      { nameEn: "Domestic Card Transaction", amount: 2.9, type: "percentage" },
      { nameEn: "Per Transaction Fixed Fee", amount: 1, type: "fixed" },
      { nameEn: "International Card Surcharge", amount: 1.5, type: "percentage" },
    ],
  },
  {
    id: sid("pg", 4),
    category: "payment_gateway",
    nameEn: "Tap Payments Gateway",
    nameAr: "بوابة الدفع من تاب",
    descriptionEn: "MENA-focused payment gateway from Tap Payments with instant onboarding, local acquiring and comprehensive payment options.",
    provider: providers.tap,
    islamicCompliant: false,
    imageUrl: null,
    features: [
      { en: "Instant merchant onboarding" },
      { en: "Local acquiring for lower decline rates" },
      { en: "Supports cards, Apple Pay, KNET and benefit" },
      { en: "Customizable checkout experience" },
    ],
    fees: [
      { nameEn: "Transaction Fee (Debit)", amount: 1.99, type: "percentage" },
      { nameEn: "Transaction Fee (Credit)", amount: 2.75, type: "percentage" },
      { nameEn: "Per Transaction Fixed Fee", amount: 1, type: "fixed" },
    ],
  },
];
