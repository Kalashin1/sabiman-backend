"use strict";
exports.__esModule = true;
var express_1 = require("express");
var service_1 = require("../controllers/service/service");
var router = express_1.Router();
router.post('/service', service_1.createService);
router.get('/services', service_1.getServices);
router.get('/service/:id', service_1.getService);
router.patch('/service/:_id', service_1.editService);
router["delete"]('/service/:id', service_1.deleteService);
exports["default"] = router;
