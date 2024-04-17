<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String
  }
})


</script>

<template>
  <h1>{{ props.title }}</h1>
<table>
  <thead>
    <th>ID</th>
    <th>Country Code</th>
    <th>Country Name</th>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Ph</td>
      <td>Philippines</td>
    </tr>
  </tbody>
</table>

</template>

<style>
</style>