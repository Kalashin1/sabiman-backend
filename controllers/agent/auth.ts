import { Request, Response } from 'express'
import AgentModel from '../../data/models/agent'
import { createToken, maxAge } from '../helper/jwt-handler'

export const createAgent = async (req: Request, res: Response) => {
  const { name, phoneNumber, password } = req.body
  try {
    const Agent = await AgentModel.create({ name, phoneNumber, password })
    const token = createToken(Agent._id)
    res.cookie('agent', token, { httpOnly: true, maxAge: maxAge * 1000})
    res.json(Agent)
  } catch (err) {
    console.log(err)
  }
}

export const loginAgentWithPhoneAndPassword = async (req: Request, res: Response) => {

  const { phoneNumber, password } = req.body // retrieve phone and password
  console.log(req.body)

  try {

    const Agent = await AgentModel.login(phoneNumber, password)
    console.log(Agent)

    const token = createToken(Agent._id)       // create a token for that user

    res.cookie('agent', token, { httpOnly: true, maxAge: maxAge * 1000 }) // create a cookie to hold the jwt

    res.status(200).end()

  }
  catch (err) {
    console.log(err)
    res.status(400).end()
  }
}

export const logoutAgent = async (req: Request, res: Response) => {

  if (typeof req.cookies.agent !== undefined) { // if cookie with the value of jwt exists

    // res.cookie('jwt', '', {maxAge: 1}) // delete the cookie

    res.clearCookie('agent')

    res.json({ message: 'logout successfull' })  // send the user a logout successfull message
  }
  else {
    res.json({ message: 'you are not logged in' }) // notify the user that they are not logged in
  }
}