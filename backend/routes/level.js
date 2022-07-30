const express = require('express');

const router = express.Router();

const { createLevel, updateLevel, fetchAllLevels } = require('../controllers/level');
const { adminCheck } = require('../middlewares/auth');

router.get('/level/get-all-levels', fetchAllLevels);
router.post('/level/create-level', adminCheck, createLevel);
router.post('/level/update-level', adminCheck, updateLevel);

module.exports = router;