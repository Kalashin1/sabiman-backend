import { Schema } from 'mongoose'

import { IRating } from '../../controllers/helper/interface'

const RatingSchema = new Schema<IRating>({
  requestId: {
    type: String,
    required: [true, 'Please provide the id of the request you want to rate']
  },
  customerRatingLevel: {
    type: Number,
    required: [true, 'Please provide the rating level']
  },
  customerRemark: {
    type: String,
    required: [true, 'Please provide the id of the request you want to rate']
  },
  agentRatingLevel: {
    type: String
  },
  agentRemark: {
    type: String
  }
})

export default RatingSchema