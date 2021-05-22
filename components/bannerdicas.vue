<template>
  <article class="banner px-6 flex justify-center items-center">
    <div class="container ">

      <section class="flex flex-col">
        <TitleDicas />
          <p class="">{{ $t('textTips') }}</p>
          <nuxt-link to="" class="btn-buy mt-4 px-6 py-2">{{ $t('View') }}</nuxt-link>
      </section>

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
.banner-dicas {
  background-image: url("../assets/bannerDicas.png");
}
/* ----------------- */
@media only screen and (max-width: 699px) {
  /* Configurações do menus no mobile*/
section{
  width: 100%;
}

  /* -------------Conteúdo---------------- */

}
</style>
