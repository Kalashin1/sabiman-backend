"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var admin_1 = require("../controllers/admin/admin");
exports.router = express_1.Router();
exports.router.post('/admin', admin_1.createAdminWithUsernameAndPassword);
exports.router.post('/admin/login', admin_1.loginAdminWithUsernameAndPassword);
exports.router.get('/admin/logout', admin_1.logoutAdmin);
