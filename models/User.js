const mongoose = require('mongoose');

// These are equivalent

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({

  googleID: String,
  surname: String,
  forename: String
});

mongoose.model('users', userSchema);
