import * as bcrypt from 'bcrypt'
import AgentSchema from '../Schemas/agent'
import { model } from 'mongoose'
import { AgentModel as _AgentModel, IAgent } from '../../controllers/helper/interface'
// import { ObjectId } from 'mongodb'

const saltRounds = 10

AgentSchema.pre('save', async function (next) {

  if (this.password.length < 15) {
    // * hash the users password before we save it to the databse

    this.password = await bcrypt.hash(this.password, saltRounds)

    next()

  }

  next()

})

AgentSchema.statics.login = async function(phoneNumber:string, password:string) {
  const Agent = await this.findOne({phoneNumber})
  //  param if Agent with the phoneNumber exists then compare passowrds
  console.log(Agent)
  if(Agent){
    const result = await bcrypt.compare(password, Agent.password)
    if(result){
      return Agent
    }
    else {
      throw Error('incorrect password')
    }
  }
  throw Error('incorrect phone number, no user exists with this phone number')
}

AgentSchema.methods.addService = async function (serviceId: string) {
  const agentServices = this.services
  const existingService = agentServices.find(s => s == serviceId);
  if (existingService) {
    throw new Error('Agent has already registered that service')
  } else {
    agentServices.push(serviceId)
    await this.update({ services: agentServices })
    return this.services
  }
}

AgentSchema.methods.removeService = async function (serviceId) {
  const agentServices = this.services
  const existingService = agentServices.find(s => s == serviceId);
  if (existingService) {
    const filteredService = agentServices.filter(s => s !== serviceId)
    await this.update({ services: filteredService })
  } else {
    throw new Error('Agent is not registered to that service')
  }
  
}

AgentSchema.methods.updateBankInfo = async function (Obj: any) {
  const { bank, accountNumber } = Obj
  await this.updateOne({ bank, accountNumber });
}

AgentSchema.methods.updateBusinessInfo = async function (obj: any) {
  const { email, address, website, logo, businessName, taxNumber } = obj
  await this.updateOne({ email, address, website, logo, businessName, taxNumber })
}

const AgentModel = model<IAgent, _AgentModel>('agent', AgentSchema)

export default AgentModel