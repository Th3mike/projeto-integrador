<template>
  <article class="newsletter flex h-screen m-auto items-center space-x-48">
    <div class="w-1/5 text-center ml-56">
      <h1 class="text-5xl">NEWSLETTER</h1>
      <p class="text-md">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
        laudantium dignissimos quae sunt doloremque. Explicabo, eius ullam
        quidem ratione est quia quaerat aspernatur ex suscipit corrupti ipsa
        esse laborum et?
      </p>
    </div>
    <div>
      <input type="email" placeholder="Seu e-mail" class="borda" />
      <button class="text-white font-bold py-2 px-4 rounded ml-4 cor-botao">ENVIAR</button>
    </div>
  </article>
</template>


<style scoped>
input {
  width: 450px;
  height: 50px;
}
.borda {
  border: 1px solid;
  box-shadow: 5px 5px 5px 5px #867e77;
}
.cor-botao {
  background-color: #8F857D;
}
textarea:focus,
input:focus,
select:focus {
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px;
  outline: 0;
}
.newsletter {
  width: 100%;
  height: 300px;
  margin-top: 90px;
  position: relative;
  background-color:#DECBB7;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 1096px) {
  .newsletter {
    width: 100%;
    height: 450px;
    margin-top: 200px;
    background-color:#DECBB7;
    display: flex;
   flex-wrap: wrap;
  }
  .seu-email{
    margin: 4px;
    margin-left: 130px;
  }
}
</style>
