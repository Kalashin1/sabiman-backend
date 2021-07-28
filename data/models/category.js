"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const category_1 = __importDefault(require("../Schemas/category"));
const CategoryModel = mongoose_1.model('category', category_1.default);
exports.default = CategoryModel;
