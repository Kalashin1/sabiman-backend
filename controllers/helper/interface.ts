import { ObjectID } from 'mongodb'
import { Document, Model } from 'mongoose'


interface profileEdit {
  name?: string, 
  phoneNumber?: string,
  state?: string,
  currency?: string,
  country?: string
}


interface userInterface extends Document{
  name: string,
  email: string,
  phoneNumber: string,
  password: string,
  displayImage: string,
  country: string,
  state: string,
  isAdmin: boolean
}

interface userModel extends Model<userInterface>{
  login(phoneNumber:string, password: string): Promise<userInterface>,
  editProfile(id: string, obj: profileEdit): userInterface
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
}

export interface AgentModel extends Model<IAgent>{
  login(phoneNumber: string, password: string): Promise<IAgent>
}

export interface IAdmin extends Document {
  username: string
  password: string
}

export interface AdminModel extends Model<IAdmin>{
  login(username: string, password: string): Promise<IAdmin>
}

export { userInterface, userModel, profileEdit }
