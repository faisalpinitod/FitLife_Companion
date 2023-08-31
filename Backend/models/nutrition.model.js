const mongoose = require('mongoose');

const nutritionPlanSchema =  mongoose.Schema({
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
  guidelines: {
    type: String,
    required: true,
  },
  trainerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainer', 
    required: true,
  },
  workoutPlanId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'WorkoutPlan',
    required: true,
  },
});

const NutritionPlan = mongoose.model('NutritionPlan', nutritionPlanSchema);

module.exports = {NutritionPlan};
