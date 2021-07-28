"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const admin_1 = require("../controllers/admin/admin");
exports.router = express_1.Router();
exports.router.post('/admin', admin_1.createAdminWithUsernameAndPassword);
exports.router.post('/admin/login', admin_1.loginAdminWithUsernameAndPassword);
exports.router.get('/admin/logout', admin_1.logoutAdmin);
