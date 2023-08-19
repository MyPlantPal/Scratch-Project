const mongoose = require('mongoose');
const { ModuleFilenameHelpers } = require('webpack');
const Schema = mongoose.Schema;

/** 
 * @name userSchema
 * @description Schema for users
 */

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cookie: { type: String },
})

const User = mongoose.model('User', userSchema); 

module.exports = User;
