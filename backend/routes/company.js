const express = require('express');

const router = express.Router();

const { createCompany, updateCompany, fetchAllCompanies } = require('../controllers/company');
const { adminCheck } = require('../middlewares/auth');

router.get('/company/get-all-companies', fetchAllCompanies);
router.post('/company/create-company', adminCheck, createCompany);
router.post('/company/update-company', adminCheck, updateCompany);

module.exports = router;