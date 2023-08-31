const mongoose = require('mongoose');

const fitnessGoalSchema =  mongoose.Schema({
  goalType: {
    type: String,
    enum: ['Weight Loss', 'Muscle Gain', 'Endurance'],
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  timeline: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
});

const FitnessGoal = mongoose.model('FitnessGoal', fitnessGoalSchema);

module.exports = {
  FitnessGoal
};
