import { relations } from "drizzle-orm/relations";
import { samdleStatistics, users, usersSyncInNeonAuth } from "./schema";

export const usersRelations = relations(users, ({one, many}) => ({
	usersSyncInNeonAuth: one(usersSyncInNeonAuth, {
		fields: [users.userSyncId],
		references: [usersSyncInNeonAuth.id]
	}),
	samdleStatistics: many(samdleStatistics, {
		relationName: "samdleStatistics_userId_users_id"
	}),
}));

export const samdleStatisticsRelations = relations(samdleStatistics, ({one, many}) => ({
	users: many(users, {
		relationName: "users_samdleStatisticsId_samdleStatistics_id"
	}),
	user: one(users, {
		fields: [samdleStatistics.userId],
		references: [users.id],
		relationName: "samdleStatistics_userId_users_id"
	}),
}));

export const usersSyncInNeonAuthRelations = relations(usersSyncInNeonAuth, ({many}) => ({
	users: many(users),
}));