<template>
  <article class="cor px-48 flex justify-around items-center">
    <div class="container">
  
      <section class="flex flex-col">
        <Titleprodutos />
          <p class="">{{ $t('textproducts') }}</p> 
          <a class="btn-buy mt-4 px-6 py-2" href="https://api.whatsapp.com/send?phone=551499685-3425" target="_blank">{{ $t('check') }}</a>
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
  width: 158px;
}
.cor {
  background-image: url("../assets/corprodutos.png");
  height: 400px;
}


/* ----------------- */
@media only screen and (max-width: 699px) {
  /* Configurações do menus no mobile*/
section{
  width: 100%;
}
.cor{
  padding: 1.5rem;
}
.img-produtos{
  display: none;
}
  /* -------------Conteúdo---------------- */

}
</style>
