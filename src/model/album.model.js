import db from "../config/db.js"
import { albumsTable, albumsImageMapping } from "../config/schema.js"
import { inArray, eq } from "drizzle-orm"

export async function createAlbumAndAddImagesModel(userId, albumName, imagesIds) {

    return db.transaction(async function (transaction) {

        try {

            const albumData = await transaction.insert(albumsTable).values({ album_name: albumName, user_id: userId }).returning()
            const albumId = albumData[0].id

            const values = imagesIds.reduce((acc, imagesId) => {
                acc.push({ album_id: albumId, image_id: imagesId })
                return acc
            }, [])

            const imagesData = await transaction.insert(albumsImageMapping).values(values).returning()

            return { albumData, imagesData }

        } catch (error) {
            console.log(error)
            transaction.rollback()
            return error
        }
    }
    )
}

export async function getAlbumsModel(userId) {
    return db.select().from(albumsTable).where(eq(albumsTable.user_id, userId))
}

export async function createNewAlbumModel(userId, albumName) {
    return db.insert(albumsTable).values({ album_name: albumName, user_id: userId }).returning()
}

export async function deleteAlbumModel( albumId ){
    return db.delete( albumsTable ).where( eq( albumsTable.id , albumId  ) ).returning()
}

export async function addImagesInAlbumModel(albumId, imagesIds) {

    const values = imagesIds.reduce((acc, imagesId) => {
        acc.push({ album_id: albumId, image_id: imagesId })
        return acc
    }, [])

    return db.insert(albumsImageMapping).values(values).returning()

}

export async function getAlbumImagesModel(albumId) {
    return db.select().from(albumsImageMapping).where(eq(albumsImageMapping.album_id, albumId))
}
