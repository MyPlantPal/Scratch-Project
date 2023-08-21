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

//Main function to render the plant display box
const PlantDisplay = () => {

  //Primary state of all of the users plants
  const [plantArray, setPlantArray] = useState([])
  
  //One time on load of page render the users plants
  useEffect(() => {
    loadPlants();
  },[])

  //Async method to fetch the users plants with a get request
  const loadPlants = async () => {
    //Grab and parse teh data then set it to the state; otherwise throw an error
    try {
      const data = await fetch('http://localhost:8080/leaf/plant/getPlants')
      const totPlantList = await data.json(); 
      setPlantArray(totPlantList);
      } catch (error) {
        console.log(error);
      } 
    }
//Use the map function to take each element of the plantArray state to go and create a card via the create card
  return (
    <div className='plantDisplay'>
      {plantArray.map((plant) => (
        <PlantCard key={plant.id} plantName={plant.name} species={plant.type} lastWatered={plant.lastWatered} frequency={plant.frequency} soil={plant.soil} lastPotted={plant.lastPotted} sunlight={plant.sunlight} dateAdded={plant.dateAdded} photo={plant.photo}/>
      ))}
    </div>
  );
};

export default PlantDisplay;