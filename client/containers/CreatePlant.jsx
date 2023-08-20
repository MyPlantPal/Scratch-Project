/**
 * ************************************
 *
 * @module  CreatePlant
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Render the UI for the individual plant cards and add their functionality.
 * Functionality has been done inside of Plant Card, this file most likely can be deleted, wait to consult
 * ************************************
 */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PlantDisplay from '../components/PlantDisplay.jsx';
import Plant from '../components/PlantCard.jsx';
import { useNavigate } from 'react-router-dom';


// const [role, setRole] = useState(''); 
// const [action, setAction] = useState(''); 
// const [description, setDescription] = useState(''); 
// const [company, setCompany] = useState(''); 
// const [metrics, setMetrics] = useState(''); 

// const handleRoleChange = (event) => {
//   setRole(event.target.value);
// }

// const handleActionChange = (event) => {
//   setAction(event.target.value);
// }

// const handleDescriptionChange = (event) => {
//   setDescription(event.target.value);
// }

// const handleCompanyChange = (event) => {
//   setCompany(event.target.value);
// }


const CreatePlant = () => {


  let navigate = useNavigate();
  const toCreate = () => {
      let path = '/create';
      navigate(path);
  }

  const [name, setName] = useState('');
  const [soilType, setSoilType] = useState('');
  const [waterFrequency, setWaterFrequency] = useState('');

  const handleSubmission = (e) => {
    e.preventDefault(); 
    // fire a post request to the backend
    console.log('Submit Button clicked');
    const bundleOfData = {name, soilType, waterFrequency};
    console.log(bundleOfData);
  }

  return (
    <div>
      <div className="nav-bar">
        <h1>LeafLaughLove</h1>
      </div>
      <div className="homePageContainer">
        <div className="navSidePanel">
          <button className="navButton">My Plants</button>
          <hr />
          <button className="navButton" onClick={toCreate}>
            New Plants
          </button>
          <hr />
          <button className="navButton">Discover</button>
        </div>
        
        <main className = 'createContainer'> 
          <div className = 'createPlantCard'>
            <header className = 'createCardHeader'>
              <span className = 'createAvatar'>
                
              </span>
              <span className = 'nameHeader'>
                name
              </span>
            </header>
            <section className = 'inputField'>
              <div className='photoInput'>
                <span>Input Image: </span>
                <button className='photoButton'>Image</button>
              </div>
              <div className='nameInput'>
                <span>Name: </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='soilTypeInput'>
                <span>Soil Type: </span>
                <input
                  type="text"
                  value={soilType}
                  onChange={(e) => setSoilType(e.target.value)}
                />
              </div>
              <div className='lastWateredInput'>
                <span>Water Frequency: </span>
                <input
                  type="text"
                  value={waterFrequency}
                  onChange={(e) => setWaterFrequency(e.target.value)}
                />
              </div>
              <div className='submitInputButton'>
                <button
                  onClick = {handleSubmission}
                >Add New Plant</button>
              </div>
            </section>  
          </div>
        </main> 

      </div>
    </div>
  );
};

export default CreatePlant;
