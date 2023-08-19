const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** 
 * @name plantSchema
 * @description Schema for plants
 */
const plantSchema = new Schema({
  name: { type: String },
  type: { type: String, required: true },
  lastWatered: { type: Date },
  frequency: { type: Number },
  soil: { type: String },
  lastPotted: { type: Date },
  sunlight: { type: String },
  // photo: { type: Image },
  dateAdded: { type: Date },
  birthday: { type: Date }
})

const Plant = mongoose.model('Plant', plantSchema); 

module.exports = Plant;