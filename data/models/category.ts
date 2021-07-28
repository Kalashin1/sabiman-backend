import { model } from 'mongoose'

import { ICategory, CategoryModel as _CategoryModel  } from '../../controllers/helper/interface'

import Schema from '../Schemas/category'

const CategoryModel = model<ICategory, _CategoryModel>('category', Schema)

export default CategoryModel
