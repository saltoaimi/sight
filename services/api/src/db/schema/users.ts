import { pgTable, text, timestamp, jsonb, uniqueIndex } from "drizzle-orm/pg-core";
import { createId } from "../utils";

export const users = pgTable(
  "users",
  {
    id: text("id").primaryKey().$defaultFn(createId),
    email: text("email").notNull(),
    passwordHash: text("password_hash").notNull(),
    phone: text("phone"),
    nameEn: text("name_en"),
    nameAr: text("name_ar"),
    role: text("role", { enum: ["user", "admin", "provider_admin"] })
      .notNull()
      .default("user"),
    profile: jsonb("profile").$type<{
      nationality?: string;
      residencyStatus?: "citizen" | "resident" | "visitor";
      emirate?: string;
      monthlySalary?: number;
      employerName?: string;
      employmentType?: "salaried" | "self_employed" | "freelancer";
      employmentMonths?: number;
      dateOfBirth?: string;
    }>(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [uniqueIndex("idx_users_email").on(table.email)]
);

export const savedComparisons = pgTable("saved_comparisons", {
  id: text("id").primaryKey().$defaultFn(createId),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  name: text("name").notNull(),
  productIds: jsonb("product_ids").$type<string[]>().notNull().default([]),
  category: text("category").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
