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

/**
 * @name plantController.getPlants 
 * @description Grabs plant information from the database
 */
plantController.getPlants = async (req, res, next) => {
  try {
    const data = await Plant.find({user: res.locals.id})
    res.locals.data = data;
    return next();
  } catch (err) {
    return next ({
      log: `plantController.getPlants ERROR : ${err}`,
      message : {
        err : 'plantController.getPlants ERROR wrong input'
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
    body.user = res.locals.id;
    const data = await Plant.create(body);
    res.locals.data = data;
    const plantId = data.id;
    const user = await User.findById(data.user);
    user.plants.push(plantId);
    await user.save();
    return next();
  }
  catch(err) {
    return next({
      log: `plantController.createPlant ERROR : ${err}`,
      message : {
        err : 'plantController.createPlant ERROR wrong input'
      }    
    })
  }
}

/**
 * @name plantController.deletePlant
 * @description
 */
plantController.deletePlant = async (req, res, next) => {
  try {
    const { name } = req.body;
    const plant = await Plant.findOneAndDelete({name: name});
    // res.locals.id = plant.id; 
    return next();
  } catch (err) {
    return next({
      log: `plantController.deletePlant ERROR : ${err}`,
      message : {
        err : 'plantController.deletePlant ERROR'
      }    
    })
  }
}

/**
 * @name plantController.updatePlant
 * @description not sure what we want to do if we want to update info...
 * Give a form to the user with information filled out with current info
 * and have the user replace the information
 */
plantController.updatePlant = async (req, res, next) => {
  try {
    
    return next(); 
  } catch (err) {
    return next({
      log: `plantController.updatePlant ERROR : ${err}`,
      message : {
        err : 'plantController.updatePlant ERROR'
      }    
    })
  }
}

module.exports = plantController;

