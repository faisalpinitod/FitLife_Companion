const mongoose = require('mongoose');

const userSchema =  mongoose.Schema({
  username: String,
  age: Number,
  gender: String,
  height: Number,
  weight: Number,
  email: String,
  contactNumber: String
});

const User = mongoose.model('User', userSchema);

module.exports = {User};
