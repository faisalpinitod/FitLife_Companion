const express = require('express');
const nutritionPlanRouter = express.Router();
const { NutritionPlan } = require('../models/nutrition.model');

// Create a new nutrition plan
nutritionPlanRouter.post('/nutritionPlans', async (req, res) => {
  try {
    const newNutritionPlan = new NutritionPlan(req.body);
    const savedNutritionPlan = await newNutritionPlan.save();
    res.json(savedNutritionPlan);
  } catch (error) {
    res.status(400).json({ error: 'Error creating nutrition plan' });
  }
});

// Get all nutrition plans
nutritionPlanRouter.get('/nutritionPlans', async (req, res) => {
  try {
    const nutritionPlans = await NutritionPlan.find();
    res.json(nutritionPlans);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching nutrition plans' });
  }
});

// Get a nutrition plan by ID
nutritionPlanRouter.get('/nutritionPlans/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const nutritionPlan = await NutritionPlan.findById(id);
    if (!nutritionPlan) {
      return res.status(404).json({ error: 'Nutrition plan not found' });
    }
    res.json(nutritionPlan);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching nutrition plan' });
  }
});

// Update a nutrition plan by ID
nutritionPlanRouter.patch('/nutritionPlans/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body; 

  try {
    const nutritionPlan = await NutritionPlan.findByIdAndUpdate(id, updates, { new: true });
    if (!nutritionPlan) {
      return res.status(404).json({ error: 'Nutrition plan not found' });
    }
    res.json(nutritionPlan);
  } catch (error) {
    res.status(500).json({ error: 'Error updating nutrition plan' });
  }
});

// Delete a nutrition plan by ID
nutritionPlanRouter.delete('/nutritionPlans/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNutritionPlan = await NutritionPlan.findByIdAndDelete(id);
    if (!deletedNutritionPlan) {
      return res.status(404).json({ error: 'Nutrition plan not found' });
    }
    res.json({ message: 'Nutrition plan deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting nutrition plan' });
  }
});

module.exports = {nutritionPlanRouter};
