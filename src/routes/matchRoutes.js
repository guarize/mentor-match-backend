const express = require('express');
const { createMatch, getMatches } = require('../controllers/matchController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authenticateToken, createMatch);
router.get('/', authenticateToken, getMatches);

module.exports = router;
