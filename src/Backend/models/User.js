const mongoose = require('mongoose');
const { Schema } = mongoose;
// Scheme is a kind of model that tells us how the database would look like and what kind of data can it store generally
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  const User = mongoose.model('user', UserSchema);
//   The above line creates a model for the above scheme that gets stored in the database
  module.exports = User;