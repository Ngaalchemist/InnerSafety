import { pgTable, text, integer, timestamp, boolean } from "drizzle-orm/pg-core";

// Stores in-flight SePay QR checkout orders. Replaces the old in-memory Map
// so payment status survives across serverless invocations (Vercel, etc.).
export const pendingOrdersTable = pgTable("pending_orders", {
  orderId: text("order_id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  registrationUrl: text("registration_url").notNull(),
  amount: integer("amount").notNull(),
  sheetsWritten: boolean("sheets_written").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type PendingOrder = typeof pendingOrdersTable.$inferSelect;
export type InsertPendingOrder = typeof pendingOrdersTable.$inferInsert;
