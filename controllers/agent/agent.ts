import { Request, Response } from 'express'
import AgentModel from '../../data/models/agent'

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