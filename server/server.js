/**
 * ************************************
 *
 * @module server.js
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description The main server
 *
 * ************************************
 */

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const userRouter = require('./Routers/userRouter');
const plantRouter = require('./Routers/plantRouter');
const dotenv = require('dotenv');

dotenv.config();

/**
 * @name
 * @description handles the npm node environments for starting server
 */
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}
/**
 * @name mongoose.connect
 * @description Link to Mongoose database;
 * Currently unsure how to handle accessing two different db's (Plant/Person)
 */
const MONGO_URI = `mongodb+srv://codesmith:ZkzwAyxC1feUybTC@plantdb.5rwujf8.mongodb.net/`;
// mongoose.connect(MONGO_URI); // original method
mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'test', // sets the name of the DB that our collections are part of
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

/**
 * @name
 * @description Parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * @name
 * @description Setting up routers
 */
app.use('/leaf/user', userRouter);
app.use('/leaf/plant', plantRouter);

/**
 * @name
 * @description Unknown route handler
 */
// app.use((req, res) => res.status(404).send('Page not found'));

/**
 * @name
 * @description Global error handler w/ default handling
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errObj = Object.assign(defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}...`);
});

module.exports = app;
