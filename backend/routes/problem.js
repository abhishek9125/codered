const express = require('express');

const router = express.Router();

const { createProblem, updateProblem, fetchAllProblems } = require('../controllers/problem');
const { adminCheck } = require('../middlewares/auth');

router.get('/problem/get-all-problems', fetchAllProblems);
router.post('/problem/create-problem', adminCheck, createProblem);
router.post('/problem/update-problem', adminCheck, updateProblem);

module.exports = router;