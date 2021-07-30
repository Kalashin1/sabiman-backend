import { Router } from "express";

import {
  createRequest,
  getAllRequests,
  getRequest,
  editRequest,
  deleteRequest,
  assignAgent
} from '../controllers/request/request'

import { createRating, agentRating, getRatings, getRating } from '../controllers/request/rating'

let router = Router()

router.post('/request', createRequest)

router.get('/requests', getAllRequests)

router.get('/request/:id', getRequest)

router.patch('/request/:id', editRequest)

router.delete('/request/:id', deleteRequest)

router.put('/request/:id/:agentId', assignAgent)



router.post('/rating', createRating)

router.patch('/rating/:id', agentRating)

router.get('/rating', getRatings)

router.get('/rating/:id', getRating)

export default router