import { Schema } from 'mongoose'

import { IAdmin } from '../../controllers/helper/interface'

import { isPassword } from '../validators/validator'

const AdminSchema: Schema<IAdmin> = new Schema<IAdmin>({
  username: {
    type: String,
    required: [true, 'Please provide a username for the admin']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password for the admin'],
    validate: [isPassword, 'your password should contain a number, uppercase and lowercase letter']
  }
})

export default AdminSchema