import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const messages = sqliteTable("messages", {
  id: integer("id").primaryKey(),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const blogs = sqliteTable("blogs", {
  id: integer("id").primaryKey(),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  name: text("name").unique().notNull(),
  post: text("post").notNull(),
});

export const projects = sqliteTable("projects", {
  id: integer("id").primaryKey(),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  name: text("name").unique().notNull(),
  about: text("about").notNull(),
  url: text("url").notNull(),
});

export type InsertBlog = typeof blogs.$inferInsert;
export type SelectBlog = typeof blogs.$inferSelect;

export type InsertProject = typeof projects.$inferInsert;
export type SelectProject = typeof projects.$inferSelect;

export type InsertMessage = typeof messages.$inferInsert;
export type SelectMessage = typeof messages.$inferSelect;
