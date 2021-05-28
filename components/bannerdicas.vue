<template>
  <article class="cor px-48 flex justify-around items-center">
    <div class="container ">

      <section class="flex flex-col">
        <TitleDicas />
          <p class="">{{ $t('textTips') }}</p>
          <nuxt-link to="#dc" class="btn-buy mt-4 px-6 py-2">{{ $t('View') }}</nuxt-link>
      </section>
      </div>
    <div class="img-dicas">
      <img src="../assets/dicas.png">
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
  background-image: url("../assets/cordicas.png");
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
.img-dicas{
  display: none;
}
}
</style>
