import express from "express"
import {
  signUpUser,
  signInUser,
  addUserInfo,
} from "../controllers/user.controller.js"
import { authenticate } from "../middleware/authenticate.js"

const userRouter = express.Router()

userRouter.post("/signup", signUpUser)
userRouter.post("/signin", signInUser)
userRouter.post("/adduserinfo", authenticate, addUserInfo)

export default userRouter
