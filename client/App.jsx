/**
 * ************************************
 *
 * @module app.jsx
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sum, Brandon Chmiel
 * @date 08/18/2023
 * @description Act as intial call and the way to switch between different routes
 *
 * ************************************
 */

import React from 'react';
import MainPage from './containers/MainPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePlant from './containers/CreatePlant.jsx';
import './stylesheets/styles.css';

// here we need to decide what is initially rendered

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/signin" element={<MainPage />}></Route>
          <Route path="/create" element={<CreatePlant />}></Route>
          {/* <Route path='/update' element={<UpdateTool />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
