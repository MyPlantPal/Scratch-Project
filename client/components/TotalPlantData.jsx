import React from 'react';
import { useSelector } from 'react-redux';
import PlantDisplay from '../components/PlantDisplay.jsx';

const TotalPlantData=()=>{

 const totalCards = useSelector((store) => store.plants.totalCards);
 const plantList = useSelector((store) => store.plants.plantList);
    const greenScore = 1000;
    

    return (
      <div className="plantContainer">
        <div className="totalPlantDataBox">
          <div class="totalPlantData">
            {/* Total Plants: {totalCards} */}
            Total Plants: 6421654
          </div>
          <div class="totalPlantData">Green Score: {greenScore}</div>
          <div class="totalPlantData">Filter Plants</div>
        </div>

        <div className="plantDisplay">
          {/* <PlantDisplay
              // include plantList
            /> */}
          <PlantDisplay />
        </div>
      </div>
    );
    

}
export default TotalPlantData;