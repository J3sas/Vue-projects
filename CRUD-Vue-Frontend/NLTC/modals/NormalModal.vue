<script setup lang="ts">
const emits = defineEmits(['closeModal','editHero'])

function closeModal(){
  emits('closeModal');
}

</script>

<template>

<div class="modal-bg">
  <div class="modal-container">
    <button class="btn-close-modal" @click="closeModal">x</button>
    <slot name="title" class="modal-title"></slot>
    <slot></slot>

    <!-- <button class="btn-edit-hero">edit</button> -->
  </div>
</div>

</template>

<style>
.modal-bg{
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0, 0.5);
  display:flex;
  align-items:center;
  justify-content: center
}
.modal-container{
  position: relative;
  background: white;
  padding: 50px 120px;
  border-radius: 5px;
  box-shadow: 0 10px 5px 2px rgba(0,0,0, 0.1);
  color: black;
}
.btn-close-modal{
  position:absolute;
  top: -8px;
  right: -9px;
  padding: 5px 10px;
  border:none;
  /* width: 15px;
  height:30px; */
  border-radius: 100%;
  background-color: rgb(187, 0, 0);
  outline: none;
  font-size: small;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.btn-close-modal:hover{
  background-color: rgb(255, 35, 35);
}
.btn-edit-hero{
  position: absolute;
  bottom: 7px;
  right: 173px;
  left: 50;
  padding: 5px 7px;
  text-align: center;
  margin-top: 30px;
  border:none;
  outline:none;
}
.btn-edit-hero:hover{
  background-color: rgb(67, 67, 67);
}
</style>