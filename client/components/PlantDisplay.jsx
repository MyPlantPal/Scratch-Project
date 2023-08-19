import React from 'react';
import PlantCard from './PlantCard.jsx'



const mockPlantDB = [{ 
  photo: 'url', 
  plantName: 'PlantName',
  DOB: '03/16/2000',
}] 




const PlantDisplay = props => {

  // render logic here : 
  const plants = [];
  //const { mockPlantDB } = props; 
  
  for (let i = 0; i < mockPlantDB.length; i++){
    console.log('MOCK DB', mockPlantDB);
    plants.push(
      <PlantCard
      photo={mockPlantDB[i].photo}
      plantName={mockPlantDB[i].plantName}
      DOB={mockPlantDB[i].DOB}
      />,
      <PlantCard
      photo={mockPlantDB[i].photo}
      plantName={mockPlantDB[i].plantName}
      DOB={mockPlantDB[i].DOB}
      />,
      <PlantCard
      photo={mockPlantDB[i].photo}
      plantName={mockPlantDB[i].plantName}
      DOB={mockPlantDB[i].DOB}
      />,
      <PlantCard
      photo={mockPlantDB[i].photo}
      plantName={mockPlantDB[i].plantName}
      DOB={mockPlantDB[i].DOB}
      />,
    );
  }
  return(
    <div>
      <div className='plantDisplay'>
        {plants}
      </div>
    </div>
  );  
}

export default PlantDisplay