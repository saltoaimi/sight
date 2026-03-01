import { pgTable, text, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createId } from "../utils";

export const providers = pgTable("providers", {
  id: text("id").primaryKey().$defaultFn(createId),
  nameEn: text("name_en").notNull(),
  nameAr: text("name_ar").notNull(),
  logoUrl: text("logo_url").notNull(),
  type: text("type", {
    enum: ["bank", "insurer", "telco", "fintech", "exchange"],
  }).notNull(),
  website: text("website"),
  integrationStatus: text("integration_status", {
    enum: ["manual", "api_connected", "open_banking"],
  })
    .notNull()
    .default("manual"),
  adapterConfig: jsonb("adapter_config"),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});
