import { defineStore } from 'pinia';
import axios from "axios";
import {deleteSingle} from '../api/heroesApi'

export interface IHero {
  id: number,
  heroName: string,
  heroAttribute: string,
  heroMaxHp: number,
}


export const useHeroesStore = defineStore({
  id: 'heroes',
  state: ()=> ({
    heroes: [] as IHero[],
    sample: [] as any,
    heroModalState: false as boolean,
    displayedHero: {} as IHero,
    isEditing: false as boolean,
    isAddingHero: false as boolean
  }),

  actions:{
    async fetchHeroes(){
      const response = await axios.get('http://localhost:8080/all-heroes');
      this.heroes = response.data; 
    },
    async showHeroDetails(){
      console.log('Hero Details :D')
    },
    async deleteHero(heroId: number){
      await deleteSingle(heroId);
      this.fetchHeroes();
    }
  },
  getters:{

  },


});
