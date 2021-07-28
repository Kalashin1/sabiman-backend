import { Router } from 'express'

import {
  createAgent,
  loginAgentWithPhoneAndPassword,
  logoutAgent,
} from '../controllers/agent/auth'

import {
  AddService, removeServices, updateBankInfo, updateBusinessInfo
} from '../controllers/agent/agent'

import { validateAgent as _validateAgent, getAgent} from '../controllers/agent/validate-agent'

export const router = Router()

router.post('/agent', createAgent)

router.post('/agent/login', loginAgentWithPhoneAndPassword)

router.get('/agent/logout', _validateAgent, logoutAgent)

router.get('/agent', getAgent)

router.post('/agent/add-service/:id/:serviceId', AddService)

router.delete('/agent/add-service/:id/:serviceId', removeServices)

router.patch('/agent/bankinfo/:id', updateBankInfo)

router.patch('/agent/businessinfo/:id', updateBusinessInfo)