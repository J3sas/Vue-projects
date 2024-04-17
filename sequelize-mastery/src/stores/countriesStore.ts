import axios from 'axios'
import { defineStore } from 'pinia'

export interface ICountries{
  id: number,
  country_code: string,
  country_name: string
}

export const useCountriesStore = defineStore('useCountriesStore',{
  state: ()=>({
    title: 'Countries of the Earth',
    allCountries: [] as any,
    sample: {} as any,
    mockApiData: [] as any
  }),
  actions:{
      async fetchCountries(){
        try{
          const response = await axios.get('/all-countries');
          console.log(response);
          this.allCountries = await response.data;
        }catch(err){
          console.log(err);
          
        }
      },
    
      async sayHello(){
        const response = await axios.get('/')
        this.sample = response
      },
      async getMockApi(){
        const response = await axios.get('https://65ef1759ead08fa78a4fc40d.mockapi.io/heroesApi')
        // console.log('MOCK API DATA:', response);
        this.mockApiData = response.data
      }
      
  },
  getters:{

  },
})