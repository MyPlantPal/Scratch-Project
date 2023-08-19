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

const MainPage = () => {

  const totalCards = useSelector(store => store.plants.totalCards);
  const plantList = useSelector(store => store.plants.plantList);


  return (
    <div>
      <div className='nav-bar'>
        <div>This is the header of the main page</div>
      </div>
      <div className='homePageContainer'>
        <div className='navSidePanel'>
          navSidePanel
        </div>
        <div className='plantContainer'>
          <div className='totalPlantData'>
            Total Plant Data
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
  )
}

export default MainPage;