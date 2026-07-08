// Write a node.js script to define a schema having fields like name,surname,email,password,city.
// Apply following validations:
// (1)name field must required
// .(2)surname must accept values in small letters.
// (3) Perform Email ID validation on Email field.
// (4) password must have minimum and maximum length should be 8 & 12 respectively
//  (5)city allowed values are “baroda”,”surat” and “ahmedabad” only tell me how to install

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
  .then(() => { console.log("Connected to MongoDB"); })
  .catch(err => console.error("Connection error:", err));

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true  // (1) name field must be required
  },
  surname: {
    type: String,
    lowercase: true // (2) surname must accept values in small letters
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/ // (3) easy email validation
  },
  password: {
    type: String,
    minlength: 8,  // (4) min length
    maxlength: 12  // (4) max length
  },
  city: {
    type: String,
    enum: ['baroda', 'surat', 'ahmedabad'] // (5) allowed values only
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
