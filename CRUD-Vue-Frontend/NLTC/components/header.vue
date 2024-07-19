<template>
  <div>
      <header class="flex justify-between bg-[#242424] text-white px-16 py-5">
        <div class="left text-xl text-[#213e9e]">
          <NuxtLink to="/homepage">LOGO</NuxtLink>
        </div>

        <div class="middle">
            <ul class="flex gap-3">
              <li><NuxtLink to="/homepage">HOME</NuxtLink></li>
              <li><NuxtLink to="/about">About</NuxtLink></li>
              <li><NuxtLink to="/players">Players</NuxtLink></li>
            </ul>          
        </div>

        <div class="right flex gap-3">
          <NuxtLink to="/logout">Log Out</NuxtLink>
          <p>Dark mode</p>
        </div>
        

      </header>   
  </div>

  <slot />
</template>

<script setup lang="ts">

</script>


<style>
  .router-link-active{
    color: #12b488;
  }
</style>