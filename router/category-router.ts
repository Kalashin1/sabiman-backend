import { Router } from 'express'

import { createCategory, getCategories, getCategory, editCategory, deleteCategory } from '../controllers/category/category';

const router = Router();

/**
 *  * Create a Category
 */
router.post('/category', createCategory)

router.get('/categories', getCategories)

router.get('/category/:id', getCategory)

router.patch('/category/:_id', editCategory)

router.delete('/category/:id', deleteCategory)


export default router