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
} as const;

export type ProductCategory =
  (typeof PRODUCT_CATEGORIES)[keyof typeof PRODUCT_CATEGORIES];

export const CATEGORY_GROUPS = {
  banking: [
    PRODUCT_CATEGORIES.PERSONAL_LOAN,
    PRODUCT_CATEGORIES.AUTO_LOAN,
    PRODUCT_CATEGORIES.MORTGAGE,
    PRODUCT_CATEGORIES.CREDIT_CARD,
    PRODUCT_CATEGORIES.BUSINESS_LOAN,
    PRODUCT_CATEGORIES.SAVINGS_ACCOUNT,
    PRODUCT_CATEGORIES.FIXED_DEPOSIT,
    PRODUCT_CATEGORIES.CURRENT_ACCOUNT,
  ],
  insurance: [
    PRODUCT_CATEGORIES.CAR_INSURANCE,
    PRODUCT_CATEGORIES.HEALTH_INSURANCE,
    PRODUCT_CATEGORIES.TRAVEL_INSURANCE,
    PRODUCT_CATEGORIES.HOME_INSURANCE,
    PRODUCT_CATEGORIES.LIFE_INSURANCE,
    PRODUCT_CATEGORIES.PET_INSURANCE,
    PRODUCT_CATEGORIES.BUSINESS_INSURANCE,
  ],
  telecom: [
    PRODUCT_CATEGORIES.MOBILE_PLAN,
    PRODUCT_CATEGORIES.HOME_INTERNET,
    PRODUCT_CATEGORIES.TV_STREAMING,
  ],
  investments: [
    PRODUCT_CATEGORIES.INVESTMENT_ACCOUNT,
    PRODUCT_CATEGORIES.GOLD_SAVINGS,
  ],
  money_transfer: [
    PRODUCT_CATEGORIES.REMITTANCE,
    PRODUCT_CATEGORIES.CURRENCY_EXCHANGE,
  ],
  credit_health: [
    PRODUCT_CATEGORIES.CREDIT_SCORE,
    PRODUCT_CATEGORIES.DEBT_MANAGEMENT,
  ],
  business: [
    PRODUCT_CATEGORIES.BUSINESS_LOAN,
    PRODUCT_CATEGORIES.SME_LOAN,
    PRODUCT_CATEGORIES.INVOICE_FINANCING,
    PRODUCT_CATEGORIES.EQUIPMENT_FINANCING,
    PRODUCT_CATEGORIES.BUSINESS_ACCOUNT,
    PRODUCT_CATEGORIES.CORPORATE_CARD,
    PRODUCT_CATEGORIES.TRADE_FINANCE,
    PRODUCT_CATEGORIES.WORKING_CAPITAL,
    PRODUCT_CATEGORIES.POS_SOLUTIONS,
    PRODUCT_CATEGORIES.PAYMENT_GATEWAY,
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
