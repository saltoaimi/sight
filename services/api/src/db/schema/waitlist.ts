import { pgTable, text, timestamp, index } from "drizzle-orm/pg-core";
import { users } from "./users";
import { products } from "./products";
import { createId } from "../utils";

export const waitlist = pgTable(
  "waitlist",
  {
    id: text("id").primaryKey().$defaultFn(createId),
    userId: text("user_id").references(() => users.id),
    email: text("email").notNull(),
    phone: text("phone"),
    productId: text("product_id")
      .notNull()
      .references(() => products.id),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("idx_waitlist_product").on(table.productId),
    index("idx_waitlist_email").on(table.email),
  ]
);
