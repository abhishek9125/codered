const express = require('express');

const router = express.Router();

const { createCategory, updateCategory, fetchAllCategories } = require('../controllers/category');
const { adminCheck } = require('../middlewares/auth');

router.get('/category/get-all-categories', fetchAllCategories);
router.post('/category/create-category', adminCheck, createCategory);
router.post('/category/update-category', adminCheck, updateCategory);

module.exports = router;