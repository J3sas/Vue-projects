<script setup lang="ts">
import { onMounted } from 'vue';
import {useCountriesStore} from '../stores/countriesStore';

const {title, allCountries, fetchCountries} = useCountriesStore();


onMounted(()=>{
   fetchCountries();
  setTimeout(()=>{
    console.log(allCountries);
  },3000)
  
})

</script>

<template>
<h1> {{ title }}</h1>

<p>{{ allCountries }}</p>

<table class="border">

  <thead>
    <th>
      ID
    </th>
    <th>Country code</th>
    <th>name</th>
  </thead>
  
  <tbody>
    <tr>
      <td>Rhasta</td>
      <td>Night Crawler</td>
      <td>Night sShade</td>
    </tr>
  </tbody>
</table>


</template>

<style>
th,td
  {
    border: 1px solid black;
  }
</style>