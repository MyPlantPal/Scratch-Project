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
import PlantDisplay from '../components/PlantDisplay.jsx';
import Plant from '../components/PlantCard.jsx';
import { useNavigate } from 'react-router-dom';
import NavSidePanel from '../components/NavSidePanel.jsx';
import TotalPlantData from '../components/TotalPlantData.jsx';
import PlantContainer from './PlantContainer.jsx';

const MainPage = () => {
  const totalCards = useSelector((store) => store.plants.totalCards);
  const plantList = useSelector((store) => store.plants.plantList);
  const greenScore = 1000;

  return (
    <div>
      <div className="nav-bar">
        <h1>LeafLaughLove</h1>
      </div>
      <div className="homePageContainer">
        <NavSidePanel />
        <PlantContainer />
      </div>
    </div>
  );
};

export default MainPage;
