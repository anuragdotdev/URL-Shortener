import { 
    pgTable,
    serial,
    text,
    varchar,
    timestamp
 } from "drizzle-orm/pg-core";

 export const urls = pgTable("urls",{
    id : serial("id").primaryKey(),
    originalUrl : text("original_url").notNull(),
    shortCode: varchar("short_code",{
        length: 8
    }).notNull().unique(),

    createdAt: timestamp("created_at").defaultNow()
    .notNull(),
 })

