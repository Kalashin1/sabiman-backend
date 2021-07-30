import { Router } from "express";

import { createAdminWithUsernameAndPassword, loginAdminWithUsernameAndPassword, logoutAdmin, resetPassword } from "../controllers/admin/admin";
import { getAdmin } from "../controllers/admin/validate-admin";

export const router = Router()

router.post('/admin', createAdminWithUsernameAndPassword)

router.post('/admin/login', loginAdminWithUsernameAndPassword)

router.get('/admin/logout', logoutAdmin)

router.get('/admin', getAdmin)

router.post('/admin/resetpassword/:id', resetPassword)