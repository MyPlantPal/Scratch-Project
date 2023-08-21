/**
 * ************************************
 *
 * @module TotalPlantData
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Display the header of all the relevant plant scores and quantities
 *
 * ************************************
 */

import React from 'react';
import { useSelector } from 'react-redux';

const TotalPlantData = () => {
  const totalCards = useSelector((store) => store.plants.totalCards);
  const plantList = useSelector((store) => store.plants.plantList);
  const greenScore = 1000;

  return (
    <div className="totalPlantDataBox">
      <div className="totalPlantData">
        {/* Total Plants: {totalCards} */}
        Total Plants: 12345
      </div>
      <div className="totalPlantData">Green Score: {greenScore}</div>
      <div className="totalPlantData">Filter Plants</div>
    </div>
  );
};
export default TotalPlantData;
