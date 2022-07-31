const express = require('express');

const router = express.Router();

const { createList, updateList, fetchAllLists } = require('../controllers/list');
const { adminCheck } = require('../middlewares/auth');

router.get('/list/get-all-lists', fetchAllLists);
router.post('/list/create-list', adminCheck, createList);
router.post('/list/update-list', adminCheck, updateList);

module.exports = router;