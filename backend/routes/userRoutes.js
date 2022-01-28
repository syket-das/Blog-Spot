const router = require('express').Router();
const User = require('../models/user');
const asyncHandler = require('express-async-handler');

// create a new user
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send('Email and password are required');
    }
    const existUser = await User.findOne({ email });

    if (existUser) {
      res.status(400).json('User already exist');
    }

    if (password.length < 6) {
      res.status(400).send('Password must be at least 6 characters');
    }
    if (!existUser && password.length >= 6) {
      try {
        const user = await User.create({ email, password });
        await user.generateAuthToken();
        res.status(201).json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  })
);

// login a user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send('Email and password are required');
  }

  if (password.length < 6) {
    res.status(400).send('Password must be at least 6 characters');
  }

  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
