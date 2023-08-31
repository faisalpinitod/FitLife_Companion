const mongoose = require('mongoose');
const {WorkoutPlan}=require("./workoutplan.model")

const userWorkoutLogSchema =  mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  workoutPlanId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'WorkoutPlan', 
    required: true,
  },
  exercises: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
});

const UserWorkoutLog = mongoose.model('UserWorkoutLog', userWorkoutLogSchema);

module.exports = {
    UserWorkoutLog
};
