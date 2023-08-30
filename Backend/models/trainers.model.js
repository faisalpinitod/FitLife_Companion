
const mongoose = require('mongoose');


const trainerSchema = new mongoose.Schema({
    name: String,
    gender: String,
    specialization: String,
    experience: Number,
    email: String,
    contactNumber: String,
  });
  
  const Trainer = mongoose.model('Trainer', trainerSchema);


  module.exports={
    Trainer
  }