import { Schema } from 'mongoose'

import { ICategory } from '../../controllers/helper/interface'

const CategorySchema: Schema<ICategory> = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for the category.'],
    minlength: [5, 'your name cannot be less than five letters.']
  },
  icon: {
    type: String,
    required: [true, 'Please provide an icon.']
  },
  description: {
    type: String,
    required: [true, 'Please provide a description.']
  },
  image: {
    type: String,
    required: [true, 'Please Provide an image for the category.']
  },
})

export default CategorySchema