import { ObjectID } from 'mongodb'
import { Document, Model } from 'mongoose'


interface profileEdit {
  name?: string, 
  phoneNumber?: string,
  state?: string,
  currency?: string,
  country?: string
}

export type accountStatus = 'active' | 'blocked'

interface userInterface extends Document{
  name: string
  email: string
  phoneNumber: string
  password: string
  displayImage: string
  country: string
  state: string
  status: string
  isAdmin: boolean
  resetPassword(oldPassword: string, newPassword: string): Promise<boolean>
  changeAccountStatus(status: accountStatus): Promise<userInterface>
}

interface userModel extends Model<userInterface>{
  login(phoneNumber:string, password: string): Promise<userInterface>,
  editProfile(id: string, obj: profileEdit): Promise<userInterface>
}


export interface IService extends Document {
  name: string
  _id: ObjectID
  categoryId: ObjectID
  description: string
}

export interface ServiceModel extends Model<IService>{
 
}

export interface ICategory extends Document {
  name: string
  _id: ObjectID
  description: string
  icon: string
  image: string
}

export interface CategoryModel extends Model<ICategory> {
  
}

export interface IAgent extends Document {
  _id: ObjectID
  name: string
  businessName: string
  address: string
  phoneNumber: string
  email: string
  password: string
  website: string
  status: string
  bank: string
  accountNumber: string
  logo: string
  services: string[]
  regDate: Date | string
  taxNumber?: string
  addService(serviceId: string): Promise<string[]>
  removeService(serviceId: string): Promise<string[]>
  updateBankInfo(Obj: any): Promise<IAgent>
  updateBusinessInfo(obj: any): Promise<IAgent>
  resetPassword(oldPassword: string, newPassword: string): Promise<boolean>
  changeAccountStatus(status: accountStatus): Promise<IAgent>
}

export interface AgentModel extends Model<IAgent>{
  login(phoneNumber: string, password: string): Promise<IAgent>
}

export interface IAdmin extends Document {
  username: string
  password: string
  resetPassword(oldPassword: string, newPassword: string): Promise<boolean>
}

export interface AdminModel extends Model<IAdmin>{
  login(username: string, password: string): Promise<IAdmin>
}

export interface IRequest extends Document {
  _id: ObjectID
  serviceId: string
  customerId: string
  agentId: string
  scheduledTime: Date
  type: string
  requestTime: Date
  status: string
  description: string
  images: string[]
}

export interface RequestModel extends Model<IRequest> {

}

export interface IRating extends Document {
  _id: ObjectID
  requestId: string
  cutomerRatingLevel: string
  agentRatingLevel: string
  customerRemark: string
  adminRemark: string
}

export interface RatingModel extends Model<IRating>{}

export { userInterface, userModel, profileEdit }
