import {
  signUpUserModel,
  signInUserModel,
  addUserInfoModel,
} from "../model/user.model.js"

export async function signUpUser(req, res, next) {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const { data, error } = await signUpUserModel(email, password)

    if (error) {
      return res.status(404).json({ error: error.message })
    }

    return res.status(201).json({ data })

  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong.' })
  }
}

export async function signInUser(req, res, next) {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' })
    }

    const { data, error } = await signInUserModel(email, password)

    console.log(data, error)

    if (error) {
      return res.status(400).json({ error })
    }

    res.status(200).json({ data })

  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
}


export function addUserInfo(req, res, next) {

  const { userName, phoneNumber } = req.body
  const userId = req.user

  addUserInfoModel(userId, userName, phoneNumber)
    .then((createdRow) => res.status(200).json(createdRow))
    .catch((err) => res.status(400).json(err))
    
}
