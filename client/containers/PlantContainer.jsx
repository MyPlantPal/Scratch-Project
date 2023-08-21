/**
 * ************************************
 *
 * @module PlantContainer
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description display the TotalPlantData and PlantDisplay
 *
 * ************************************
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';
import * as types from '../constants/actionTypes';
import PlantDisplay from '../components/PlantDisplay.jsx';
import TotalPlantData from '../components/TotalPlantData.jsx';


//Plant container, called fromt he main page to display the relevant components
const PlantContainer = () => {

  return (
    <div className="plantContainer">
      <h2>Welcome!</h2>
      <TotalPlantData />
      <PlantDisplay />
    </div>
  );
};

export default PlantContainer;
