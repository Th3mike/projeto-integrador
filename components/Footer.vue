<template>
<main>
  <!-- component -->
<footer class="w-full flex items-center justify-center">

<ul class="w-full flex justify-between items-start">
    <li class="flex flex-col justify-center">
        <nuxt-link to="" class="text-lg">LOGO</nuxt-link>
    </li>

    <li class="flex flex-col">
        <h2 class="text-lg">MAPA DO SITE</h2>
        <nuxt-link to="">PRODUTOS</nuxt-link>
        <nuxt-link to="">DICAS</nuxt-link>
        <nuxt-link to="">CONTATO</nuxt-link>
    </li>

     <li class="flex flex-col">
        <h2 class="text-lg">REDES SOCIAIS</h2>
        <nuxt-link to="">FACEBOOK</nuxt-link>
        <nuxt-link to="">INSTAGRAM</nuxt-link>
        <nuxt-link to="">TWITTER</nuxt-link>
    </li>

    <li class="flex flex-col">
        <h2 class="text-lg">FORMAS DE PAGAMENTO</h2>
        <nuxt-link to="">BOLETO</nuxt-link>
        <nuxt-link to="">CARTÃO DE CRÉDITO</nuxt-link>
    </li>
</ul>
</footer>

<div class="flex items-center justify-center">
    <p class="text-base"><span class="text-lg">STACY STORE</span> - Todos os direitos reservados!</p>
</div>

</main>
</template>
<!-- ------------------------------------- -->

<style scoped>

footer{
    height: 240px;

    padding: 0 100px;
    margin-top: 40px;

    background-color: #DECBB7;
}

footer ul li h2{
    color: #433633;
}

footer ul li a{
    font-weight: 300;
    color: #8F857D;
    padding: 2px 0;
    transition: color linear 0.2s;
}

footer ul li a:hover{
    color: #433633;
    transition: color linear 0.2s;
}
 

/* --------------------------------------- */

div{
    width: 100%;
    height: 40px;

    background: #DECBB7;  
    border-top: 1px solid #8F857D !important;
}

div p, div span{
font-weight: 300;
color: #433633;
}

</style>