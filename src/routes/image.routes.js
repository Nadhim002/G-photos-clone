import express from "express"
import multer from "multer"
import {
    getImages, 
  imageUpload,
  imagesArchive,
  imagesFavorite,
} from "../controllers/image.controller.js"
import { authenticate } from "../middleware/authenticate.js"

const imageRouter = express.Router()
const upload = multer({ storage: multer.memoryStorage() })

imageRouter.get("/", authenticate , getImages )


imageRouter.post(
  "/upload_image",
  upload.array("images"),
  authenticate,
  imageUpload
)

imageRouter.put("/favorite", authenticate, imagesFavorite)
imageRouter.put("/archive", authenticate, imagesArchive)

export default imageRouter
