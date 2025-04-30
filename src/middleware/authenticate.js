import jwt from "jsonwebtoken"
import { config } from "dotenv"
config({ path: ".env" })

export function authenticate(req, res, next) {
  const token =
    req.header("x-auth-token") ||
    req.header("Authorization")?.replace("Bearer ", "")

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = decoded.sub

    next()
  } catch (err) {
    console.error("JWT verification failed:", err)
    res.status(401).json({ msg: "Token is not valid" })
  }
}
