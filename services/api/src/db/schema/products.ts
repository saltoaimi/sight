import {
  pgTable,
  text,
  boolean,
  timestamp,
  jsonb,
  numeric,
  integer,
  index,
} from "drizzle-orm/pg-core";
import { providers } from "./providers";
import { createId } from "../utils";

export const products = pgTable(
  "products",
  {
    id: text("id").primaryKey().$defaultFn(createId),
    providerId: text("provider_id")
      .notNull()
      .references(() => providers.id),
    category: text("category").notNull(),
    subCategory: text("sub_category").notNull(),
    nameEn: text("name_en").notNull(),
    nameAr: text("name_ar").notNull(),
    descriptionEn: text("description_en").notNull(),
    descriptionAr: text("description_ar").notNull(),
    status: text("status", { enum: ["active", "inactive", "draft"] })
      .notNull()
      .default("draft"),
    features: jsonb("features").$type<Record<string, string>[]>().default([]),
    fees: jsonb("fees")
      .$type<
        { nameEn: string; nameAr: string; amount: number; type: "fixed" | "percentage" }[]
      >()
      .default([]),
    eligibilityCriteria: jsonb("eligibility_criteria").$type<Record<string, unknown>>().default({}),
    islamicCompliant: boolean("islamic_compliant").notNull().default(false),
    imageUrl: text("image_url"),
    // Loan-specific
    rateType: text("rate_type", { enum: ["fixed", "variable", "reducing"] }),
    rateValue: numeric("rate_value", { precision: 6, scale: 3 }),
    profitRate: numeric("profit_rate", { precision: 6, scale: 3 }),
    minAmount: numeric("min_amount", { precision: 14, scale: 2 }),
    maxAmount: numeric("max_amount", { precision: 14, scale: 2 }),
    minTenureMonths: integer("min_tenure_months"),
    maxTenureMonths: integer("max_tenure_months"),
    processingFeePercent: numeric("processing_fee_percent", { precision: 5, scale: 2 }),
    earlySettlementFeePercent: numeric("early_settlement_fee_percent", {
      precision: 5,
      scale: 2,
    }),
    // Card-specific
    annualFee: numeric("annual_fee", { precision: 10, scale: 2 }),
    annualFeeWaiver: text("annual_fee_waiver"),
    cashbackRate: numeric("cashback_rate", { precision: 5, scale: 2 }),
    rewardType: text("reward_type", {
      enum: ["cashback", "miles", "points", "none"],
    }),
    rewardRate: numeric("reward_rate", { precision: 5, scale: 2 }),
    minSalary: numeric("min_salary", { precision: 10, scale: 2 }),
    interestFreeGraceDays: integer("interest_free_grace_days"),
    supplementaryCardFee: numeric("supplementary_card_fee", { precision: 10, scale: 2 }),
    // Insurance-specific
    premiumMin: numeric("premium_min", { precision: 10, scale: 2 }),
    premiumMax: numeric("premium_max", { precision: 10, scale: 2 }),
    coverageAmount: numeric("coverage_amount", { precision: 14, scale: 2 }),
    deductible: numeric("deductible", { precision: 10, scale: 2 }),
    networkType: text("network_type", { enum: ["basic", "enhanced", "premium"] }),
    coPayPercent: numeric("co_pay_percent", { precision: 5, scale: 2 }),
    // Telecom-specific
    dataGb: text("data_gb"), // "unlimited" or number as string
    minutes: text("minutes"),
    sms: text("sms"),
    priceMonthly: numeric("price_monthly", { precision: 10, scale: 2 }),
    contractMonths: integer("contract_months"),
    speed: text("speed"),
    // Timestamps
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("idx_products_category").on(table.category),
    index("idx_products_provider").on(table.providerId),
    index("idx_products_status").on(table.status),
    index("idx_products_category_status").on(table.category, table.status),
  ]
);
