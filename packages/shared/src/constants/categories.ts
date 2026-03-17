export const PRODUCT_CATEGORIES = {
  // Banking & Lending
  PERSONAL_LOAN: "personal_loan",
  AUTO_LOAN: "auto_loan",
  MORTGAGE: "mortgage",
  CREDIT_CARD: "credit_card",
  BUSINESS_LOAN: "business_loan",
  SAVINGS_ACCOUNT: "savings_account",
  FIXED_DEPOSIT: "fixed_deposit",
  CURRENT_ACCOUNT: "current_account",
  // Insurance
  CAR_INSURANCE: "car_insurance",
  HEALTH_INSURANCE: "health_insurance",
  TRAVEL_INSURANCE: "travel_insurance",
  HOME_INSURANCE: "home_insurance",
  LIFE_INSURANCE: "life_insurance",
  PET_INSURANCE: "pet_insurance",
  BUSINESS_INSURANCE: "business_insurance",
  // Telecom
  MOBILE_PLAN: "mobile_plan",
  HOME_INTERNET: "home_internet",
  TV_STREAMING: "tv_streaming",
  // Investments
  INVESTMENT_ACCOUNT: "investment_account",
  GOLD_SAVINGS: "gold_savings",
  // Money Transfer
  REMITTANCE: "remittance",
  CURRENCY_EXCHANGE: "currency_exchange",
  // Buy Now Pay Later
  BNPL: "bnpl",
  // Credit & Financial Health
  CREDIT_SCORE: "credit_score",
  DEBT_MANAGEMENT: "debt_management",
  // SME / Business (NEW)
  SME_LOAN: "sme_loan",
  INVOICE_FINANCING: "invoice_financing",
  EQUIPMENT_FINANCING: "equipment_financing",
  BUSINESS_ACCOUNT: "business_account",
  CORPORATE_CARD: "corporate_card",
  TRADE_FINANCE: "trade_finance",
  WORKING_CAPITAL: "working_capital",
  POS_SOLUTIONS: "pos_solutions",
  PAYMENT_GATEWAY: "payment_gateway",
  // Investing & Trading
  ROBO_ADVISOR: "robo_advisor",
  STOCK_TRADING: "stock_trading",
  CRYPTO_EXCHANGE: "crypto_exchange",
  GOLD_TRADING: "gold_trading",
  REAL_ESTATE_CROWDFUNDING: "real_estate_crowdfunding",
  // Cards (new)
  FOREX_CARD: "forex_card",
  PREPAID_CARD: "prepaid_card",
  BALANCE_TRANSFER: "balance_transfer",
  BUSINESS_CREDIT_CARD: "business_credit_card",
  // Banking (new)
  EDUCATION_LOAN: "education_loan",
  KIDS_ACCOUNT: "kids_account",
  SALARY_ADVANCE: "salary_advance",
  // Digital Finance
  DIGITAL_WALLET: "digital_wallet",
  LOYALTY_PROGRAM: "loyalty_program",
  // Insurance (new)
  DOMESTIC_HELPER_INSURANCE: "domestic_helper_insurance",
  // Business (new)
  MERCHANT_ACCOUNT: "merchant_account",
  // KSA & New Shared
  MICROFINANCE: "microfinance",
  DEBT_CROWDFUNDING: "debt_crowdfunding",
  SAH_SUKUK: "sah_sukuk",
  HAJJ_UMRAH_FINANCING: "hajj_umrah_financing",
  SAKANI_HOUSING_SUPPORT: "sakani_housing_support",
} as const;

export type ProductCategory =
  (typeof PRODUCT_CATEGORIES)[keyof typeof PRODUCT_CATEGORIES];

export const CATEGORY_GROUPS = {
  loans: [
    PRODUCT_CATEGORIES.PERSONAL_LOAN,
    PRODUCT_CATEGORIES.AUTO_LOAN,
    PRODUCT_CATEGORIES.MORTGAGE,
    PRODUCT_CATEGORIES.EDUCATION_LOAN,
    PRODUCT_CATEGORIES.SALARY_ADVANCE,
    PRODUCT_CATEGORIES.HAJJ_UMRAH_FINANCING,
  ],
  cards: [
    PRODUCT_CATEGORIES.CREDIT_CARD,
    PRODUCT_CATEGORIES.BALANCE_TRANSFER,
    PRODUCT_CATEGORIES.PREPAID_CARD,
    PRODUCT_CATEGORIES.FOREX_CARD,
    PRODUCT_CATEGORIES.BNPL,
  ],
  insurance: [
    PRODUCT_CATEGORIES.CAR_INSURANCE,
    PRODUCT_CATEGORIES.HEALTH_INSURANCE,
    PRODUCT_CATEGORIES.TRAVEL_INSURANCE,
    PRODUCT_CATEGORIES.HOME_INSURANCE,
    PRODUCT_CATEGORIES.LIFE_INSURANCE,
    PRODUCT_CATEGORIES.PET_INSURANCE,
    PRODUCT_CATEGORIES.DOMESTIC_HELPER_INSURANCE,
    PRODUCT_CATEGORIES.BUSINESS_INSURANCE,
  ],
  banking: [
    PRODUCT_CATEGORIES.SAVINGS_ACCOUNT,
    PRODUCT_CATEGORIES.CURRENT_ACCOUNT,
    PRODUCT_CATEGORIES.FIXED_DEPOSIT,
    PRODUCT_CATEGORIES.KIDS_ACCOUNT,
    PRODUCT_CATEGORIES.REMITTANCE,
    PRODUCT_CATEGORIES.CURRENCY_EXCHANGE,
    PRODUCT_CATEGORIES.SAH_SUKUK,
    PRODUCT_CATEGORIES.SAKANI_HOUSING_SUPPORT,
  ],
  investing: [
    PRODUCT_CATEGORIES.ROBO_ADVISOR,
    PRODUCT_CATEGORIES.STOCK_TRADING,
    PRODUCT_CATEGORIES.CRYPTO_EXCHANGE,
    PRODUCT_CATEGORIES.GOLD_TRADING,
    PRODUCT_CATEGORIES.REAL_ESTATE_CROWDFUNDING,
    PRODUCT_CATEGORIES.INVESTMENT_ACCOUNT,
    PRODUCT_CATEGORIES.GOLD_SAVINGS,
  ],
  digital_finance: [
    PRODUCT_CATEGORIES.DIGITAL_WALLET,
    PRODUCT_CATEGORIES.CREDIT_SCORE,
    PRODUCT_CATEGORIES.DEBT_MANAGEMENT,
    PRODUCT_CATEGORIES.LOYALTY_PROGRAM,
    PRODUCT_CATEGORIES.MICROFINANCE,
    PRODUCT_CATEGORIES.DEBT_CROWDFUNDING,
  ],
  telecom: [
    PRODUCT_CATEGORIES.MOBILE_PLAN,
    PRODUCT_CATEGORIES.HOME_INTERNET,
    PRODUCT_CATEGORIES.TV_STREAMING,
  ],
  business: [
    PRODUCT_CATEGORIES.BUSINESS_LOAN,
    PRODUCT_CATEGORIES.SME_LOAN,
    PRODUCT_CATEGORIES.INVOICE_FINANCING,
    PRODUCT_CATEGORIES.EQUIPMENT_FINANCING,
    PRODUCT_CATEGORIES.TRADE_FINANCE,
    PRODUCT_CATEGORIES.WORKING_CAPITAL,
    PRODUCT_CATEGORIES.BUSINESS_ACCOUNT,
    PRODUCT_CATEGORIES.BUSINESS_CREDIT_CARD,
    PRODUCT_CATEGORIES.CORPORATE_CARD,
    PRODUCT_CATEGORIES.POS_SOLUTIONS,
    PRODUCT_CATEGORIES.PAYMENT_GATEWAY,
    PRODUCT_CATEGORIES.MERCHANT_ACCOUNT,
  ],
} as const;

export const PROVIDER_TYPES = {
  BANK: "bank",
  INSURER: "insurer",
  TELCO: "telco",
  FINTECH: "fintech",
  EXCHANGE: "exchange",
} as const;

export type ProviderType =
  (typeof PROVIDER_TYPES)[keyof typeof PROVIDER_TYPES];

export const INTEGRATION_STATUS = {
  MANUAL: "manual",
  API_CONNECTED: "api_connected",
  OPEN_BANKING: "open_banking",
} as const;

export type IntegrationStatus =
  (typeof INTEGRATION_STATUS)[keyof typeof INTEGRATION_STATUS];

import type { Country } from "../types/country";

export const CATEGORY_AVAILABILITY: Record<string, Country[]> = {
  personal_loan: ["ae", "sa"],
  credit_card: ["ae", "sa"],
  mortgage: ["ae", "sa"],
  auto_loan: ["ae", "sa"],
  savings_account: ["ae", "sa"],
  car_insurance: ["ae", "sa"],
  health_insurance: ["ae", "sa"],
  mobile_plan: ["ae", "sa"],
  fixed_deposit: ["ae", "sa"],
  life_insurance: ["ae", "sa"],
  travel_insurance: ["ae", "sa"],
  home_insurance: ["ae", "sa"],
  bnpl: ["ae", "sa"],
  investment_account: ["ae", "sa"],
  business_loan: ["ae", "sa"],
  sme_loan: ["ae", "sa"],
  invoice_financing: ["ae", "sa"],
  equipment_financing: ["ae", "sa"],
  business_account: ["ae", "sa"],
  corporate_card: ["ae", "sa"],
  trade_finance: ["ae", "sa"],
  working_capital: ["ae", "sa"],
  pos_solutions: ["ae", "sa"],
  payment_gateway: ["ae", "sa"],
  current_account: ["ae", "sa"],
  pet_insurance: ["ae", "sa"],
  business_insurance: ["ae", "sa"],
  home_internet: ["ae", "sa"],
  tv_streaming: ["ae", "sa"],
  gold_savings: ["ae", "sa"],
  remittance: ["ae", "sa"],
  currency_exchange: ["ae", "sa"],
  credit_score: ["ae", "sa"],
  debt_management: ["ae", "sa"],
  robo_advisor: ["ae", "sa"],
  stock_trading: ["ae", "sa"],
  crypto_exchange: ["ae", "sa"],
  gold_trading: ["ae", "sa"],
  real_estate_crowdfunding: ["ae", "sa"],
  forex_card: ["ae", "sa"],
  prepaid_card: ["ae", "sa"],
  balance_transfer: ["ae", "sa"],
  business_credit_card: ["ae", "sa"],
  education_loan: ["ae", "sa"],
  kids_account: ["ae", "sa"],
  salary_advance: ["ae", "sa"],
  digital_wallet: ["ae", "sa"],
  loyalty_program: ["ae", "sa"],
  domestic_helper_insurance: ["ae", "sa"],
  merchant_account: ["ae", "sa"],
  // New shared
  microfinance: ["ae", "sa"],
  debt_crowdfunding: ["ae", "sa"],
  // KSA-only
  sah_sukuk: ["sa"],
  hajj_umrah_financing: ["sa"],
  sakani_housing_support: ["sa"],
};

export function getCategoriesForCountry(country: Country): string[] {
  return Object.entries(CATEGORY_AVAILABILITY)
    .filter(([_, countries]) => countries.includes(country))
    .map(([key]) => key);
}
