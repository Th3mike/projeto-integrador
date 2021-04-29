<template>
<article class="banner px-6 flex justify-center items-center">
 <div class="container">
      <section class="flex flex-col">
        <TitleDicas/>
          <p class=""> Aqui você vê os enxôvais que estão em alto no mercado, e deixa sua casa com cara nova!</p>
          <nuxt-link to="" class="w-1/3 flex items-center justify-center rounded text-bg-marrom-800 text-white mt-4 px-6 py-2">Ver</nuxt-link>
      </section>
    </div>
    <!--Imagem do banner-->
  <div class="flex justify-center items-center banner px-6">
    <div class="fotobanner">
       <img src="../assets/bannerdicas.png">
    </div>

  </div>
  </article>
</template>


<style scoped>
.banner{
  width: 100%;
  height: 400px;
  background-color: #DECBB7;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.fotobanner{
  width: 469px;
  height: 336px;
}

@media only screen and (max-width: 896px) {
  .fotobanner{
    display: none;
  }
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
.banner{
  background-color: #DECBB7;
}
}
</style>
