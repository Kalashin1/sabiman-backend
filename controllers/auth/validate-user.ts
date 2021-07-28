import * as jwt from 'jsonwebtoken'

import express from 'express'

import userModel from '../../data/models/user';




const validateUser = (req: express.Request, res: express.Response, next: Function) => {
  const token:string = req.cookies.jwt
  if(token){
    jwt.verify(token, 'my secrete key', (err, _decodedToken) => {
      if(err){
        // console.log(err.message)
        res.status(400).json(err.message)
      }
      else{
        // console.log(decodedToken)
        next()
      }
    })
  }
  else{
    // console.log('no cookie')
    res.status(400).json('you are not logged in')
  }
}

const getUser = (req: express.Request, res: express.Response) => {
  const token = req.cookies.jwt
  console.log()

  if (token) {
    jwt.verify(token, 'my secrete key', async (err, decodedToken) => {
      if(err){
        console.log(decodedToken.id);
      }
      else{
        // console.log(decodedToken)

        const user = await userModel.findById(decodedToken.id)

        console.log(user)

        res.json({ 
          name: user?.name, 
          email: user?.email, 
          id: user?._id,
          phoneNumber: user.phoneNumber,
          state: user.state,
          country: user.country
        })

      }
    })
  }
  else{
    // console.log('no cookie')
    res.status(400).json('you are not logged in')
  }
}

export { validateUser, getUser}
