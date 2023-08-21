/**
 * ************************************
 *
 * @module plantModel
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description The Schema for the plants themselves and what data to be added to them
 *
 * ************************************
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel')

/**
 * @name plantSchema
 * @description Schema for plants
 */
const plantSchema = new Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String /* required: true */ },
  lastWatered: { type: Date },
  frequency: { type: Number },
  soil: { type: String },
  lastPotted: { type: Date },
  sunlight: { type: String },
  // photo: { type: Image },
  dateAdded: { type: Date },
  birthday: { type: Date },
  user: { 
      type : Schema.Types.ObjectId,
      ref: 'User',
      required : true
 }
})


const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
