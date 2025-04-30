import express from "express"
import logger from "./src/middleware/logger.js"
import userRouter from "./src/routes/user.routes.js"
import imageRouter from "./src/routes/image.routes.js"
import albumRouter from "./src/routes/album.routes.js"
import cors from "cors"

const app = express()
const port = 3000

app.use(cors())
app.use(logger)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.use("/user", userRouter )
app.use("/image", imageRouter )
app.use("/album", albumRouter )

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})
