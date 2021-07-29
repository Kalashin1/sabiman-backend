import { model } from "mongoose";

import RatingSchema from '../Schemas/rating'

import { IRating, RatingModel } from "../../controllers/helper/interface";

const Ratings = model<IRating, RatingModel>('rating', RatingSchema)
export default Ratings