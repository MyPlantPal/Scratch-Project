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

//Display the plant data 
const TotalPlantData = () => {
  //This state will display how many plants owned by the user, currently incorrectly styled for redux before abandoned redux. Will need to be restructured to fit current style
  const totalCards = useSelector((store) => store.plants.totalCards);
  //Also defunct, restructured to plant display 
  const plantList = useSelector((store) => store.plants.plantList);
  //Was created with intention of assigning plants a score based on how difficult to raise the plants were, never established. 
  const greenScore = useSelector((store) => store.plants.greenScore);

  //Hard coding testing of the different parts
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
