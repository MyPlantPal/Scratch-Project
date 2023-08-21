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
import NavBar from '../components/Nav-Bar.jsx';


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
  const [species, setSpecies] = useState('');
  const [soilType, setSoilType] = useState('');
  const [waterFrequency, setWaterFrequency] = useState('');
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setFileUrl(url);
    }
  };

  const handleSubmission = (e) => {
    e.preventDefault(); 
    // fire a post request to the backend
    console.log('Submit Button clicked');
    const bundleOfData = {name, soilType, waterFrequency};
    console.log(bundleOfData);
  }

  return (
    <div>
      <NavBar />
        <main className = 'createContainer'> 
          <div className = 'createPlantCard'>
            <header className = 'createCardHeader'>
              <span className = 'createAvatar'>
              {fileUrl && <img className='avatarImage' src={fileUrl} alt ='preview of avatar'file/>}
              </span>
              <div className='previewNameBox'>
                <span className = 'previewName'>
                  {name}
                </span>
              </div>
              
            </header>
            <section className = 'inputField'>
              <div className='photoInput'>
                <span>Input Image: </span>
                <form action="/action_page.php">
                <input
                  className='createInput'
                  type="file"
                  id="chooseFileButton"
                  name="filename"
                  onChange={handleFileChange}
                />
                </form>
              </div>
              <div className='createLabels'>
                <span>Name: </span>
                <input
                  className='createInput'
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='createLabels'>
                <span>Species: </span>
                <input
                  className='createInput'
                  type="text"
                  value={species}
                  onChange={(e) => setSpecies(e.target.value)}
                />
              </div>
              <div className='createLabels'>
                <span>Soil Type: </span>
                <input
                  className='createInput'
                  type="text"
                  value={soilType}
                  onChange={(e) => setSoilType(e.target.value)}
                />
              </div>
              <div className='createLabels'>
                <span>Water Frequency: </span>
                <input
                  className='createInput'
                  type="text"
                  value={waterFrequency}
                  onChange={(e) => setWaterFrequency(e.target.value)}
                />
              </div>
              <div>
                <button
                  onClick = {handleSubmission}
                >Add New Plant</button>
              </div>
            </section>  
          </div>
        </main> 
    </div>
  );
};

export default CreatePlant;
