<script setup lang="ts">
import { onMounted } from 'vue';
import {IHero, useHeroesStore} from "../src/store/heroesStore"
import NormalModal from '../src/components/modals/NormalModal.vue'

const heroesStore = useHeroesStore();

onMounted(async()=>{
  await heroesStore.fetchHeroes();
})

function showHeroDetails(hero:IHero){
  heroesStore.displayedHero = hero;
  heroesStore.heroModalState = true;
}

function closeModal (){
  heroesStore.heroModalState = false;  
} 

function editHero(hero: IHero){
  heroesStore.isEditing = true;
  console.log('hero details', hero)
}

function deleteHero(heroId: number){
  heroesStore.deleteHero(heroId)
}

function addHero(){
  heroesStore.isAddingHero = true;
}

</script>


<template>
  <!-- <ShowHeroDetails v-if="heroesStore.heroModalState">
  </ShowHeroDetails> -->

  <NormalModal v-if="heroesStore.heroModalState" @closeModal="closeModal" class="show-hero-modal">
    <template v-slot:title>
      <h2 class="modal-title">Hero Details: </h2>
    </template>
      <h3>Hero Name:</h3>
      <p>{{ heroesStore.displayedHero.heroName }}</p>
      <h3>Hero Attribute</h3>
      <p>{{ heroesStore.displayedHero.heroAttribute }}</p>
      <h3>Hero Max HP</h3>
      <p>{{ heroesStore.displayedHero.heroMaxHp }}</p>
  </NormalModal>

  <NormalModal v-if="heroesStore.isAddingHero" @closeModal="closeModal">


  </NormalModal>
 

  <div class="table-container" v-if="heroesStore.heroes">
    <table>
    <thead>
      <th>id</th>
      <th>Hero Name</th>
      <th>Hero Attribute</th>
      <th>Hero Max HP</th>
      <th>EDIT</th>
      <th>DELETE</th>
    </thead>

    <tbody>
      <tr v-for=" hero in heroesStore.heroes" @click="showHeroDetails(hero)" class="t-row">
        <td>{{ hero.id }}</td>
        <td>{{ hero.heroName }}</td>
        <td>{{ hero.heroAttribute }}</td>
        <td>{{ hero.heroMaxHp }}</td>
        <td @click.stop="editHero(hero)">Edit</td>
        <td @click.stop="deleteHero(hero.id)">Dlete</td>
      </tr>
      <button class="btn-add-hero" @click="addHero">Add</button>
    </tbody>
  </table>
  </div>

</template>

<style>

tr,td, th{
  border:1px solid black;
  padding: 2px 4px;
}
.t-row:hover{
  background: grey;
  cursor: pointer;
}
.show-hero-modal h3, p{
  text-align: left;
}
.show-hero-modal h3{
  color: #232323;
  text-transform: uppercase;

}
.show-hero-modal p{
  color: #4d4d4d;
  font-size: larger;
}
.modal-title{
  margin-bottom: 20px;
  text-align: center;
}
.btn-add-hero{
  border:none;
  outline: none;  
}
</style>