import { boolean, date, pgTable, serial, text, uuid } from "drizzle-orm/pg-core"

export const usersTable = pgTable("users", {
  id: uuid("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name"),
  phone_number: text("phone_number"),
  created_at: date("created_at").defaultNow(),
})

export const imagesTable = pgTable("images_table", {
  id: serial("id").primaryKey(),
  image_path : text("image_path").notNull(),
  is_favorite: boolean("is_favorite").default(false),
  is_archived: boolean("is_archived").default(false),
  created_at: date("created_at").defaultNow(),
  user_id: uuid("user_id")
    .notNull()
    .references(() => usersTable.id),
})

export const albumsTable = pgTable("albums_table", {
  id: serial("id").primaryKey(),
  album_name: text("album_name").notNull(),
  user_id: uuid("user_id")
    .notNull()
    .references(() => usersTable.id),
})

export const albumsImageMapping = pgTable("albums_image_mapping", {
  id: serial("id").primaryKey(),
  album_id: serial("album_id")
    .notNull()
    .references(() => albumsTable.id),
  image_id: serial("image_id")
    .notNull()
    .references(() => imagesTable.id),
})
