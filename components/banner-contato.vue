<template>
  <article class="cor px-6 flex justify-center items-center">
    <div class="container flex justify-btween items-center">

      <section class="flex flex-col">
        <TitleBanner />
          <p class="">{{ $t('textContact') }}</p>
          <nuxt-link to="#ct" class="btn-buy mt-4 px-6 py-2">{{ $t('toTalk') }}</nuxt-link>
      </section>
       <div class="img-dicas">
      <img src="../assets/Contatoimg.png">
    </div>

    </div>

  </article>
</template>


<style scoped>
section{
  width: 50%;
}
.cor {
  background-image: url("../assets/cordicas.png");
  height: 400px;
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
.banner-contato {
  background-image: url("../assets/bannerContato.png");
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
  /* -------------Conteúdo---------------- */
  .banner {
    background-color: rgb(222,203,183);
    background-image: none;
}

}
</style>
