const mongoose = require('mongoose');
const bcrypt = require('brcyptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : {
      type: String,
      index: true
    },
    password: {
      type: String
    },
    email: {
      type: String
    },
    name: {
      type: String
    }
  });

  const User =  mongoose.model("User", UserSchema);
  module.exports = User;