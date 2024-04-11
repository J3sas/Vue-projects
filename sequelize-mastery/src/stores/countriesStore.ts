import axios from 'axios'
import { defineStore } from 'pinia'

interface ICountries{
  id: number,
  country_code: string,
  country_name: string
}

export const useCountriesStore = defineStore('useCountriesStore',{
  state: ()=>({
    title: 'Countries of the Earth',
    allCountries: [] as unknown as ICountries | undefined,
  }),
  actions:{
      async fetchCountries(){   
        try {
          this.allCountries = await axios.get('/all-countries')
        } catch (error) {
          console.log(error);
        }
      }
  },
  getters:{

  },
})