/**
 * ************************************
 *
 * @module PlantContainer
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sum, Brandon Chmiel
 * @date 08/18/2023
 * @description display the TotalPlantData and PlantDisplay
 *
 * ************************************
 */

import React from 'react';
import PlantDisplay from '../components/PlantDisplay.jsx';
import TotalPlantData from '../components/TotalPlantData.jsx';

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
