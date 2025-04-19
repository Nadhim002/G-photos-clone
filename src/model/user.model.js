import supabase from "../config/supabase.js"
import db from "../config/db.js"
import { usersTable } from "../config/schema.js"
import { eq } from "drizzle-orm"

export async function signUpUserModel(email, password) {
  return await supabase.auth.signUp({
    email: email,
    password: password,
  })
}

export async function signInUserModel(email, password) {
  return await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })
}

export async function addUserInfoModel(userId, userName, phoneNumber) {
  return db
    .update(usersTable)
    .set({ name: userName, phone_number: phoneNumber })
    .where(eq(usersTable.id, userId))
    .returning()
}
