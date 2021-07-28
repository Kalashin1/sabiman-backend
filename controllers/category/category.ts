import { Request, Response } from 'express'

import CategoryModel from '../../data/models/category'

export const createCategory = async (req: Request, res: Response) => {
  const { name, icon, image, description } = req.body
  try {
    const Category = await CategoryModel.create({name, icon, image, description })
    res.json(Category)
  } catch (err) {
    console.log(err)
    res.end()
  }
}

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const Categories = await CategoryModel.find({})
    res.json(Categories)
  } catch (err) {
    console.log(err)
    res.end()
  }
}

export const getCategory = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const Category = await CategoryModel.findById(id)
    res.json(Category)
  } catch (err) {
    console.log(err)
    res.end()
  }
}

export const editCategory = async (req: Request, res: Response) => {
  const { name, icon, image, description } = req.body
  const { _id } = req.params
  try {
    await CategoryModel.updateOne({ _id }, { name, icon, image, description })
    const Category = await CategoryModel.findById(_id)
    res.json(Category)
  } catch (err) {
    console.log(err)
    res.end()
  }
}

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await CategoryModel.deleteOne({ _id: id })
    let message = "Category Deleted Successfully"
    res.json({ message })
  } catch (err) {
    console.log(err)
    res.end()
  }
}