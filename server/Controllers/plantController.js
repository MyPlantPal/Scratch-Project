/**
 * ************************************
 *
 * @module PlantController
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Source of controllers for editing and changing state of individual plant cards
 *
 * ************************************
 */

const Plant = require('../models/plantModel');
const User = require('../models/userModel');
const { request } = require('../server');


const plantController = {};


// console.log(data[0])
// res.locals.id = data[0].id;
// res.locals.plants = data[0].plants;
// console.log('res plants', res.locals.plants)

/**
 * @name plantController.getPlant 
 * @description Grabs plant information from the database
 */
plantController.getPlants = async (req, res, next) => {
  try {
    const data = await Plant.find({user: res.locals.id})
    res.locals.data = data;
    return next();
  } catch (err) {
    return next ({
      log: `userController.getPlants ERROR : ${err}`,
      message : {
        err : 'userController.getPlants ERROR wrong input'
      }    
    })
  }
}

/**
 * @name plantController.createPlant
 * @description
 */
plantController.createPlant = async (req, res, next) => {

  try {
    // const { name, type, lastWatered, frequency, soil, lastPotted, sunlight, dateAdded, birthday } = req.body; 
    const { body } = req
    const data = await Plant.create(body);
    console.log(data);
    res.locals.data = data;
    const plantId = data.id;
    const user = await User.findById(data.user);
    user.plants.push(plantId);
    await user.save();
    return next();
  }
  catch(err) {
    return next({
      log: `userController.createPlant ERROR : ${err}`,
      message : {
        err : 'userController.createPlant ERROR wrong input'
      }    
    })
  }
}


/**
 * @name plantController.deletePlant
 * @description
 */
plantController.deletePlant = (req, res, next) => {

}


/**
 * @name plantController.updatePlant
 * @description not sure what we want to do if we want to update info...
 * Give a form to the user with information filled out with current info
 * and have the user replace the information
 */
plantController.updatePlant = (req, res, next) => {

}

module.exports = plantController;

