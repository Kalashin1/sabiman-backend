import { Request, Response } from "express";

import Requests from "../../data/models/request";

export const createRequest = async (req: Request, res: Response) => {
  const { customerId, serviceId, scheduledTime, type, description, images } = req.body
  try {
    const Request = await Requests.create({ customerId, serviceId, scheduledTime, type, description, images })
    res.json(Request)
  } catch(err) {
    console.log(err)
    res.status(400).json(err.message)
  }
}

export const getAllRequests = async (_req: Request, res: Response) => {
  try {
    const requests = await Requests.find({})
    res.json(requests)
  } catch (err) {
    console.log(err)
    res.status(400).json(err.message)
  }
}

export const getRequest = async (_req: Request, res: Response) => {
  const { id } = _req.params
  try {
    const Request = await Requests.findById(id)
    res.json(Request)
  } catch (err) {
    console.log(err)
    res.status(400).json(err.message)
  }
}

export const deleteRequest = async (_req: Request, res: Response) => {
  const { id } = _req.params
  try {
    await Requests.remove({ _id: id })
    let message = "Request Deleted successfully";
    res.json({ message })
  } catch (err) {
    console.log(err)
    res.status(400).json(err.message)
  }
}

export const editRequest = async (_req: Request, res: Response) => {
  const { id } = _req.params
  const { type, status } = _req.body
  try {
    const Request = await Requests.findById(id)
    await Request.updateOne({ type, status })
    let message = "Request Updated successfully"
    res.json({message})
  } catch (err) {
    console.log(err)
    res.status(400).json(err.message)
  }
}

export const assignAgent = async (_req: Request, res: Response) => {
  const { id, agentId } = _req.params
  try {
    const Request = await Requests.findById(id)
    await Request.updateOne({ agentId })
    let message = "Request Updated successfully"
    res.json({ message })
  } catch (err) {
    console.log(err)
    res.status(400).json(err.message)
  }
}