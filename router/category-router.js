"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_1 = require("../controllers/category/category");
const router = express_1.Router();
/**
 *  * Create a Category
 */
router.post('/category', category_1.createCategory);
router.get('/categories', category_1.getCategories);
router.get('/category/:id', category_1.getCategory);
router.patch('/category/:_id', category_1.editCategory);
router.delete('/category/:id', category_1.deleteCategory);
exports.default = router;
