import { Request, Response } from 'express'

import ServiceModel from '../../data/models/service'

export const createService = async (req: Request, res: Response) => {
  const { name, categoryId, description } = req.body
  try {
    const Service = await ServiceModel.create({ name, categoryId, description })
    res.json(Service)
  } catch (err) {
    console.log(err)
    res.end()
  }
}

export const getServices = async (_req: Request, res: Response) => {
  try {
    const Services = await ServiceModel.find({})
    res.json(Services)
  } catch (err) {
    console.log(err)
    res.end()
  }
}

export const getService = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const Service = await ServiceModel.findById(id)
    res.json(Service)
  } catch (err) {
    console.log(err)
    res.end()
  }
}

export const editService = async (req: Request, res: Response) => {
  const { name, categoryId, description } = req.body
  const { _id } = req.params
  try {
    await ServiceModel.updateOne({ _id }, { name, categoryId, description })
    const Service = await ServiceModel.findById(_id)
    res.json(Service)
  } catch (err) {
    console.log(err)
    res.end()
  }
}

export const deleteService = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await ServiceModel.deleteOne({ _id: id })
    let message = "Service Deleted Successfully"
    res.json({ message })
  } catch (err) {
    console.log(err)
    res.end()
  }
}