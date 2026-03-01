import type { ProductCategory } from "../constants/categories";

export interface ProductBase {
  id: string;
  providerId: string;
  category: ProductCategory;
  subCategory: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  status: "active" | "inactive" | "draft";
  features: Record<string, string>[];
  fees: { nameEn: string; nameAr: string; amount: number; type: "fixed" | "percentage" }[];
  eligibilityCriteria: EligibilityCriteria;
  islamicCompliant: boolean;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface EligibilityCriteria {
  minSalary?: number;
  maxSalary?: number;
  minAge?: number;
  maxAge?: number;
  nationalities?: string[];
  employmentTypes?: ("salaried" | "self_employed" | "freelancer")[];
  minEmploymentMonths?: number;
  existingBankRelationship?: boolean;
  minCreditScore?: number;
  minBusinessRevenue?: number;
  minBusinessAge?: number;
  existingCustomerOnly?: boolean;
  salaryTransferRequired?: boolean;
  [key: string]: any;
}

export interface LoanProduct extends ProductBase {
  category: "personal_loan" | "auto_loan" | "mortgage" | "business_loan";
  rateType: "fixed" | "variable" | "reducing";
  rateValue: number; // Annual percentage
  profitRate?: number; // For Islamic products
  minAmount: number;
  maxAmount: number;
  minTenureMonths: number;
  maxTenureMonths: number;
  processingFeePercent: number;
  earlySettlementFeePercent?: number;
}

export interface CardProduct extends ProductBase {
  category: "credit_card";
  annualFee: number;
  annualFeeWaiver?: string;
  cashbackRate?: number;
  rewardType: "cashback" | "miles" | "points" | "none";
  rewardRate?: number;
  minSalary: number;
  interestFreeGraceDays?: number;
  supplementaryCardFee?: number;
}

export interface InsuranceProduct extends ProductBase {
  category: "car_insurance" | "health_insurance" | "travel_insurance" | "home_insurance" | "life_insurance" | "pet_insurance" | "business_insurance";
  premiumMin: number;
  premiumMax: number;
  coverageAmount?: number;
  deductible?: number;
  networkType?: "basic" | "enhanced" | "premium";
  coPayPercent?: number;
}

export interface TelecomProduct extends ProductBase {
  category: "mobile_plan" | "home_internet" | "tv_streaming";
  dataGb: number | "unlimited";
  minutes: number | "unlimited";
  sms: number | "unlimited";
  priceMonthly: number;
  contractMonths: number;
  speed?: string;
}

export type Product = LoanProduct | CardProduct | InsuranceProduct | TelecomProduct | ProductBase;
