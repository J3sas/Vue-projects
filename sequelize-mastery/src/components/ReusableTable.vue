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

  </thead>
  <tbody>

  </tbody>
</table>

</template>

<style>
</style>