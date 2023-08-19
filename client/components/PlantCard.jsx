import React from 'react';
// props 

// { id } = props

const PlantCard = (props) => {

	const {
		photo,
		plantName,
		DOB
	} = props

  // photo, plantName, DOB <-- in strings 
  console.log('PHOTO', props)
	return (
		<div className='plantBox'>

			<div className='photoAndInfoTag'>
				<div className='plantPhoto'>
					<img src={photo} alt=""/>
				</div>
				<div className='plantName'>
					{plantName}
				</div>
			</div>

			<div className='infoContainer'>

				{/* for when data comes in from DB */}

				{/* <div className='plantDetail'>Species: {type}</div>
				<div className='plantDetail'>Last Watered: {lastWatered}</div>
				<div className='plantDetail'>Watering Frequency: {frequency}</div>
				<div className='plantDetail'>Soil Type: {soil}</div>
				<div className='plantDetail'>Last Potted: {lastPotted}</div>
				<div className='plantDetail'>Sunlight: {sunlight}</div>
				<div className='plantDetail'>DOB: {DOB}</div>
				<div className='plantDetail'>Date Added: {dateAdded}</div> */}


				{/* for testing purposes */}
				<div className='plantDetail'>Species: {}</div>
				<div className='plantDetail'>Last Watered: {}</div>
				<div className='plantDetail'>Watering Frequency: {}</div>
				<div className='plantDetail'>Soil Type: {}</div>
				<div className='plantDetail'>Last Potted: {}</div>
				<div className='plantDetail'>Sunlight: {}</div>
				<div className='plantDetail'>DOB: {DOB}</div>
				<div className='plantDetail'>Date Added: {}</div>
			</div>

		</div>
	)
}

export default PlantCard;


// const Market = props => {
//   const {
//     market: {marketId},
//     market: {location},
//     market: {cards},
//     totalCards,
//     deleteCard,
//     addCard,
//   } = props;



{/* <p>
<label htmlFor ="cards">Cards:</label>
<span id='cards'>{cards}</span>
</p>

const Market = ({
  index,
  location,
  cards,
  percentage,
  addCard,
  deleteCard,
}) => (
  <div className="marketBox">
    <LabeledText label="Market ID" text={index} />
    <LabeledText label="Location" text={location} />
    <LabeledText label="Cards" text={cards} />
    <LabeledText label="% of total" text={percentage} />
    <div className="flex">
      <button className='addCard' onClick={addCard}>+</button>
      <button className='deleteCard' onClick={deleteCard}>-</button>
    </div>
  </div>
); */}