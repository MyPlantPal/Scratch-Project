/**
 * ************************************
 *
 * @module  CreatePlant
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Container to render the UI for the individual plant cards and add their functionality. Defunct section that was intended for redux. 
 * ************************************
 */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';
import * as types from '../constants/actionTypes';
import CreatePlantCard from '../components/CreatePlantCard.jsx';
import NavBar from '../components/Nav-Bar.jsx';

//Unused stretch features
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


const NewPlantContainer = () => {

  //relevant state
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [soilType, setSoilType] = useState('');
  const [waterFrequency, setWaterFrequency] = useState('');
  const [fileUrl, setFileUrl] = useState(null);

  //Unused redux functionality 

  const dispatch = useDispatch();

  const createPlant = () => {
    dispatch(actions.createPlantActionCreator()); 
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setFileUrl(url);
    }
  };
//The rendering of the components
  return (
    <div>
      <NavBar />
        <main className = 'createContainer'> 
          <CreatePlantCard 
          addPlant = {createPlant}
          /> 
        </main> 
    </div>
  );
};

export default NewPlantContainer;
