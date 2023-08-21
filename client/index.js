/**
 * ************************************
 *
 * @module index.js
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description render the server and the pass the store to all relevant components and containers
 *
 * ************************************
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

const root = createRoot(document.getElementById('root')).render(
  // wrap the App in the Provider Component and pass in the store
  <Provider store={store}>
    <App />
  </Provider>
);
