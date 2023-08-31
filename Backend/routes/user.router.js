const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../models/user.model');

const userRouter=express.Router()


userRouter.post('/signup', async (req, res) => {
  const { name, age, gender, height, weight, email, contactNumber, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name, age, gender, height, weight, email, contactNumber,password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

userRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const token = jwt.sign({ userId: user._id }, 'secret_key');

    res.status(201).json({ "message":"Login Successful",token });
  } catch (error) {
    res.status(500).json({ error: 'Authentication failed' });
  }
});

module.exports = {
  userRouter
};




