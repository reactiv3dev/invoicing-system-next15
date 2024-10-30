import { integer, pgEnum, pgTable, PgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum('status', ['open', 'paid', 'void', 'uncollectible']);

export const Invoices = pgTable("invoices",{
    id: serial('id').primaryKey().notNull(),
    createTs: timestamp('createTs').notNull().defaultNow(),
    status: statusEnum('status').notNull().default("open"),
    value: integer('value').notNull(),
    description: text('description').notNull(),
})