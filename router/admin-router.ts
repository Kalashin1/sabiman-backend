import { Router } from "express";

import { createAdminWithUsernameAndPassword, loginAdminWithUsernameAndPassword, logoutAdmin } from "../controllers/admin/admin";

export const router = Router()

router.post('/admin', createAdminWithUsernameAndPassword)

router.post('/admin/login', loginAdminWithUsernameAndPassword)

router.get('/admin/logout', logoutAdmin)