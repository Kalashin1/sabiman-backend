"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.editCategory = exports.getCategory = exports.getCategories = exports.createCategory = void 0;
const category_1 = __importDefault(require("../../data/models/category"));
exports.createCategory = async (req, res) => {
    const { name, icon, image, description } = req.body;
    try {
        const Category = await category_1.default.create({ name, icon, image, description });
        res.json(Category);
    }
    catch (err) {
        console.log(err);
        res.end();
    }
};
exports.getCategories = async (_req, res) => {
    try {
        const Categories = await category_1.default.find({});
        res.json(Categories);
    }
    catch (err) {
        console.log(err);
        res.end();
    }
};
exports.getCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const Category = await category_1.default.findById(id);
        res.json(Category);
    }
    catch (err) {
        console.log(err);
        res.end();
    }
};
exports.editCategory = async (req, res) => {
    const { name, icon, image, description } = req.body;
    const { _id } = req.params;
    try {
        await category_1.default.updateOne({ _id }, { name, icon, image, description });
        const Category = await category_1.default.findById(_id);
        res.json(Category);
    }
    catch (err) {
        console.log(err);
        res.end();
    }
};
exports.deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        await category_1.default.deleteOne({ _id: id });
        let message = "Category Deleted Successfully";
        res.json({ message });
    }
    catch (err) {
        console.log(err);
        res.end();
    }
};
