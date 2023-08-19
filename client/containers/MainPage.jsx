// ====== DISPATCHERS ======
/**
 * Navigate
 * AddCard
 * DeleteCard
 * UpdateCard
 * PopUp
 */


// ====== COMPONENTS ======
/**
 * Plant Display
 * Plant Card
 * Info Card
 * Nav Bar
 */

import React from 'react';
import { useSelector } from 'react-redux';
import PlantDisplay from '../components/PlantDisplay.jsx'
import Plant from '../components/PlantCard.jsx'
import {useNavigate} from 'react-router-dom';

const MainPage = () => {

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
        
        <div className='plantContainer'>

          <div className='totalPlantDataBox'>
            <div class='totalPlantData'>
							{/* Total Plants: {totalCards} */}
							Total Plants: 6421654
						</div>
						<div class='totalPlantData'>
							Green Score: {greenScore}
						</div>
						<div class='totalPlantData'>
							Filter Plants
						</div>
          </div>
          
          <div className='plantDisplay'>
            {/* <PlantDisplay
              // include plantList
            /> */}
						<PlantDisplay />
          </div>
        </div>
      </div>
    </div>
  )}

export default MainPage;