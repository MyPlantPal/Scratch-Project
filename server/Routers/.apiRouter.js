/**
 * ************************************
 *
 * @module Apirouter
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sum, Brandon Chmiel
 * @date 08/18/2023
 * @description To receive and manipulate data from plant API router
 *
 * ************************************
 */
// sk-ylPj64e2876fb825d1936

import { response } from "../server";

//Url specifically for the get requests of the entire list of plants. Key is at the end of it, and should allow us access. 
/*Parameter list of the ones i believe are relevant
* q - optional, string  - String query of  keywords that are used to search for names of species
*Watering-string- "Frequent, average, minimum, none" Not super specific, we can assign each variable a certain time
* https://perenual.com/docs/api Docs for more details
* Too many to list, ID is main most important one
*/

  //This is gonna be very haphahazard, probably needs lotsa edits and changes but just getting the basis out. Not adding imports cause I have to leave soon. Super rough draft I hope is correctish

const plantListURI =
    'https://perenual.com/api/species-list?page=1&key=sk-ylPj64e2876fb825d1936';

    //I dont think we will need this but just incase 
const plantListKey = 'sk-ylPj64e2876fb825d1936';
  


const plantApi = {};


//Probably should just set this up to specifically fetch one thing, and be called in the others, but for now I am setting it up as an array to organize thoughts
plantApi.plantList = async() => {
    //Needs to be in try catch but the amount of errors and lines are causing me headaches so just doing base code
    const response = await fetch(plantListURI);

    const data = await response.json();

    return data;

}
    

//No clue how to set it up to suggest things, will operate on very very specific assumption of perfectly typed common name passed in.
plantApi.getSpecificPlant = async (req, res, next) => {
    try {
        const { common_name } = req.body;
//Not sure if this technically needs an await. It might. Should get everyhthing from other fetch
        const allPlants = plantApi.plantList();

        //Had to look this up. If I am right this grabs any data that includes the common name in it and sets it all there so we dont gotta do any weird round abouts
        const foundPlant = allPlants.filter((plant) => plant.common_name.toLowerCase().includes(common_name.toLowerCase()));

        const newPlantInfo = {
            WaterFrequency: foundPlant.watering
            //Any other parameters we want here
        }
        //Should return all the info to use in the other functions
        res.locals.plantInfo= newPlantInfo
        //Return them to the next middleware, unless we set it up where it should be a regular return, then return it regular. I wasnt quite sure
        return next()

    }
    
}

export default plantAPI;
/**
 * ************************************
 *
 * @module Apirouter
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sum, Brandon Chmiel
 * @date 08/18/2023
 * @description To receive and manipulate data from plant API router
 *
 * ************************************
 */
// sk-ylPj64e2876fb825d1936

import { response } from "../server";

//Url specifically for the get requests of the entire list of plants. Key is at the end of it, and should allow us access. 
/*Parameter list of the ones i believe are relevant
* q - optional, string  - String query of  keywords that are used to search for names of species
*Watering-string- "Frequent, average, minimum, none" Not super specific, we can assign each variable a certain time
* https://perenual.com/docs/api Docs for more details
* Too many to list, ID is main most important one
*/

  //This is gonna be very haphahazard, probably needs lotsa edits and changes but just getting the basis out. Not adding imports cause I have to leave soon. Super rough draft I hope is correctish

const plantListURI =
    'https://perenual.com/api/species-list?page=1&key=sk-ylPj64e2876fb825d1936';

    //I dont think we will need this but just incase 
const plantListKey = 'sk-ylPj64e2876fb825d1936';
  


const plantApi = {};


//Probably should just set this up to specifically fetch one thing, and be called in the others, but for now I am setting it up as an array to organize thoughts
plantApi.plantList = async() => {
    //Needs to be in try catch but the amount of errors and lines are causing me headaches so just doing base code
    const response = await fetch(plantListURI);

    const data = await response.json();

    return data;

}
    

//No clue how to set it up to suggest things, will operate on very very specific assumption of perfectly typed common name passed in.
plantApi.getSpecificPlant = async (req, res, next) => {
    try {
        const { common_name } = req.body;
        //Not sure if this technically needs an await. It might. Should get everyhthing from other fetch
        const allPlants = plantApi.plantList();

        //Had to look this up. If I am right this grabs any data that includes the common name in it and sets it all there so we dont gotta do any weird round abouts
        const foundPlant = allPlants.filter((plant) => plant.common_name.toLowerCase().includes(common_name.toLowerCase()));

        const newPlantInfo = {
            WaterFrequency: foundPlant.watering
            //Any other parameters we want here
        }
        //Should return all the info to use in the other functions
        res.locals.plantInfo= newPlantInfo
        //Return them to the next middleware, unless we set it up where it should be a regular return, then return it regular. I wasnt quite sure
        return next()

    }
    
};

export default plantAPI;