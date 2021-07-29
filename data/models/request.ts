import RequestSchema from "../Schemas/request";

import { IRequest, RequestModel } from "../../controllers/helper/interface";

import { model } from "mongoose";

const Requests = model<IRequest, RequestModel>('request', RequestSchema)

export default Requests