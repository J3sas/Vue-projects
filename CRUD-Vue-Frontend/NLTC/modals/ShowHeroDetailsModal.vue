<script setup lang="ts">
</script>

<template>
  <Teleport to="#modal">
    <div class="modal-bg">
      <div class="modal">
        <div class="btn-close-hero-modal">
          <button>x</button>
        </div>

        <h1>Hell yeah!</h1>
        <p>This is a p ;D</p>
      </div>
    </div>
  </Teleport>

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
.modal{
  position: relative;
  background: white;
  padding: 50px 120px;
  border-radius: 5px;
  box-shadow: 0 10px 5px 2px rgba(0,0,0, 0.1);
  color: black;
}
.btn-close-hero-modal{
  position: absolute;
  top: 0px;
  right: 0;
  height: 45px;
  width: 45px;
  background-color: rgb(138, 0, 0);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  outline: none;
}
.btn-close-hero-modal button{
  height: 100%;
  width: 100%;
  border-radius: 100%;
  background-color: transparent;
  outline: none;
}
.btn-close-hero-modal:hover{
  background-color: rgb(241, 3, 3);
}
</style>