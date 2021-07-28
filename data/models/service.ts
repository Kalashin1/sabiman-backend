import { model } from 'mongoose'

import { IService, ServiceModel as _ServiceModel } from '../../controllers/helper/interface'
import Schema from '../Schemas/service'

const ServiceSchema = model<IService, _ServiceModel>('service', Schema)

export default ServiceSchema