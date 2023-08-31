const mongoose = require('mongoose');

const workoutPlanSchema =  mongoose.Schema({
  planName: {
    type: String,
    required: true,
  },
  goal: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  trainerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainer', 
    // required: true,
  },
});

const WorkoutPlan = mongoose.model('WorkoutPlan', workoutPlanSchema);

module.exports = {
  WorkoutPlan
};
