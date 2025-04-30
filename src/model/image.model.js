import supabase from "../config/supabase.js"
import db from "../config/db.js"
import { imagesTable } from "../config/schema.js"
import { inArray, eq } from "drizzle-orm"

export async function insertImageInBucket(userId, imageName, image) {
  return await supabase.storage
    .from("user-photos")
    .upload(`${userId}/${imageName}`, image, {
      contentType: "image/jpeg",
    })
}

export async function insertImageData( arrayOfImageInfo ) {
  return db
    .insert(imagesTable)
    .values( arrayOfImageInfo )
    .returning()
}

export async function updateFavorites(imageIdsList, toBool) {
  return db
    .update(imagesTable)
    .set({ is_favorite: toBool })
    .where(inArray(imagesTable.id, imageIdsList))
    .returning()
}

export async function updateArchived(imageIdsList, toBool) {
  return db
    .update(imagesTable)
    .set({ is_archived: toBool })
    .where(inArray(imagesTable.id, imageIdsList))
    .returning()
}

export async function getImagesModel(userId) {
  return db.select().from(imagesTable).where(eq(imagesTable.user_id, userId))
}
