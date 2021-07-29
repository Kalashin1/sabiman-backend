"use strict";
exports.__esModule = true;
var request_1 = require("../Schemas/request");
var mongoose_1 = require("mongoose");
var Requests = mongoose_1.model('request', request_1["default"]);
exports["default"] = Requests;
