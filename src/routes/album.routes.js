import express from "express"
import {
    createNewAlbum, getAlbums, addImagesInAlbum
} from "../controllers/album.controller.js"
import { authenticate } from "../middleware/authenticate.js"

const albumRouter = express.Router()

albumRouter.get("/", authenticate, getAlbums)
albumRouter.post("/", authenticate, createNewAlbum)
albumRouter.post("/images", authenticate, addImagesInAlbum)

export default albumRouter
