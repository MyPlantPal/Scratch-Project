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
        const { username, password } = req.query;
        const data = await User.find({username});
        if (data[0].password === password){
            res.locals.success = true;
            next()
        }
        else {
            res.locals.success = false;
            next();
        }
    }
    catch (err) {
        return next({
            log: `userController.login ERROR : ${err}`,
            message : {
              err : 'userController.login ERROR wrong input'
            }    
    })
    }
}

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
    }
    catch(err) {
        return next({
                log: `userController.createUser ERROR : ${err}`,
                message : {
                  err : 'userController.createUser ERROR wrong input'
                }    
        })
    }
}

module.exports = userController;