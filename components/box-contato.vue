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
  height: 80px;
}

.box {
  width: 450px;
  height: 450px;
  position: relative;
  top: -370px;
  background-color:#decbb7;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 1096px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box {
    background: #decbb7;
    width: 450px;
    height: 450px;
    top: 75%;
    position: absolute;
      }
}
</style>
