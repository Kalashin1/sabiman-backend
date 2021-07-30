import { Request, Response } from 'express'
import AgentModel from '../../data/models/agent'
import { accountStatus } from '../helper/interface';

export const AddService = async (req: Request, res: Response) => {
  const { id, serviceId } = req.params
  try {
    const Agent = await AgentModel.findById(id);
    const services = await Agent.addService(serviceId)
    res.json(services)
  } catch (err) {
    console.log(err)
    res.end()
  }
}

export const removeServices = async (req: Request, res: Response) => {
  const { id, serviceId } = req.params
  try {
    const Agent = await AgentModel.findById(id)
    await Agent.removeService(serviceId)
    const message = 'service deleted successfully'
    res.json({message})
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}

export const updateBankInfo = async (req: Request, res: Response) => {
  const { id } = req.params
  const { bank, accountNumber } = req.body
  try {
    const Agent = await AgentModel.findById(id)
    await Agent.updateBankInfo({ bank, accountNumber })
    const message = 'Bank info updated successfully'
    res.json({ message })
  } catch (err) {
    console.log(err)
    res.status(400).json(err.message)
  }
}

export const updateBusinessInfo = async (req: Request, res: Response) => {
  const { id } = req.params
  const { email, address, website, logo, businessName, taxNumber } = req.body
  
  try {
    const Agent = await AgentModel.findById(id)
    await Agent.updateBusinessInfo({ email, address, website, logo, businessName, taxNumber })
    const message = 'Business Info updated successfully'
    res.json({ message })
  } catch (err) {
    console.log(err)
    res.status(400).json(err.message)
  }

}

type requestParams = {
  id: string
  status: accountStatus
}


export const changeAccountStatus = async (_req: Request<requestParams>, res: Response) => {
  const { id, status } = _req.params
  try {
    const Agent = await AgentModel.findById(id)
    await Agent.changeAccountStatus(status)
    res.json({ message: "status updated successfully" })
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}

export const resetPassword = async (_req: Request, res: Response) => {
  const { id } = _req.params
  const { oldPassword, newPassword } = _req.body
  try {
    const Agent = await AgentModel.findById(id)
    const result = await Agent.resetPassword(oldPassword, newPassword)
    if (result) {
      res.json(Agent)
    }
    res.status(400).json({ message: "old password is incorrect" })
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}