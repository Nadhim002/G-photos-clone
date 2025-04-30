import db from "../config/db.js"
import { albumsTable, albumsImageMapping } from "../config/schema.js"
import { inArray, eq } from "drizzle-orm"

export async function createNewAlbumModel(userId, albumName) {
    return db.insert(albumsTable).values({ album_name: albumName, user_id: userId }).returning()
}

export async function getAlbumsModel(userId) {
    return db.select().from(albumsTable).where(eq(albumsTable.user_id, userId))
}

export async function addImagesInAlbumModel(albumId, imagesIds) {

    const values = imagesIds.reduce((acc, imagesId) => {

        acc.push({ album_id: albumId, image_id: imagesId })

        return acc
    }, [])

    return db.insert(albumsImageMapping).values(values).returning()

}

// export async function getAlbumImagesModel(albumId) {
//     return db.select().from(albumsImageMapping).where(eq(albumsImageMapping.album_id, albumId))
// }



// export const albumsTable = pgTable("albums_table", {
//   id: serial("id").primaryKey(),
//   album_name: text("album_name").notNull(),
//   user_id: uuid("user_id")
//     .notNull()
//     .references(() => usersTable.id),
// })

// export const albumsImageMapping = pgTable("albums_image_mapping", {
//   id: serial("id").primaryKey(),
//   album_id: serial("album_id")
//     .notNull()
//     .references(() => albumsTable.id),
//   image_id: serial("image_id")
//     .notNull()
//     .references(() => imagesTable.id),
// })
