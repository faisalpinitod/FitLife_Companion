const express = require('express');

const { WorkoutPlan } = require('../models/workoutplan.model');

const {authenticateTrainer}=require("../middleware/trainerAuth")


const workoutPlanRouter = express.Router();

// Create a new workout plan
workoutPlanRouter.post('/workoutPlans',authenticateTrainer, async (req, res) => {
  try {
    const workoutPlan = new WorkoutPlan(req.body);
    const savedWorkoutPlan = await workoutPlan.save();
    res.status(201).json(savedWorkoutPlan);
  } catch (error) {
    res.status(400).json({ error: 'Error creating workout plan' });
  }
});



// Get all workout plans
workoutPlanRouter.get('/workoutPlans', async (req, res) => {
    try {
      const workoutPlans = await WorkoutPlan.find();
      res.json(workoutPlans);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching workout plans' });
    }
  });

  

  // Get a specific workout plan by ID
  workoutPlanRouter.get('/workoutPlans/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const workoutPlan = await WorkoutPlan.findById(id);
      if (!workoutPlan) {
        return res.status(404).json({ error: 'Workout plan not found' });
      }
      res.json(workoutPlan);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching workout plan' });
    }
  });

  

// Update a workout plan by ID
workoutPlanRouter.put('/workoutPlans/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const workoutPlan = await WorkoutPlan.findByIdAndUpdate(id, req.body, { new: true });
      if (!workoutPlan) {
        return res.status(404).json({ error: 'Workout plan not found' });
      }
      res.json(workoutPlan);
    } catch (error) {
      res.status(500).json({ error: 'Error updating workout plan' });
    }
  });



// Update specific fields of a workout plan by ID using PATCH
workoutPlanRouter.patch('/workoutPlans/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body; 
  
    try {
      const workoutPlan = await WorkoutPlan.findByIdAndUpdate(id, updates, { new: true });
      if (!workoutPlan) {
        return res.status(404).json({ error: 'Workout plan not found' });
      }
      res.json(workoutPlan);
    } catch (error) {
      res.status(500).json({ error: 'Error updating workout plan' });
    }
  });
  

  
// Delete a workout plan by ID
workoutPlanRouter.delete('/workoutPlans/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const workoutPlan = await WorkoutPlan.findByIdAndDelete(id);
      if (!workoutPlan) {
        return res.status(404).json({ error: 'Workout plan not found' });
      }
      res.json({ message: 'Workout plan deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting workout plan' });
    }
  });
  

module.exports = {workoutPlanRouter};
