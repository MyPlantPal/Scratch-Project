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
  const greenScore = useSelector((store) => store.plants.greenScore);

  return (
    <div className="totalPlantDataBox">
      <div class="totalPlantData">
        {/* Total Plants: {totalCards} */}
        Total Plants: 6421654
      </div>
      <div class="totalPlantData">Green Score: {greenScore}</div>
      <div class="totalPlantData">Filter Plants</div>
    </div>
  );
};
export default TotalPlantData;
