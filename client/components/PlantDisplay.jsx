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

import React, { useEffect, useState } from 'react';
import PlantCard from './PlantCard.jsx';
import { useLocation, } from 'react-router-dom';

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
  const [plantArray, setPlantArray] = useState([])
  
  useEffect(() => {
    loadPlants();
  },[])

  const loadPlants = async () => {
    try {
      const data = await fetch('http://localhost:8080/leaf/plant/getPlants')
      const totPlantList = await data.json(); 
      setPlantArray(totPlantList);
      } catch (error) {
        console.log(error);
      } 
    }

  return (
    <div className='plantDisplay'>
      {plantArray.map((plant) => (
        <PlantCard key={plant.id} plantName={plant.name} species={plant.type} lastWatered={plant.lastWatered} frequency={plant.frequency} />
      ))}
    </div>
  );
};

export default PlantDisplay;