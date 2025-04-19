import {
  signUpUserModel,
  signInUserModel,
  addUserInfoModel,
} from "../model/user.model.js"

export async function signUpUser(req, res, next) {
  const { email, password } = req.body

  try {
    const { data, error } = await signUpUserModel(email, password)
    console.log(data)
    res.send(data)
  } catch (error) {
    console.log(error)
  }
}

export async function signInUser(req, res, next) {
  const { email, password } = req.body
  const { data, error } = await signInUserModel(email, password)

  if (error) {
    res.send(error)
    return
  }
  res.send(data)
}

export function addUserInfo(req, res, next) {
  const { userId, userName, phoneNumber } = req.body
  addUserInfoModel(userId, userName, phoneNumber)
    .then((createdRow) => res.status(200).json(createdRow))
    .catch((err) => res.status(400).json(err))
}
