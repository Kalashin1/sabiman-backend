import * as jwt from 'jsonwebtoken'

import { Request, Response } from 'express'

import AdminModel from '../../data/models/admin';


export const validateAgent = (req: Request, res: Response, next: Function) => {
  const token: string = req.cookies.admin
  if (token) {
    jwt.verify(token, 'my secrete key', (err, _decodedToken) => {
      if (err) {
        // console.log(err.message)
        res.status(400).json(err.message)
      }
      else {
        // console.log(decodedToken)
        next()
      }
    })
  }
  else {
    // console.log('no cookie')
    res.status(400).json('you are not logged in')
  }
}

export const getAdmin = (req: Request, res: Response) => {
  const token = req.cookies.admin
  console.log()

  if (token) {
    jwt.verify(token, 'my secrete key', async (err, decodedToken) => {
      if (err) {
        console.log(decodedToken.id);
      }
      else {
        // console.log(decodedToken)

        const Admin = await AdminModel.findById(decodedToken.id)

        console.log(Admin)

        res.json(Admin)

      }
    })
  }
  else {
    // console.log('no cookie')
    res.status(400).json('you are not logged in')
  }
}

