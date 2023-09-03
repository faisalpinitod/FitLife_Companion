const express = require('express');
const userWorkoutLogRouter = express.Router();
const { UserWorkoutLog } = require('../models/userworkout.model');
const { authenticateUser } = require('../middleware/userAuth');


// Create a new user workout log entry
userWorkoutLogRouter.post('/createlog',authenticateUser, async (req, res) => {
  try {
    const userId=req.userId
    const {date ,workoutPlanId,exercises,duration,selectedPlan}=req.body
    const newUserWorkoutLog = new UserWorkoutLog({date , workoutPlanId,exercises,duration,userId,selectedPlan});
    const savedUserWorkoutLog = await newUserWorkoutLog.save();
    res.status(201).json(savedUserWorkoutLog);
  } catch (error) {
    res.status(400).json({ error: 'Error creating user workout log' });
  }
});


userWorkoutLogRouter.get('/user',authenticateUser, async (req, res) => {

  const userId=req.userId
  try {
 
    const userWorkoutLog = await UserWorkoutLog.find({userId:userId}).exec();
    
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
