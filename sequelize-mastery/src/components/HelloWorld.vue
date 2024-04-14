<script setup lang="ts">
import {  onMounted  } from 'vue';
import {useCountriesStore} from '../stores/countriesStore';
import ReusableTable from './ReusableTable.vue'

const countryStore = useCountriesStore();




onMounted(async()=>{
  countryStore.getMockApi();
})


</script>

<template>
 <h1> {{ countryStore.title }}</h1>
 

<table class="border">
  <thead>
    <th>
      ID
    </th>
    <th>Country code</th>
    <th>name</th>
  </thead>
  
  <tbody v-for="(item,i:number ) in countryStore.mockApiData">
    <tr >
      <td>{{ item.heroName }}</td>
      <td>{{ item.heroAttribute }}</td>
      <td>{{ item.heroMaxHp }}</td>
    </tr>
  </tbody>
</table>

<br>
<h2>Data from Database</h2>


<ReusableTable title="Countries"/>


</template>

<style>
th,td
  {
    border: 1px solid black;
  }
</style>