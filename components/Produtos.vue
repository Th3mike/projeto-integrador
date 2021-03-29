<template>
  <section class="mt-5 px-6">
    <div class="container">
      <ul class="flex justify-between flex-wrap">
        <li class="w-56 h-64 mb-5 rounded"></li>
        <li class="w-56 h-64 mb-5 rounded"></li>
        <li class="w-56 h-64 mb-5 rounded"></li>
        <li class="w-56 h-64 mb-5 rounded"></li>
        <li class="w-56 h-64 mb-5 rounded"></li>
        <li class="w-56 h-64 mb-5 rounded"></li>
        <li class="w-56 h-64 mb-5 rounded"></li>
        <li class="w-56 h-64 mb-5 rounded"></li>
    </ul>
  </div>
  </section>
</template>


<style scoped>

ul li{
background-color: #DECBB7 ;
}
/* --------- */


@media only screen and (max-width: 699px) {
  /* Configurações do  mobile*/
 .container{
   width: 100%;
 }
  ul li{
  width: 150px;
  height: 160px;
}
  /* -------------Conteúdo---------------- */
}
/* -------------------------- */
@media only screen and (min-width: 700px) {
  /* Configurações do  desktop*/
}
</style>
