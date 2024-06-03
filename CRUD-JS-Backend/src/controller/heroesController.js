const apiURL = `https://65ef1759ead08fa78a4fc40d.mockapi.io/heroesApi`;
import {getAllHeroesSrvs} from "../service/heroesServices.js"


export async function getAllHeroes(){
    const response = await getAllHeroesSrvs();
    console.log("controller response:", response)
    return response
}