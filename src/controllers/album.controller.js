import { createNewAlbumModel, getAlbumsModel, addImagesInAlbumModel, createAlbumAndAddImagesModel, deleteAlbumModel, getAlbumImagesModel } from "../model/album.model.js"

export async function createAlbumAndAddImages(req, res, next) {

    const userId = req.user
    const { albumName, imageIds } = req.body

    console.log(imageIds)

    createAlbumAndAddImagesModel(userId, albumName, imageIds)
        .then(
            data => res.status(200).json(data)
        )
        .catch(error =>
            res.status(400).json(error)
        )

}

export async function createNewAlbum(req, res, next) {

    const { albumName } = req.query
    const userId = req.user

    createNewAlbumModel(userId, albumName)
        .then(data => res.status(200).json(data))
        .catch((error) => {
            res.status(400).json(error)
        })

}

export async function getAlbums(req, res, next) {

    const userId = req.user

    getAlbumsModel(userId)
        .then(data => res.status(200).json(data))
        .catch((error) => {
            res.status(400).json(error)
        })

}

export async function deleteAlbum(req, res, next) {

    const albumId = Number(req.params?.id)

    deleteAlbumModel(albumId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch((error) => {
            console.log(error)
            res.status(400).json(error)
        })
}

export async function addImagesInAlbum(req, res, next) {

    const { albumId, imageIds } = req.body
    const userId = req.user


    addImagesInAlbumModel(albumId, imageIds)
        .then(data => res.status(200).json(data))
        .catch((error) => {
            res.status(400).json(error)
        })

}


export async function getImagesInAlbum(req, res, next) {

    const albumId = Number(req.params?.album_id)

    getAlbumImagesModel(albumId)
        .then(data => {

            const arrayOfImages = data.reduce((acc, curr) => {
                acc.push(curr.image_id)
                return acc
            }, [])

            res.status(200).json(arrayOfImages)
        })
        .catch((error) => {
            res.status(400).json(error)
        })

}
