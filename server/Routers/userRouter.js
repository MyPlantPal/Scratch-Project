/**
 * ************************************
 *
 * @module userRouter
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description user Router
 *
 * ************************************
 */

const express = require('express');
const userRouter = express.Router();
const userController = require('../Controllers/userController');

/**
 * @name userRouter.get
 * @description Takes login data and sends to userController.login express middleware to verify authenticity
 * Returns authenticty.
 */
userRouter.get('/login', userController.login, userController.setSSIDCookie, (req, res) => {
  if (res.locals.success) {
    return res.status(200).send(res.locals.plants);
  }
  else {
    return res.status(400).send('Unsuccessful Login.');
  }
});

/**
 * @name userRouter.post
 * @description Sends a post request to create a user and add to MongoDB
 */
userRouter.post('/createUser', userController.createUser, (req, res) => {
  return res.status(200).send('User created. Please log in.');
});

// patch request -> update password
// .updatePassword -> find user -> update DB

// delete request -> delete user
// .deleteUser -> find person -> remove from database -> return success or fail


module.exports = userRouter; 