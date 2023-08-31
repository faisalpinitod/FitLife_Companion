const express = require('express');
const progressTrackingRouter = express.Router();
const { ProgressTracking } = require('../models/progress.model');

// Create a new progress tracking entry
progressTrackingRouter.post('/progressTracking', async (req, res) => {
  try {
    const newProgressTracking = new ProgressTracking(req.body);
    const savedProgressTracking = await newProgressTracking.save();
    res.json(savedProgressTracking);
  } catch (error) {
    res.status(400).json({ error: 'Error creating progress tracking entry' });
  }
});

// Get all progress tracking entries for a user
progressTrackingRouter.get('/progressTracking/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const progressTrackingEntries = await ProgressTracking.find({ userId });
    res.json(progressTrackingEntries);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching progress tracking entries' });
  }
});

// Get a progress tracking entry by ID
progressTrackingRouter.get('/progressTracking/entry/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const progressTrackingEntry = await ProgressTracking.findById(id);
    if (!progressTrackingEntry) {
      return res.status(404).json({ error: 'Progress tracking entry not found' });
    }
    res.json(progressTrackingEntry);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching progress tracking entry' });
  }
});

// Update a progress tracking entry by ID
progressTrackingRouter.patch('/progressTracking/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body; 

  try {
    const progressTrackingEntry = await ProgressTracking.findByIdAndUpdate(id, updates, { new: true });
    if (!progressTrackingEntry) {
      return res.status(404).json({ error: 'Progress tracking entry not found' });
    }
    res.json(progressTrackingEntry);
  } catch (error) {
    res.status(500).json({ error: 'Error updating progress tracking entry' });
  }
});

// Delete a progress tracking entry by ID
progressTrackingRouter.delete('/progressTracking/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProgressTrackingEntry = await ProgressTracking.findByIdAndDelete(id);
    if (!deletedProgressTrackingEntry) {
      return res.status(404).json({ error: 'Progress tracking entry not found' });
    }
    res.json({ message: 'Progress tracking entry deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting progress tracking entry' });
  }
});

module.exports = {progressTrackingRouter};
