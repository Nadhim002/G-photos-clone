import express from "express"
import {
    createNewAlbum, getAlbums, addImagesInAlbum , createAlbumAndAddImages ,deleteAlbum ,getImagesInAlbum
} from "../controllers/album.controller.js"
import { authenticate } from "../middleware/authenticate.js"

const albumRouter = express.Router()

albumRouter.get("/", authenticate, getAlbums)
albumRouter.get("/:album_id", authenticate, getImagesInAlbum )


albumRouter.post("/album_and_image" , authenticate , createAlbumAndAddImages )
albumRouter.post("/", authenticate, createNewAlbum)
albumRouter.delete("/:id" , authenticate , deleteAlbum )

albumRouter.post("/images", authenticate, addImagesInAlbum)

export default albumRouter
