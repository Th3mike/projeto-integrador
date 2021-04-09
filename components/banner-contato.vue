<template>
  <article class="banner px-6 flex justify-center items-center">
    <div class="container ">
  
      <section class="flex flex-col">
        <TitleBanner />
          <p class=""> Converse com a gente, sentiu falta de algum produto?Alguma dúvida ou sugestão? Fale conosco no formulário abaixo!</p>
          <nuxt-link to="" class="w-1/3 flex items-center justify-center rounded text-bg-marrom-800 text-white mt-4 px-6 py-2">Conversar</nuxt-link>
      </section>

    </div>
  </article>
</template>


<style scoped>
section{
  width: 50%;
}

.banner {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.banner-contato {
  background-image: url("../assets/bannerContato.png");
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
