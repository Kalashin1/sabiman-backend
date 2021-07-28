import * as bcrypt from 'bcrypt'
import { model } from "mongoose";
import AdminSchema from "../Schemas/admin";
import { IAdmin, AdminModel as _AdminModel } from "../../controllers/helper/interface";

const saltRounds = 10

AdminSchema.pre('save', async function (next) {
  if (this.password.length < 15) {
    // * hash the users password before we save it to the databse

    this.password = await bcrypt.hash(this.password, saltRounds)

    next()

  }

  next()

})

AdminSchema.statics.login = async function (username: string, password: string) {
  const Admin = await this.findOne({ username })
  //  param if Admin with the username exists then compare passowrds
  console.log(Admin)
  if (Admin) {
    const result = await bcrypt.compare(password, Admin.password)
    if (result) {
      return Admin
    }
    else {
      throw Error('incorrect password')
    }
  }
  throw Error('incorrect phone number, no user exists with this phone number')
}


const AdminModel = model<IAdmin, _AdminModel>('admin', AdminSchema)

export default AdminModel