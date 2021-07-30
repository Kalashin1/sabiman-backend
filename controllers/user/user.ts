import { Request, Response } from 'express'

import userModel from '../../data/models/user'
import { accountStatus } from '../helper/interface'


// edit the users info
const editProfile = async (req: Request, res: Response) => {
  const {  state, country, name, phoneNumber, id } = req.body
  // console.log(req.body)
  const user = await userModel.editProfile(id, { state, country, name, phoneNumber})
  res.json(user)
}

export const resetPassword = async (_req: Request, res: Response) => {
  const { id } = _req.params
  const { oldPassword, newPassword } = _req.body
  try {
    const user = await userModel.findById(id)
    const result = await user.resetPassword(oldPassword, newPassword)
    if (result) {
      res.json(user)
    }
    res.status(400).json({ message: "old password is incorrect" })
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}

type requestParams = {
  id: string
  status: accountStatus
}

export const changeAccountStatus = async (_req: Request<requestParams>, res: Response) => {
  const { id, status } = _req.params
  try {
    const user = await userModel.findById(id)
    await user.changeAccountStatus(status)
    res.json({ message: "status updated successfully"})
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}
export { editProfile }