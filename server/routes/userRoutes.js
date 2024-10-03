const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  // ...
});

// Log in a user
router.post('/login', async (req, res) => {
  // ...
});

// ... add more routes as needed

module.exports = router;
