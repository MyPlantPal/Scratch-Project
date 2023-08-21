/**
 * ************************************
 *
 * @module  CreateCard
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Render the UI for the individual plant cards and add their functionality.
 * Functionality has been done inside of Plant Card, this file most likely can be deleted, wait to consult
 * ************************************
 */

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const CreatePlantCard = props => {

  

  // REDUX PROPS

  const {createPlant} = props;


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
    const data = {
      name: name, 
      type: species,
      soil: soilType, 
      frequency: waterFrequency, 
    };
    console.log(data);
    fetch('http://localhost:8080/leaf/plant/createplant', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),

    })
    .then(() => {
      console.log('new changes!');
      toHome();
    });
  }


  // I COPIED THIS FUNCTION FROM SIGNIN COMPONENT
  const toHome = () => {
    let path = "/home";
    navigate(path);
  };

  let navigate = useNavigate();
  const toCreate = () => {
      let path = '/create';
      navigate(path);
  }
  // 

  return (
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
  );
};

export default CreatePlantCard;
