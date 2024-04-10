<script setup lang="ts">
import { onMounted } from 'vue';
import axios from "axios";
import { reactive } from 'vue';



const state = reactive({
data: ''
}) 

async function fetchAllCountries(){
  try{
    const res:any = await axios.get(`/all-countries`);
    state.data = res.data
  }
  catch(err){
    console.log(err);
  }
}


onMounted(async()=>{
  await fetchAllCountries
  console.log(state.data);
})

</script>

<template>
<h1> Countries</h1>

<table class="border">

  <thead>
    <th>
      Shaman king
    </th>
    <th>Murloc</th>
    <th>Mirana</th>
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