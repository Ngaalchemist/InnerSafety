import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";

export const checkoutOrders = pgTable("checkout_orders", {
  orderId: text("order_id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  registrationUrl: text("registration_url").notNull(),
  amount: integer("amount").notNull(),
  status: text("status").notNull().default("pending"), // 'pending' | 'paid'
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
