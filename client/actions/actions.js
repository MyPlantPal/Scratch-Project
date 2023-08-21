/**
 * ************************************
 *
 * @module  actions.js
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Create the indidual actions to call the intended functions
 *
 * ************************************
 */

import * as types from '../constants/actionTypes.js';

// ACTIONS HANDLE PAYLOAD FOR REDUCERS
// OUR ACTIONS ARE JUST LISTENING IN ORDER TO DISPATCH

// ACTIONS PSEUDO CODE

/*
MVP: 
Switch to pages ** if we don't want to do React Router
Pop-up info card display
Add a plant to collection
Delete a card

Stretches: 
Update a card
Handle water date --> updates the most recent water date (payload: newDate) handle this beforehand, fires on click
Render profile image --> when you upload a plant image (payload: img url?), fires on upload img



*/

export const createPlantActionCreator = () => ({
  type: types.CREATE_PLANT,
});

// export const deleteCardActionCreator = marketId => ({
//   type: types.DELETE_CARD,
//   payload: marketId,
// });
// export const setNewLocationActionCreator = (location) => ({
//   type: types.SET_NEW_LOCATION,
//   payload: location,
// });

// export const addMarketActionCreator = () => ({
//   type: types.CREATE_MARKET
// });
