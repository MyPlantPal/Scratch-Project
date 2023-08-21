/**
 * ************************************
 *
 * @module plantRouter
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description plant router
 *
 * ************************************
 */

const express = require('express');
const plantRouter = express.Router();
const plantController = require('../Controllers/plantController')
const userController = require('../Controllers/userController');


// /**
//  * @name PlantRouter-GetPlant
//  * @description Gets the Plant information from data base
//  */
// plantRouter.get('/', plantController.getPlants, (req,res) => {
//   return res.status(200).send(res.locals.data)
// });

plantRouter.get('/getplants', userController.getSSIDCookie, plantController.getPlants, (req, res) => {
  res.status(200).send(res.locals.data);
})

/**
 * @name PlantRouter-CreatePlant
 * @description Grabs plant information from UI and creates a plant and uploads to MongoDB
 */
plantRouter.post('/createplant', userController.getSSIDCookie, plantController.createPlant, (req, res) => {
  return res.status(200).send('Plant added')
})

// /**
//  * @name PlantRouter-UpdatePlant
//  * @description Gets the plant information and lets the user modify certain parts of the plant information
//  * Send that information back as a patch 
//  */
plantRouter.patch('', plantController.updatePlant, (req, res) => {

})

// /**
//  * @name PlantRouter-deletePlant
//  * @description User identifies what plant to find and deletes its from the datahbase
//  */
plantRouter.delete('/deleteplant', userController.getSSIDCookie, plantController.deletePlant,  plantController.getPlants, (req, res) => {
  return res.status(200).send(res.locals.data);
})

module.exports = plantRouter; 

