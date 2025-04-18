import { pgTable, uuid } from "drizzle-orm/pg-core"

export const authUsers = pgTable(
  "users",
  {
    id: uuid("id").primaryKey(),
  },
  undefined,
  {
    schema: "auth",
  }
)
