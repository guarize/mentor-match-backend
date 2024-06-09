const express = require('express');
const { getProfiles } = require('../controllers/profileController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, getProfiles);

module.exports = router;
