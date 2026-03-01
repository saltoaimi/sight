import { describe, it, expect } from "vitest";
import { registerUserSchema, updateProfileSchema, waitlistSchema } from "../user";

describe("registerUserSchema", () => {
  it("validates valid registration", () => {
    const result = registerUserSchema.safeParse({
      email: "user@example.com",
      password: "securePass123",
      phone: "+971501234567",
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid UAE phone", () => {
    const result = registerUserSchema.safeParse({
      email: "user@example.com",
      password: "securePass123",
      phone: "+1234567890",
    });
    expect(result.success).toBe(false);
  });

  it("rejects short password", () => {
    const result = registerUserSchema.safeParse({
      email: "user@example.com",
      password: "short",
    });
    expect(result.success).toBe(false);
  });
});

describe("updateProfileSchema", () => {
  it("validates valid profile update", () => {
    const result = updateProfileSchema.safeParse({
      nationality: "AE",
      residencyStatus: "citizen",
      monthlySalary: 15000,
      employmentType: "salaried",
    });
    expect(result.success).toBe(true);
  });
});

describe("waitlistSchema", () => {
  it("validates valid waitlist entry", () => {
    const result = waitlistSchema.safeParse({
      email: "user@example.com",
      productId: "prod-123",
    });
    expect(result.success).toBe(true);
  });
});
