import React from 'react';
import PlantDisplay from '../components/PlantDisplay.jsx';
import TotalPlantData from '../components/TotalPlantData.jsx';

const PlantContainer = () => {
  return (
    <div className="plantContainer">
      <TotalPlantData />
      <PlantDisplay />
    </div>
  );
};

export default PlantContainer;
