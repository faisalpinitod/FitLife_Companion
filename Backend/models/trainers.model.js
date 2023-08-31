
const mongoose = require('mongoose');


const trainerSchema =  mongoose.Schema({
    name: String,
    gender: String,
    specialization: String,
    experience: Number,
    email: String,
    contactNumber: String,
    password:String
  });
  
  const Trainer = mongoose.model('Trainer', trainerSchema);


  module.exports={
    Trainer
  }