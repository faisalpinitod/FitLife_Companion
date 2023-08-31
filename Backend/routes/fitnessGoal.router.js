const express = require('express');
const fitnessGoalRouter = express.Router();
const { FitnessGoal } = require('../models/fitnessgoal.model');

// Create a new fitness goal
fitnessGoalRouter.post('/fitnessGoals', async (req, res) => {
  try {
    const newFitnessGoal = new FitnessGoal(req.body);
    const savedFitnessGoal = await newFitnessGoal.save();
    res.json(savedFitnessGoal);
  } catch (error) {
    res.status(400).json({ error: 'Error creating fitness goal' });
  }
});

// Get all fitness goals
fitnessGoalRouter.get('/fitnessGoals', async (req, res) => {
  try {
    const fitnessGoals = await FitnessGoal.find();
    res.json(fitnessGoals);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching fitness goals' });
  }
});

// Get a fitness goal by ID
fitnessGoalRouter.get('/fitnessGoals/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const fitnessGoal = await FitnessGoal.findById(id);
    if (!fitnessGoal) {
      return res.status(404).json({ error: 'Fitness goal not found' });
    }
    res.json(fitnessGoal);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching fitness goal' });
  }
});

// Update a fitness goal by ID
fitnessGoalRouter.patch('/fitnessGoals/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body; 

  try {
    const fitnessGoal = await FitnessGoal.findByIdAndUpdate(id, updates, { new: true });
    if (!fitnessGoal) {
      return res.status(404).json({ error: 'Fitness goal not found' });
    }
    res.json(fitnessGoal);
  } catch (error) {
    res.status(500).json({ error: 'Error updating fitness goal' });
  }
});

// Delete a fitness goal by ID
fitnessGoalRouter.delete('/fitnessGoals/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedFitnessGoal = await FitnessGoal.findByIdAndDelete(id);
    if (!deletedFitnessGoal) {
      return res.status(404).json({ error: 'Fitness goal not found' });
    }
    res.json({ message: 'Fitness goal deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting fitness goal' });
  }
});

module.exports = {fitnessGoalRouter};
