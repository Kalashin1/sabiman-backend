import { ObjectID } from 'mongodb'
import { Schema } from 'mongoose'

import { IService } from '../../controllers/helper/interface'

const ServiceSchema: Schema<IService> = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for the service'],
    minlength: [5, 'your name cannot be less than five letters']
  },
  categoryId: {
    type: ObjectID,
    required: [true, 'Please provide the category the service belongs to']
  },
  description: {
    type: String,
    required: [true, 'Please provide a description']
  }
})

export default ServiceSchema