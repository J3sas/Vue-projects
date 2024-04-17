<script setup lang="ts">
import {  onMounted,reactive  } from 'vue';
import {useCountriesStore} from '../stores/countriesStore';
import axios from 'axios';
// import ReusableTable from './ReusableTable.vue'

// const countryStore = useCountriesStore();

const state = reactive({
  data: [] as any
})

async function getData(){
  const response = await axios.get('/all-countries');
  state.data = response.data;

}

onMounted(async()=>{
  // countryStore.fetchCountries();
  getData();

})


</script>

<template>



<!-- <ReusableTable :title="countryStore.title"/> -->

<table v-if="1===1">
  <thead>
    <th>ID</th>
    <th>Country Code</th>
    <th>Country Name</th>
  </thead>
  <tbody>
    <tr v-for="country in state.data">
      <td>{{country.id}}</td>
      <td>{{ country.country_code }}</td>
      <td>{{ country.country_name }}</td>
    </tr>
  </tbody>
</table>

</template>

<style>
th,td
  {
    border: 1px solid black;
    padding: 4px 6px;
  }
</style>