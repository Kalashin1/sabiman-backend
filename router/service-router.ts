import { Router } from 'express'

import {
  createService, getService, getServices, editService, deleteService
} from '../controllers/service/service';

const router = Router();


router.post('/service', createService)

router.get('/services', getServices)

router.get('/service/:id', getService)

router.patch('/service/:_id', editService)

router.delete('/service/:id', deleteService)

export default router