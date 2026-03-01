import { describe, it, expect } from "vitest";
import { createLoanProductSchema, createCardProductSchema } from "../product";

describe("createLoanProductSchema", () => {
  it("validates a valid personal loan product", () => {
    const input = {
      providerId: "provider-1",
      category: "personal_loan",
      subCategory: "salary_transfer",
      nameEn: "Personal Loan",
      nameAr: "قرض شخصي",
      descriptionEn: "A personal loan for salaried individuals",
      descriptionAr: "قرض شخصي للموظفين",
      islamicCompliant: false,
      rateType: "reducing",
      rateValue: 3.99,
      minAmount: 5000,
      maxAmount: 500000,
      minTenureMonths: 6,
      maxTenureMonths: 48,
      processingFeePercent: 1.05,
    };
    const result = createLoanProductSchema.safeParse(input);
    expect(result.success).toBe(true);
  });

  it("rejects negative rate", () => {
    const input = {
      providerId: "provider-1",
      category: "personal_loan",
      subCategory: "salary_transfer",
      nameEn: "Bad Loan",
      nameAr: "قرض",
      descriptionEn: "desc",
      descriptionAr: "وصف",
      islamicCompliant: false,
      rateType: "fixed",
      rateValue: -1,
      minAmount: 5000,
      maxAmount: 500000,
      minTenureMonths: 6,
      maxTenureMonths: 48,
      processingFeePercent: 1,
    };
    const result = createLoanProductSchema.safeParse(input);
    expect(result.success).toBe(false);
  });

  it("rejects when minAmount > maxAmount", () => {
    const input = {
      providerId: "provider-1",
      category: "personal_loan",
      subCategory: "salary_transfer",
      nameEn: "Bad Loan",
      nameAr: "قرض",
      descriptionEn: "desc",
      descriptionAr: "وصف",
      islamicCompliant: false,
      rateType: "fixed",
      rateValue: 5,
      minAmount: 100000,
      maxAmount: 5000,
      minTenureMonths: 6,
      maxTenureMonths: 48,
      processingFeePercent: 1,
    };
    const result = createLoanProductSchema.safeParse(input);
    expect(result.success).toBe(false);
  });
});

describe("createCardProductSchema", () => {
  it("validates a valid credit card product", () => {
    const input = {
      providerId: "provider-1",
      category: "credit_card",
      subCategory: "cashback",
      nameEn: "Cashback Card",
      nameAr: "بطاقة استرجاع نقدي",
      descriptionEn: "Earn cashback on every purchase",
      descriptionAr: "احصل على استرجاع نقدي",
      islamicCompliant: false,
      annualFee: 0,
      cashbackRate: 2,
      rewardType: "cashback",
      minSalary: 5000,
    };
    const result = createCardProductSchema.safeParse(input);
    expect(result.success).toBe(true);
  });
});
