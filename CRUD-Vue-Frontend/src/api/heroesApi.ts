import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL;
const endPoint: string = '/delete-hero'

export async function deleteSingle(id: number){
  await axios.delete(`${baseUrl}${endPoint}/${id}`)
  // console.log(`${baseUrl}${endPoint}/${id}`)
}


