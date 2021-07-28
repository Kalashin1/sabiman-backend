import { Schema } from 'mongoose'
import { isPassword, isEmail } from '../validators/validator'
import { IAgent } from '../../controllers/helper/interface'

const AgentSchema: Schema<IAgent> = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
    minlength: [3, 'your name cannot be less than three letters.']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please provide your business phone number.']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.'],
    validate: [isPassword, 'your password should contain a number, uppercase and lowercase letter']
  },
  businessName: {
    type: String
  },
  address: {
    type: String
  },
  email: {
    type: String,
    validate: [isEmail, 'please provide a valid email']
  },
  website: {
    type: String
  },
  status: {
    type: String
  },
  bank: {
    type: String
  },
  accountNumber: {
    type: Number,
    minlength: [10, 'Account number cannot be less than 10 digits'],
    maxlength: [10, 'Account number cannot be more than 10 digits']
  },
  services: {
    type: []
  },
  regDate: {
    type: Date,
    default: () => new Date()
  },
  taxNumber: {
    type: String
  },
  logo: {
    type: String,
  },
})

export default AgentSchema