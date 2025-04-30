import { createNewAlbumModel, getAlbumsModel, addImagesInAlbumModel } from "../model/album.model.js"

export async function createNewAlbum(req, res, next) {

    const { albumName } = req.body
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


export async function addImagesInAlbum(req, res, next) {
    const {  albumId, imageIds } = req.body
    const userId = req.user 


    addImagesInAlbumModel(albumId, imageIds)
        .then(data => res.status(200).json(data))
        .catch((error) => {
            res.status(400).json(error)
        })

}