/**
 * ************************************
 *
 * @module userModel
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description The Scheme for the user models, and relevant data to be added to them
 *
 * ************************************
 */

const mongoose = require('mongoose');
const { ModuleFilenameHelpers } = require('webpack');
const Schema = mongoose.Schema;
const Plant = require('./plantModel')

/**
 * @name userSchema
 * @description Schema for users
 */

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cookie: { type: String },
  plants: [{
    type: Schema.Types.ObjectId,
    ref: 'Plant'
  }],
})


const User = mongoose.model('User', userSchema); 


module.exports = User;