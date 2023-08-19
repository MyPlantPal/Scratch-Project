//Look at the database data
//Deconstruct it to get all the parameters


//Push this into plant list array
//Div plant name
//h1 species 


// Extract the data and turn into React components for UI render

import React from 'react';
import { useSelector } from 'react-redux';
import PlantDisplay from '../components/PlantDisplay.jsx'
import Plant from '../components/PlantCard.jsx'
import {useNavigate} from 'react-router-dom';


const CreatePlant = () => {


  const totalCards = useSelector(store => store.plants.totalCards);
  const plantList = useSelector(store => store.plants.plantList);
	const greenScore = 1000;

  let navigate = useNavigate();
  const toCreate = () => {
      let path = '/create';
      navigate(path);
  }


  return (
    <div>
      <div className='nav-bar'>
        <h1>LeafLaughLove</h1>
      </div>
      <div className='homePageContainer'>

        <div className='navSidePanel'>

          <button className='navButton'>My Plants</button>
          <hr/>
          <button className='navButton' onClick={toCreate}>New Plants</button>
          <hr/>
          <button className='navButton'>Discover</button>
          
        </div>
        
        <div className = 'plantContainer'>
					Container
        </div>
				<div className = 'createBox'>
					
				</div>
      </div>
    </div>
  )
}


export default CreatePlant;


