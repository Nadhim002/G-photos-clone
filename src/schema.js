import {
  boolean,
  date,
  pgTable,
  serial,
  text,
  uuid,
} from "drizzle-orm/pg-core"
import { authUsers } from "./authSchema.js"

export const imagesTable = pgTable(
  "images_table",
  {
    id: serial("id").primaryKey(),
    image_name: text("image_name").notNull(),
    is_favorite: boolean("is_favorite").default(false),
    is_archived: boolean("is_archived").default(false),
    created_at: date("created_at").defaultNow(),
    user_id: uuid("user_id")
      .notNull()
      .references(() => authUsers.id),
  },
  undefined,
  {
    schema: "public",
  }
)
