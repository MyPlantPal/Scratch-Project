const express = require('express');
const userRouter = express.Router();
const userController = require('../Controllers/userController')

/**
 * @name userRouter.get
 * @description Takes login data and sends to userController.login express middleware to verify authenticity
 * Returns authenticty. 
 */
userRouter.get('/login', userController.login, (req, res) => {
  if (res.locals.success) {
    return res.status(200).send('Successful Login.');
  }
  else {
    return res.status(400).send('Unsuccessful Login.');
  }
})

/**
 * @name userRouter.post
 * @description Sends a post request to create a user and add to MongoDB
 */
userRouter.post('/createUser', userController.createUser, (req, res) => {
  return res.status(200).send('User created. Please log in.');
})

// patch request -> update password
// .updatePassword -> find user -> update DB

// delete request -> delete user
// .deleteUser -> find person -> remove from database -> return success or fail

module.exports = userRouter; 