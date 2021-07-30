import * as express from 'express'
import { Router } from 'express'


// OUR CUSTOM HANDLERS WILL BE IMPORTED HERE
import {
  createUserWithEmailAndPassword,
  loginUserWithPhoneAndPassword,
  logoutUser
 } from '../controllers/auth/auth-cont'


import {  changeAccountStatus, editProfile, resetPassword } from '../controllers/user/user'

 // validating and obtaining user modules
 import { validateUser as _validateUser } from '../controllers/auth/validate-user'

const router = Router();


// AUTH ROUTES

// SIGUP ROUTE AND HANDLER FUNCTION
router.post('/signup', async (req, res) => {
  await createUserWithEmailAndPassword(req, res)
})


// login route and handler function
router.post('/login', async (req, res) => {
  await loginUserWithPhoneAndPassword(req, res)
})


//logout route and handler function
router.get('/logout', logoutUser)

router.get('/', (_req: express.Request, res: express.Response) => {
  console.log('connected')
  res.json({ message: 'connected' })
})


router.post('/dashboard/profile', editProfile)


router.post('/resetpassword/user/:id', resetPassword)

router.post('/changestatus/user/:id/:status', changeAccountStatus)

export { router }
