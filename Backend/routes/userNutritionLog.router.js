const express = require('express');
const userNutritionLogRouter = express.Router();
const { UserNutritionLog } = require('../models/usernutrition.model');

// Create a new user nutrition log entry
userNutritionLogRouter.post('/userNutritionLogs', async (req, res) => {
  try {
    const newUserNutritionLog = new UserNutritionLog(req.body);
    const savedUserNutritionLog = await newUserNutritionLog.save();
    res.json(savedUserNutritionLog);
  } catch (error) {
    res.status(400).json({ error: 'Error creating user nutrition log' });
  }
});

// Get all user nutrition logs
userNutritionLogRouter.get('/userNutritionLogs', async (req, res) => {
  try {
    const userNutritionLogs = await UserNutritionLog.find();
    res.json(userNutritionLogs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user nutrition logs' });
  }
});

// Get a user nutrition log by ID
userNutritionLogRouter.get('/userNutritionLogs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const userNutritionLog = await UserNutritionLog.findById(id);
    if (!userNutritionLog) {
      return res.status(404).json({ error: 'User nutrition log not found' });
    }
    res.json(userNutritionLog);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user nutrition log' });
  }
});

// Update a user nutrition log by ID
userNutritionLogRouter.patch('/userNutritionLogs/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body; 

  try {
    const userNutritionLog = await UserNutritionLog.findByIdAndUpdate(id, updates, { new: true });
    if (!userNutritionLog) {
      return res.status(404).json({ error: 'User nutrition log not found' });
    }
    res.json(userNutritionLog);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user nutrition log' });
  }
});

// Delete a user nutrition log by ID
userNutritionLogRouter.delete('/userNutritionLogs/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUserNutritionLog = await UserNutritionLog.findByIdAndDelete(id);
    if (!deletedUserNutritionLog) {
      return res.status(404).json({ error: 'User nutrition log not found' });
    }
    res.json({ message: 'User nutrition log deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user nutrition log' });
  }
});

module.exports = {userNutritionLogRouter};
