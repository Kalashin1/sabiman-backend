import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt'


// IMPORT THE USER SCHEMA
import userSchema from '../Schemas/user'

import { userInterface, userModel,  profileEdit, accountStatus } from '../../controllers/helper/interface'

const saltRounds = 10



//HASHING USERS PASSWORD
userSchema.pre('save', async function(next){

  if(this.password.length < 15){
    // * hash the users password before we save it to the databse

    this.password = await bcrypt.hash(this.password, saltRounds)

    next()

  }

  next()

})

userSchema.statics.login = async function(phoneNumber:string, password:string) {

  const user = await this.findOne({phoneNumber})
  //  param if user with the phoneNumber exists then compare passowrds
  console.log(user)
  if(user){



    const result = await bcrypt.compare(password, user.password)

    if(result){

      return user

    }

    else {

      throw Error('incorrect password')

    }

  }

  throw Error('incorrect phone number, no user exists with this phone number')

}


userSchema.statics.editProfile = async function (_id: string, obj: profileEdit) {
  const user = await mongoose.model<userInterface, userModel>('user').findById(_id)
  const { country, state, phoneNumber, name } = obj

  user.country = country ?? user.country
  user.state = state ?? user.state
  user.phoneNumber = phoneNumber ?? user.phoneNumber
  user.name = name ?? user.name

  await user.save()
    console.log(user)
  return user
}

userSchema.methods.resetPassword = async function (oldPassword: string, newPassword: string) {
  const result = await bcrypt.compare(oldPassword, this.password)
  if (result) {
    let encryptedPassword = await bcrypt.hash(newPassword, saltRounds)
    await this.updateOne({ password: encryptedPassword })
    return true
  }
  return false
}

userSchema.methods.changeAccountStatus = async function (status: accountStatus) {
  console.log(status)
  switch (status) {
    case "active":
      await this.updateOne({ status })
      break;
    case "blocked":
      await this.updateOne({ status })
      break;
    default:
      throw new Error('status should be either active or blocked')
  }
}

const userModel = mongoose.model<userInterface, userModel>('user',userSchema)

export default userModel
