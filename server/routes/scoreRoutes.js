const express = require('express');
const Score = require('../models/score');
const auth = require('../middleware/auth');

const router = express.Router();

// Submit a score for a quiz
router.post('/', auth, async (req, res) => {
  // ...
});

// Get scores for a quiz
router.get('/:quizId', async (req, res) => {
  // ...
});

// ... add more routes as needed

module.exports = router;
