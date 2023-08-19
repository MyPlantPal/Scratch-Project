import * as types from '../constants/actionTypes.js';
import { useDispatch } from 'react-redux';

// ACTIONS HANDLE PAYLOAD FOR REDUCERS
// OUR ACTIONS ARE LISTENING IN ORDER TO DISPATCH


// Put as Much Logic as Possible in Reducers
// Wherever possible, try to put as much of the logic for calculating a new state into the appropriate reducer, rather than in the code that prepares and dispatches the action (like a click handler). This helps ensure that more of the actual app logic is easily testable, enables more effective use of time-travel debugging, and helps avoid common mistakes that can lead to mutations and bugs.


export const addCardActionCreator = marketId => ({
  type: types.ADD_CARD,
  payload: marketId,
});

export const deleteCardActionCreator = marketId => ({
  type: types.DELETE_CARD,
  payload: marketId,
});
export const setNewLocationActionCreator = (location) => ({
  type: types.SET_NEW_LOCATION,
  payload: location,
});

export const addMarketActionCreator = () => ({
  type: types.CREATE_MARKET
});