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

// SCHEMA FOR PLANT // 
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


const PlantDisplay = () => {

  const [ plantArr, setPlantArr ] = useState([]);
  
  // useEffect(() )

  const location = useLocation();
  console.log("LOCATION", location.state)
  const plantArray = location.state.plantArray;

  const plants = [];
 
  for (let i = 0; i < plantArray.length; i++) {
    plants.push(
      <PlantCard
        // photo={mockPlantDB[i].photo}
        plantName={plantArray[i].name}
        species={plantArray[i].type}
        // photo = {plantArray[i].photoURL} <-- need a photo prop in plant schema
        // lastWatered={plantArray[i].lastWatered}
        // frequency={plantArray[i].frequency}
        // soil={plantArray[i].soil}
        // lastPotted={plantArray[i].lastPotted}
        // sunlight={plantArray[i].sunlight}
        // dateAdded={plantArray[i].dateAdded}
        // DOB={plantArray[i].birthday}
      />
    );
  }

  return (
    <div>
      <div className="plantDisplay">{plants}</div>
    </div>
  );
};

export default PlantDisplay;
