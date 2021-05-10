<template>
  <article class="cor px-6 flex justify-center items-center">
    <div class="container ">
  
      <section class="flex flex-col">
        <Titleprodutos />
          <p class="">Confira os nossos produtos, e faça o orçamento daquele que é a sua cara!</p>
          <nuxt-link to="" class="btn-buy mt-4 px-6 py-2">Conferir</nuxt-link>
      </section>

    </div>
    <div class="img-produtos">
      <img src="../assets/Headerprodutos.png">
    </div>
  </article>
</template>


<style scoped>
section{
  width: 50%;
}
.btn-buy{
  width: 33%;
}
.banner {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.cor {
  background-image: url("../assets/corprodutos.png");
  height: 400px;
}
.img-produtos{
  margin-right: auto;
  margin-left: auto;
}

/* ----------------- */
@media only screen and (max-width: 699px) {
  /* Configurações do menus no mobile*/
section{
  width: 100%;
}
.img-produtos{
  display: none;
}
  /* -------------Conteúdo---------------- */

}
</style>
