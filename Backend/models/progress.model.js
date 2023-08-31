const mongoose = require('mongoose');

const progressTrackingSchema =  mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  bodyMeasurements: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
});

const ProgressTracking = mongoose.model('ProgressTracking', progressTrackingSchema);

module.exports = {ProgressTracking};
