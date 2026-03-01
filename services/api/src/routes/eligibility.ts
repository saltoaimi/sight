import type { FastifyPluginAsync } from "fastify";
import { db } from "../db";
import { products, providers } from "../db/schema";
import { eq, and } from "drizzle-orm";

interface EligibilityRequest {
  type: "personal" | "business";
  category: string;
  salary?: number;
  nationality?: string;
  employmentType?: string;
  employmentMonths?: number;
  age?: number;
  existingBank?: string;
  businessRevenue?: number;
  businessAgeMonths?: number;
}

interface MatchResult {
  product: any;
  provider: any;
  status: "pre_approved" | "likely_eligible" | "not_eligible" | "apply";
  unmetCriteria: string[];
}

// Map frontend shorthand values to seed data format
const NATIONALITY_MAP: Record<string, string[]> = {
  uae: ["UAE National"],
  gcc: ["GCC National", "UAE National"],
  expat: ["Expatriate", "Expat / Resident"],
  non_resident: ["Non-Resident"],
};

const EMPLOYMENT_MAP: Record<string, string[]> = {
  salaried: ["Salaried"],
  self_employed: ["Self-Employed"],
  business_owner: ["Business Owner", "Self-Employed"],
};

function matchesNationality(userValue: string, allowed: string[]): boolean {
  if (allowed.includes("any")) return true;
  const mapped = NATIONALITY_MAP[userValue] || [userValue];
  return mapped.some((v) => allowed.some((a) => a.toLowerCase() === v.toLowerCase()));
}

function matchesEmployment(userValue: string, allowed: string[]): boolean {
  const mapped = EMPLOYMENT_MAP[userValue] || [userValue];
  return mapped.some((v) => allowed.some((a) => a.toLowerCase() === v.toLowerCase()));
}

function matchProduct(product: any, answers: EligibilityRequest): MatchResult {
  const criteria = product.eligibilityCriteria as Record<string, any> | null;
  const unmet: string[] = [];

  // Products without eligibility criteria = "apply" status
  if (!criteria || Object.keys(criteria).length === 0) {
    return {
      product,
      provider: product.provider,
      status: "apply",
      unmetCriteria: [],
    };
  }

  if (
    criteria.minSalary &&
    answers.salary &&
    answers.salary < criteria.minSalary
  ) {
    unmet.push(
      `Minimum salary AED ${criteria.minSalary.toLocaleString()} required`
    );
  }

  if (criteria.minAge && answers.age && answers.age < criteria.minAge) {
    unmet.push(`Minimum age ${criteria.minAge} required`);
  }

  if (criteria.maxAge && answers.age && answers.age > criteria.maxAge) {
    unmet.push(`Maximum age ${criteria.maxAge}`);
  }

  if (
    criteria.nationalities &&
    criteria.nationalities.length > 0 &&
    answers.nationality
  ) {
    if (!matchesNationality(answers.nationality, criteria.nationalities)) {
      unmet.push(`Available for: ${criteria.nationalities.join(", ")}`);
    }
  }

  if (criteria.employmentTypes && criteria.employmentTypes.length > 0) {
    if (answers.employmentType && !matchesEmployment(answers.employmentType, criteria.employmentTypes)) {
      unmet.push(`Available for: ${criteria.employmentTypes.join(", ")}`);
    }
  }

  if (
    criteria.minEmploymentMonths &&
    answers.employmentMonths &&
    answers.employmentMonths < criteria.minEmploymentMonths
  ) {
    unmet.push(
      `Minimum ${criteria.minEmploymentMonths} months employment required`
    );
  }

  if (
    criteria.minBusinessRevenue &&
    answers.businessRevenue &&
    answers.businessRevenue < criteria.minBusinessRevenue
  ) {
    unmet.push(
      `Minimum annual revenue AED ${criteria.minBusinessRevenue.toLocaleString()} required`
    );
  }

  if (
    criteria.minBusinessAge &&
    answers.businessAgeMonths &&
    answers.businessAgeMonths < criteria.minBusinessAge
  ) {
    unmet.push(
      `Business must be at least ${criteria.minBusinessAge} months old`
    );
  }

  let status: MatchResult["status"];
  if (unmet.length === 0) {
    status = "pre_approved";
  } else if (unmet.length === 1 && unmet[0].includes("salary")) {
    // Close on salary — mark as likely eligible
    status = "likely_eligible";
  } else {
    status = "not_eligible";
  }

  return { product, provider: product.provider, status, unmetCriteria: unmet };
}

export const eligibilityRoutes: FastifyPluginAsync = async (app) => {
  app.post<{ Body: EligibilityRequest }>(
    "/check",
    async (request, _reply) => {
      const answers = request.body;

      const allProducts = await db
        .select({
          product: products,
          provider: providers,
        })
        .from(products)
        .innerJoin(providers, eq(products.providerId, providers.id))
        .where(
          and(
            eq(products.category, answers.category),
            eq(products.status, "active")
          )
        );

      const results: MatchResult[] = allProducts.map(
        ({ product, provider }) => {
          const p = { ...product, provider };
          return matchProduct(p, answers);
        }
      );

      // Sort: pre_approved first, then apply, then not_eligible
      const order = {
        pre_approved: 0,
        likely_eligible: 1,
        apply: 2,
        not_eligible: 3,
      };
      results.sort((a, b) => order[a.status] - order[b.status]);

      return { data: results, total: results.length };
    }
  );
};
