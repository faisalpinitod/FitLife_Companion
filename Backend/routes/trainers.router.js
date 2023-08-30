

const express=require("express")
const {Trainer}=require('../models/trainers.model')

const trainerRouter=express.Router()











// Create a new trainer
trainerRouter.post('/trainers', async (req, res) => {
    try {
      const newTrainer = new Trainer(req.body);
      const savedTrainer = await newTrainer.save();
      res.status(201).json(savedTrainer);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  // Get all trainers
  trainerRouter.get('/trainers', async (req, res) => {
    try {
      const trainers = await Trainer.find();
      res.json(trainers);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  // Get a specific trainer by ID
  trainerRouter.get('/trainers/:id', async (req, res) => {
    try {
      const trainerId = req.params.id;
      const trainer = await Trainer.findById(trainerId);
      if (trainer) {
        res.json(trainer);
      } else {
        res.status(404).json({ error: 'Trainer not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  // Update a trainer by ID
  trainerRouter.put('/trainers/:id', async (req, res) => {
    try {
      const trainerId = req.params.id;
      const updatedTrainer = req.body;
      const trainer = await Trainer.findByIdAndUpdate(trainerId, updatedTrainer, {
        new: true,
      });
      if (trainer) {
        res.json(trainer);
      } else {
        res.status(404).json({ error: 'Trainer not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  // Delete a trainer by ID
  trainerRouter.delete('/trainers/:id', async (req, res) => {
    try {
      const trainerId = req.params.id;
      const deletedTrainer = await Trainer.findByIdAndDelete(trainerId);
      if (deletedTrainer) {
        res.json(deletedTrainer);
      } else {
        res.status(404).json({ error: 'Trainer not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });



  module.exports={
    trainerRouter
  }