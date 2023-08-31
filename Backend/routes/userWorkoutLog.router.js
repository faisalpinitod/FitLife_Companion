const express = require('express');
const userWorkoutLogRouter = express.Router();
const { UserWorkoutLog } = require('../models/userworkout.model');

// Create a new user workout log entry
userWorkoutLogRouter.post('/userWorkoutLogs', async (req, res) => {
  try {
    const newUserWorkoutLog = new UserWorkoutLog(req.body);
    const savedUserWorkoutLog = await newUserWorkoutLog.save();
    res.json(savedUserWorkoutLog);
  } catch (error) {
    res.status(400).json({ error: 'Error creating user workout log' });
  }
});

// Get all user workout logs
userWorkoutLogRouter.get('/userWorkoutLogs', async (req, res) => {
  try {
    const userWorkoutLogs = await UserWorkoutLog.find();
    res.json(userWorkoutLogs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user workout logs' });
  }
});

// Get a user workout log by ID
userWorkoutLogRouter.get('/userWorkoutLogs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const userWorkoutLog = await UserWorkoutLog.findById(id);
    if (!userWorkoutLog) {
      return res.status(404).json({ error: 'User workout log not found' });
    }
    res.json(userWorkoutLog);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user workout log' });
  }
});

// Update a user workout log by ID
userWorkoutLogRouter.patch('/userWorkoutLogs/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body; 

  try {
    const userWorkoutLog = await UserWorkoutLog.findByIdAndUpdate(id, updates, { new: true });
    if (!userWorkoutLog) {
      return res.status(404).json({ error: 'User workout log not found' });
    }
    res.json(userWorkoutLog);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user workout log' });
  }
});

// Delete a user workout log by ID
userWorkoutLogRouter.delete('/userWorkoutLogs/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUserWorkoutLog = await UserWorkoutLog.findByIdAndDelete(id);
    if (!deletedUserWorkoutLog) {
      return res.status(404).json({ error: 'User workout log not found' });
    }
    res.json({ message: 'User workout log deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user workout log' });
  }
});

module.exports = {userWorkoutLogRouter};
