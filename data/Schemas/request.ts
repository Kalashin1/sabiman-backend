import { Schema } from 'mongoose'

import { IRequest } from '../../controllers/helper/interface'

const RequestSchema = new Schema<IRequest>({
  serviceId: {
    type: String,
    required: [true, "please provide a service Id for the request"]
  },
  customerId: {
    type: String,
    required: [true, "please provide a customer Id for the request"]
  },
  agentId: {
    type: String
  },
  scheduledTime: {
    type: Date,
    required: [true, "please provide a scheduled time for the request"]
  },
  type: {
    type: String,
    required: [true, "please provide the type of request"]
  },
  requestTime: {
    type: Date,
    default: () => new Date()
  },
  status: {
    type: String,
    default: "pending"
  },
  description: {
    type: String,
    required: [true, "Please provide a little description of the problem or service"]
  },
  images: {
    type: [String],
    required: [true, "Please provide image description of the problem"]
  }
})

export default RequestSchema