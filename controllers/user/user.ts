import express from 'express'

import userModel from '../../data/models/user'


// edit the users info
const editProfile = async (req: express.Request, res: express.Response) => {
  const {  state, country, name, phoneNumber, id } = req.body
  // console.log(req.body)
  const user = await userModel.editProfile(id, { state, country, name, phoneNumber})
  res.json(user)
}

export { editProfile }