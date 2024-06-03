import axios from "axios";
const apiURL = `https://65ef1759ead08fa78a4fc40d.mockapi.io/heroesApi`;



export async function getAllHeroesSrvs(){
    const response = await axios.get(apiURL);

    console.log("services response", response)
    return response.data;  
}