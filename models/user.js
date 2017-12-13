const mongoose = require('mongoose');
const bcrypt = require('brcyptjs');

const UserSchema = mongoose.Schema({
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

  const User = module.exports = mongoose.model("User", UserSchema);