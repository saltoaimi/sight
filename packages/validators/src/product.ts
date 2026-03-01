import { z } from "zod";

const productBaseSchema = z.object({
  providerId: z.string().min(1),
  subCategory: z.string().min(1),
  nameEn: z.string().min(1).max(200),
  nameAr: z.string().min(1).max(200),
  descriptionEn: z.string().min(1).max(2000),
  descriptionAr: z.string().min(1).max(2000),
  islamicCompliant: z.boolean(),
  features: z
    .array(z.record(z.string()))
    .optional()
    .default([]),
  fees: z
    .array(
      z.object({
        nameEn: z.string(),
        nameAr: z.string(),
        amount: z.number().nonnegative(),
        type: z.enum(["fixed", "percentage"]),
      })
    )
    .optional()
    .default([]),
  eligibilityCriteria: z
    .object({
      minSalary: z.number().nonnegative().optional(),
      maxSalary: z.number().nonnegative().optional(),
      minAge: z.number().int().min(18).optional(),
      maxAge: z.number().int().max(70).optional(),
      nationalities: z.array(z.string()).optional(),
      employmentTypes: z
        .array(z.enum(["salaried", "self_employed", "freelancer"]))
        .optional(),
      minEmploymentMonths: z.number().int().nonnegative().optional(),
      minCreditScore: z.number().int().nonnegative().optional(),
      existingCustomerOnly: z.boolean().optional(),
      salaryTransferRequired: z.boolean().optional(),
    })
    .optional()
    .default({}),
  imageUrl: z.string().url().optional(),
});

export const createLoanProductSchema = productBaseSchema
  .extend({
    category: z.enum(["personal_loan", "auto_loan", "mortgage", "business_loan"]),
    rateType: z.enum(["fixed", "variable", "reducing"]),
    rateValue: z.number().nonnegative(),
    profitRate: z.number().nonnegative().optional(),
    minAmount: z.number().positive(),
    maxAmount: z.number().positive(),
    minTenureMonths: z.number().int().positive(),
    maxTenureMonths: z.number().int().positive(),
    processingFeePercent: z.number().nonnegative(),
    earlySettlementFeePercent: z.number().nonnegative().optional(),
  })
  .refine((data) => data.minAmount <= data.maxAmount, {
    message: "minAmount must be <= maxAmount",
  })
  .refine((data) => data.minTenureMonths <= data.maxTenureMonths, {
    message: "minTenureMonths must be <= maxTenureMonths",
  });

export const createCardProductSchema = productBaseSchema.extend({
  category: z.literal("credit_card"),
  annualFee: z.number().nonnegative(),
  annualFeeWaiver: z.string().optional(),
  cashbackRate: z.number().nonnegative().optional(),
  rewardType: z.enum(["cashback", "miles", "points", "none"]),
  rewardRate: z.number().nonnegative().optional(),
  minSalary: z.number().nonnegative(),
  interestFreeGraceDays: z.number().int().nonnegative().optional(),
  supplementaryCardFee: z.number().nonnegative().optional(),
});

export const createInsuranceProductSchema = productBaseSchema.extend({
  category: z.enum([
    "car_insurance",
    "health_insurance",
    "travel_insurance",
    "home_insurance",
    "life_insurance",
    "pet_insurance",
    "business_insurance",
  ]),
  premiumMin: z.number().nonnegative(),
  premiumMax: z.number().nonnegative(),
  coverageAmount: z.number().nonnegative().optional(),
  deductible: z.number().nonnegative().optional(),
  networkType: z.enum(["basic", "enhanced", "premium"]).optional(),
  coPayPercent: z.number().min(0).max(100).optional(),
});

export const createTelecomProductSchema = productBaseSchema.extend({
  category: z.enum(["mobile_plan", "home_internet", "tv_streaming"]),
  dataGb: z.union([z.number().nonnegative(), z.literal("unlimited")]),
  minutes: z.union([z.number().nonnegative(), z.literal("unlimited")]),
  sms: z.union([z.number().nonnegative(), z.literal("unlimited")]),
  priceMonthly: z.number().positive(),
  contractMonths: z.number().int().nonnegative(),
  speed: z.string().optional(),
});
