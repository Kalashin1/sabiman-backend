"use strict";
exports.__esModule = true;
var express_1 = require("express");
var category_1 = require("../controllers/category/category");
var router = express_1.Router();
/**
 *  * Create a Category
 */
router.post('/category', category_1.createCategory);
router.get('/categories', category_1.getCategories);
router.get('/category/:id', category_1.getCategory);
router.patch('/category/:_id', category_1.editCategory);
router["delete"]('/category/:id', category_1.deleteCategory);
exports["default"] = router;
