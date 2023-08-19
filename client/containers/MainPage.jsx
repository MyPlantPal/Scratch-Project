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
import NavSidePanel from '../components/NavSidePanel.jsx';
import PlantContainer from './PlantContainer.jsx';
import NavBar from '../components/Nav-Bar.jsx';

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <div className="homePageContainer">
        <NavSidePanel />
        <PlantContainer />
      </div>
    </div>
  );
};

export default MainPage;
