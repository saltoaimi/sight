/**
 * Client-side eligibility matching engine.
 * Uses static product data when the API is unavailable.
 */

import { getStaticProducts } from "./static-products/index";

interface EligibilityAnswers {
  type?: "personal" | "business";
  category: string;
  salary?: number;
  nationality?: string;
  employmentType?: string;
  employmentMonths?: number;
  age?: number;
  businessRevenue?: number;
  businessAgeMonths?: number;
}

interface MatchResult {
  product: any;
  provider: any;
  status: "pre_approved" | "likely_eligible" | "not_eligible" | "apply";
  unmetCriteria: string[];
}

const NATIONALITY_MAP: Record<string, string[]> = {
  uae: ["UAE National"],
  gcc: ["GCC National", "UAE National"],
  expat: ["Expatriate", "Expat / Resident", "UAE National"],
  non_resident: ["Non-Resident"],
};

const EMPLOYMENT_MAP: Record<string, string[]> = {
  salaried: ["Salaried"],
  self_employed: ["Self-Employed"],
  business_owner: ["Business Owner", "Self-Employed"],
};

function matchesNationality(userValue: string, allowed: string[]): boolean {
  if (!allowed || allowed.length === 0) return true;
  // Treat common wildcard values as "open to all"
  const wildcards = ["any", "all", "all nationalities"];
  if (allowed.some((a) => wildcards.includes(a.toLowerCase()))) return true;
  const mapped = NATIONALITY_MAP[userValue] || [userValue];
  return mapped.some((v) =>
    allowed.some((a) => {
      const al = a.toLowerCase();
      const vl = v.toLowerCase();
      // Exact match
      if (al === vl) return true;
      // "UAE nationals" should match "UAE National"
      if (al.replace(/s$/, "") === vl.replace(/s$/, "")) return true;
      // "UAE residents" should match expats/residents
      if (al === "uae residents" && (vl === "expatriate" || vl === "expat / resident")) return true;
      return false;
    })
  );
}

function matchesEmployment(userValue: string, allowed: string[]): boolean {
  if (!allowed || allowed.length === 0) return true;
  const mapped = EMPLOYMENT_MAP[userValue] || [userValue];
  return mapped.some((v) =>
    allowed.some((a) => a.toLowerCase() === v.toLowerCase())
  );
}

function matchProduct(product: any, answers: EligibilityAnswers): MatchResult {
  const criteria = product.eligibilityCriteria as Record<string, any> | null;
  const unmet: string[] = [];

  if (!criteria || Object.keys(criteria).length === 0) {
    return {
      product,
      provider: product.provider,
      status: "apply",
      unmetCriteria: [],
    };
  }

  // Salary check
  if (criteria.minSalary && answers.salary) {
    const minSalary =
      typeof criteria.minSalary === "string"
        ? parseFloat(criteria.minSalary)
        : criteria.minSalary;
    if (answers.salary < minSalary) {
      const diff = minSalary - answers.salary;
      if (diff <= minSalary * 0.2) {
        // Within 20% — close enough to be "likely eligible"
        unmet.push(
          `Minimum salary AED ${minSalary.toLocaleString()} (you're close)`
        );
      } else {
        unmet.push(
          `Minimum salary AED ${minSalary.toLocaleString()} required`
        );
      }
    }
  }

  // Age check
  if (criteria.minAge && answers.age && answers.age < criteria.minAge) {
    unmet.push(`Minimum age ${criteria.minAge} required`);
  }
  if (criteria.maxAge && answers.age && answers.age > criteria.maxAge) {
    unmet.push(`Maximum age ${criteria.maxAge}`);
  }

  // Nationality check
  if (criteria.nationalities && criteria.nationalities.length > 0 && answers.nationality) {
    if (!matchesNationality(answers.nationality, criteria.nationalities)) {
      unmet.push(`Available for: ${criteria.nationalities.join(", ")}`);
    }
  }

  // Employment type check
  if (criteria.employmentTypes && criteria.employmentTypes.length > 0 && answers.employmentType) {
    if (!matchesEmployment(answers.employmentType, criteria.employmentTypes)) {
      unmet.push(`Available for: ${criteria.employmentTypes.join(", ")}`);
    }
  }

  // Employment duration check
  if (criteria.minEmploymentMonths && answers.employmentMonths) {
    if (answers.employmentMonths < criteria.minEmploymentMonths) {
      unmet.push(
        `Minimum ${criteria.minEmploymentMonths} months employment required`
      );
    }
  }

  // Business checks
  if (criteria.minBusinessRevenue && answers.businessRevenue) {
    if (answers.businessRevenue < criteria.minBusinessRevenue) {
      unmet.push(
        `Minimum annual revenue AED ${criteria.minBusinessRevenue.toLocaleString()} required`
      );
    }
  }
  if (criteria.minBusinessAge && answers.businessAgeMonths) {
    if (answers.businessAgeMonths < criteria.minBusinessAge) {
      unmet.push(
        `Business must be at least ${criteria.minBusinessAge} months old`
      );
    }
  }

  let status: MatchResult["status"];
  if (unmet.length === 0) {
    status = "pre_approved";
  } else if (unmet.length === 1 && unmet[0].includes("close")) {
    status = "likely_eligible";
  } else if (unmet.length === 1 && unmet[0].includes("salary")) {
    status = "likely_eligible";
  } else if (unmet.length === 1) {
    // Only one non-salary criterion unmet — still worth showing
    status = "likely_eligible";
  } else {
    status = "not_eligible";
  }

  return { product, provider: product.provider, status, unmetCriteria: unmet };
}

/**
 * Run eligibility check against static product data.
 * Returns results sorted by match quality.
 */
export function checkEligibility(answers: EligibilityAnswers): {
  data: MatchResult[];
  total: number;
} {
  const products = getStaticProducts(answers.category);

  const results: MatchResult[] = products.map((product) =>
    matchProduct(product, answers)
  );

  const order = {
    pre_approved: 0,
    likely_eligible: 1,
    apply: 2,
    not_eligible: 3,
  };
  results.sort((a, b) => order[a.status] - order[b.status]);

  const counts = {
    pre_approved: results.filter((r) => r.status === "pre_approved").length,
    likely_eligible: results.filter((r) => r.status === "likely_eligible").length,
    not_eligible: results.filter((r) => r.status === "not_eligible").length,
    apply: results.filter((r) => r.status === "apply").length,
  };
  console.log("[Sight Eligibility]", {
    category: answers.category,
    productsFound: products.length,
    results: counts,
  });

  return { data: results, total: results.length };
}
