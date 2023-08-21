/**
 * ************************************
 *
 * @module app.jsx
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Act as intial call and the way to switch between different routes
 *
 * ************************************
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './stylesheets/styles.css'

import SignIn from './containers/SignIn.jsx';
import SignUp from './containers/SignUp.jsx';
import MainPage from './containers/MainPage.jsx';
import CreatePlant from './containers/CreatePlant.jsx';

// here we need to decide what is initially rendered

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<SignIn />}></Route>
              <Route path='/signup' element={<SignUp />}></Route>
              <Route path='/home' element={<MainPage />}></Route>
              <Route path='/create' element={<CreatePlant />}></Route>
              {/* <Route path='/update' element={<UpdateTool />}></Route> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
