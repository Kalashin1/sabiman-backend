import { Request, Response } from 'express'

import AdminModel from '../../data/models/admin'
import { createToken, maxAge } from '../helper/jwt-handler'

// CREATING A NEW Admin
export const createAdminWithUsernameAndPassword = async (req: Request, res: Response) => {

  const { password, username } = req.body

  // console.log(req.body)

  try {

    // IF THE Admin IS CREATED SUCCESSFULLY CREATE A JWT WITH THEIR ID
    const Admin = await AdminModel.create({  password, username })


    // CREATE A COOKIE TO HOLD THE JWT
    const token = createToken(Admin._id)

    // send the cookie back to the Admin agent
    res.cookie('admin', token, { httpOnly: true, maxAge: maxAge * 1000 }) // in production add secure:true

    res.status(200).json(Admin)
  }
  catch (err) {
    console.log(err) // handles the error if ther is an error
  }
}

// Login a Admin
export const loginAdminWithUsernameAndPassword = async (req: Request, res: Response) => {

  const { username, password } = req.body // retrieve phone and password
  console.log(req.body)

  try {

    const Admin = await AdminModel.login(username, password)
    console.log(Admin)
    // login with phone and password
    // login with phone and password

    const token = createToken(Admin._id)       // create a token for that Admin

    res.cookie('admin', token, { httpOnly: true, maxAge: maxAge * 1000 }) // create a cookie to hold the admin

    res.status(200).end()

  }
  catch (err) {
    console.log(err)
  }
}

export const logoutAdmin = async (req: Request, res: Response) => {

  if (typeof req.cookies.admin !== undefined) { // if cookie with the value of admin exists

    // res.cookie('admin', '', {maxAge: 1}) // delete the cookie

    res.clearCookie('admin')

    res.json({ message: 'logout successfull' })  // send the Admin a logout successfull message
  }
  else {
    res.json({ message: 'you are not logged in' }) // notify the Admin that they are not logged in
  }
}

export const resetPassword = async (req: Request, res: Response) => {
  const { id } = req.params
  const { oldPassword, newPassword } = req.body
  try {
    const Admin = await AdminModel.findById(id)
    const result = await Admin.resetPassword(oldPassword, newPassword)
    if (result) {
      res.json(Admin)
    }
    res.status(400).json({ message: "old password is incorrect" })
  } catch (err) {
    console.log(err)
    res.status(400).json(err.message)
  }
}