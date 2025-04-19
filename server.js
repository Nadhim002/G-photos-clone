import express from "express"
import logger from "./src/middleware/logger.js"
import userRouter from "./src/routes/user.routes.js"

const app = express()
const port = 3000

app.use(logger)
app.use( express.json() )
app.use( express.urlencoded( { extended : true } ) )

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.use("/user", userRouter)

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})
