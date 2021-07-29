"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var rating_1 = require("../Schemas/rating");
var Ratings = mongoose_1.model('rating', rating_1["default"]);
exports["default"] = Ratings;
