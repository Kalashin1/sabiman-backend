"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var category_1 = require("../Schemas/category");
var CategoryModel = mongoose_1.model('category', category_1["default"]);
exports["default"] = CategoryModel;
