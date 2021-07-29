"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var service_1 = require("../Schemas/service");
var ServiceSchema = mongoose_1.model('service', service_1["default"]);
exports["default"] = ServiceSchema;
