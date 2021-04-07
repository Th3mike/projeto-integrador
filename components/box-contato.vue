<template>
  <div class="container">
    <div class="box">
      <Formulario />
    </div>
  </div>
</template>


<style scoped>
.container {
  display: flex;
}

.box {
  width: 450px;
  height: 450px;
  position: absolute;
  top: 65%;
  background-color: black;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box {
    background: red;
    width: 300px;
    height: 400px;
    top: 80%;
    position: absolute;
  }
}
</style>
