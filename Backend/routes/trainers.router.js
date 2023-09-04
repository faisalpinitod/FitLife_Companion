

const express=require("express")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Trainer}=require('../models/trainers.model')
require('dotenv').config();
const trainerRouter=express.Router()

const secretKey = process.env.SECRET_KEY;


trainerRouter.post('/signup', async (req, res) => {
  const { name, gender, specialization, experience, email, contactNumber, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newTrainer = new Trainer({
      name, gender, specialization, experience, email, contactNumber, password: hashedPassword,
    });

    await newTrainer.save();

    res.status(201).json({ message: 'Trainer registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register trainer' });
  }
});

trainerRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const trainer = await Trainer.findOne({ email });
    if (!trainer) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const isPasswordValid = await bcrypt.compare(password, trainer.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const token = jwt.sign({ trainerId: trainer._id }, secretKey);

    res.status(201).json({ "message":"Login Successful",token });
  } catch (error) {
    res.status(500).json({ error: 'Authentication failed' });
  }
});

module.exports={trainerRouter}