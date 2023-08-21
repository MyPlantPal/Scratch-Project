/**
 * ************************************
 *
 * @module PlantDisplay
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Take in the info from the database of all plants, use that to create the plant cards, then populate them onto the field
 *
 * ************************************
 */

import React from 'react';
import PlantCard from './PlantCard.jsx';
import { useLocation } from 'react-router-dom';

// const mockPlantDB = [
//   {
//     // photo: 'something',
//     plantName: 'PlantName',
//     DOB: '03/16/2000',
//   },
// ];

// incoming res ; array of plant models


const PlantDisplay = () => {
  
  const location = useLocation();
  console.log("LOCATION", location)
  //const plantArray = location.state.plantArray;

  // render logic here :
  //const { mockPlantDB } = props;
  const plant = [];
 
  for (let i = 0; i < plantArray.length; i++) {
    plants.push(
      <PlantCard
        // photo={mockPlantDB[i].photo}
        name={plantArray[i].name}
        species={plantArray[i].type}
        lastWatered={plantArray[i].lastWatered}
        frequency={plantArray[i].frequency}
        soil={plantArray[i].soil}
        lastPotted={plantArray[i].lastPotted}
        sunlight={plantArray[i].sunlight}
        dateAdded={plantArray[i].dateAdded}
        bithday={plantArray[i].birthday}
      />
    );
  }
  // name: { type: String, required: true, unique: true },
  // type: { type: String /* required: true */ },
  // lastWatered: { type: Date },
  // frequency: { type: Number },
  // soil: { type: String },
  // lastPotted: { type: Date },
  // sunlight: { type: String },
  // // photo: { type: Image },
  // dateAdded: { type: Date },
  // birthday: { type: Date },


  return (
    <div>
      <div className="plantDisplay">{plants}</div>
    </div>
  );
};

export default PlantDisplay;
