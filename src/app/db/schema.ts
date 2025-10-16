import { pgTable, pgSchema, index, jsonb, text, timestamp, type AnyPgColumn, foreignKey, integer, varchar, boolean } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const neonAuth = pgSchema("neon_auth");


export const usersSyncInNeonAuth = neonAuth.table("users_sync", {
	rawJson: jsonb("raw_json").notNull(),
	id: text().primaryKey().notNull().generatedAlwaysAs(sql`(raw_json ->> 'id'::text)`),
	name: text().generatedAlwaysAs(sql`(raw_json ->> 'display_name'::text)`),
	email: text().generatedAlwaysAs(sql`(raw_json ->> 'primary_email'::text)`),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).generatedAlwaysAs(sql`to_timestamp((trunc((((raw_json ->> 'signed_up_at_millis'::text))::bigint)::double precision) / (1000)::double precision))`),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
	deletedAt: timestamp("deleted_at", { withTimezone: true, mode: 'string' }),
}, (table) => [
	index("users_sync_deleted_at_idx").using("btree", table.deletedAt.asc().nullsLast().op("timestamptz_ops")),
]);

export const users = pgTable("Users", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "User_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647 }),
	firstName: varchar("First Name", { length: 32 }).notNull(),
	lastName: varchar("Last Name", { length: 64 }),
	emailAddress: varchar("Email Address", { length: 50 }).notNull(),
	userSyncId: text().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userSyncId],
			foreignColumns: [usersSyncInNeonAuth.id],
			name: "userSyncId"
		}),
]);

export const samdleStatistics = pgTable("SamdleStatistics", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "SamdleStatistics_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647 }),
	userId: integer().notNull(),
	numberOfWins: integer(),
	numberOf1Guesses: integer(),
	numberOf2Guesses: integer(),
	numberOf3Guesses: integer(),
	numberOf4Guesses: integer(),
	numberOf5Guesses: integer(),
	numberOfLosses: integer(),
	hasDailySamdleAttempt: boolean().default(true).notNull(),
	winStreak: integer(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "userId"
		}),
]);
