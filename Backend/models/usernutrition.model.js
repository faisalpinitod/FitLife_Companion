const mongoose = require('mongoose');

const userNutritionLogSchema =  mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  nutritionPlanId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NutritionPlan', 
    required: true,
  },
  meals: {
    type: String,
    required: true,
  },
  caloricIntake: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
});

const UserNutritionLog = mongoose.model('UserNutritionLog', userNutritionLogSchema);

module.exports = {UserNutritionLog};
