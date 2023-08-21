/**
 * ************************************
 *
 * @module userController 
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Controls authenticating and tracking user details and passwords
 *
 * ************************************
 */

const User = require('../models/userModel');
// const mongoose = require('mongoose');

const userController = {};

/**
 * @name userController.login
 * @description Takes input user info and tries to match it up to MongoDB
 * If successful, logs in, if not, ??
 */
userController.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const data = await User.find({username: username});
        if (data[0].password === password){
            res.locals.id = data[0].id;
            res.locals.success = true;
            next()
        }
        else {
            res.locals.success = false;
            next();
        }
    } catch (err) {
    return next({
      log: `userController.login ERROR : ${err}`,
      message: {
        err: 'userController.login ERROR wrong input',
      },
    });
  }
};

/**
 * @name userController.createUser
 * @description Creates a user and adds them to MongoDB
 */
userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const data = await User.create({ username, password });
    res.locals.data = data;
    next();
  } catch (err) {
    return next({
      log: `userController.createUser ERROR : ${err}`,
      message: {
        err: 'userController.createUser ERROR wrong input',
      },
    });
  }
};

/**
 * @name userController.setSSIDCookie
 * @description Creates a cookie with the users ID
 */

userController.setSSIDCookie = async (req, res, next) => {
  try {
    res.cookie('ssid', res.locals.id, { httpOnly: true });
    next();
  } catch (err) {
    return next({
      log: `userController.setSSIDCookie ERROR : ${err}`,
      message : {
        err : 'userController.setSSIDCookie ERROR'
      }    
    })
  }
}


module.exports = userController;
