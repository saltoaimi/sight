import { z } from "zod";

export const registerUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(128),
  phone: z
    .string()
    .regex(/^\+971[0-9]{8,9}$/, "Must be a valid UAE phone number (+971XXXXXXXXX)")
    .optional(),
  nameEn: z.string().min(1).max(100).optional(),
  nameAr: z.string().min(1).max(100).optional(),
});

export const updateProfileSchema = z.object({
  nationality: z.string().min(2).max(3).optional(),
  residencyStatus: z.enum(["citizen", "resident", "visitor"]).optional(),
  emirate: z.string().optional(),
  monthlySalary: z.number().nonnegative().optional(),
  employerName: z.string().max(200).optional(),
  employmentType: z.enum(["salaried", "self_employed", "freelancer"]).optional(),
  employmentMonths: z.number().int().nonnegative().optional(),
  dateOfBirth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Must be YYYY-MM-DD format")
    .optional(),
});

export const waitlistSchema = z.object({
  email: z.string().email(),
  phone: z
    .string()
    .regex(/^\+971[0-9]{8,9}$/)
    .optional(),
  productId: z.string().min(1),
});
