const express = require('express');

const router = express.Router();

const { signup, signin, fetchUserDetails } = require('../controllers/auth');
const { authCheck } = require('../middlewares/auth');

router.post('/auth/signup', signup);
router.post('/auth/signin', signin);
router.get('/auth/fetchUserDetails', authCheck, fetchUserDetails);

module.exports = router;