const express = require('express');

const router = express.Router();

const { createPromotion, enablePromotion, disablePromotion, fetchAllPromotions, activePromotion } = require('../controllers/promotion');
const { adminCheck } = require('../middlewares/auth');

router.get('/promotion/active-promotion', activePromotion);
router.get('/promotion/get-all-promotions', fetchAllPromotions);
router.post('/promotion/create-promotion', adminCheck, createPromotion);
router.post('/promotion/enable-promotion', adminCheck, enablePromotion);
router.post('/promotion/disable-promotion', adminCheck, disablePromotion);

module.exports = router;