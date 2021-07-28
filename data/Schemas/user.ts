import * as mongoose from 'mongoose'

import { userInterface } from '../../controllers/helper/interface'
import { isEmail, isPassword } from '../validators/validator'

const userSchema:mongoose.Schema<userInterface> = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide a name for the user'],
    minlength: [5, 'your name cannot be less than five letters']
  },
  email: {
    type: String,
    unique: true,
    validate: [isEmail, 'please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'please provide a password for your user'],
    validate: [isPassword, 'your password should contain a number, uppercase and lowercase letter']
  },
  phoneNumber : {
    type: String,
    required: [true, 'please provide your phone number'],
    unique: true
  },
  country: {
    type: String
  },
  state: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

export default userSchema