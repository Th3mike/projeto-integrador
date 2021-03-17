<template>
  
<header class="W-100 flex justify-between items-center bg-gray-50">
<nuxt-link to="index.vue" class="text-lg text-yellow-900">LOGO</nuxt-link>

<nav>
  <ul class="flex text-lg">
    <li class="border"><nuxt-link to="">PRODUTOS</nuxt-link></li>
    <li class="border"><nuxt-link to="">DICAS</nuxt-link></li>
    <li class="border"><nuxt-link to="">CONTATO</nuxt-link></li>
  </ul>
</nav>
</header>

</template>


<style scoped>

header{
  height: 80px;
  padding: 0 100px;
}

header nav ul li{
  position: relative;
  padding: 26px 10px;
  transition: color linear 0.2s;

  color: #5C5552;
}

header nav ul li:hover{
  color: #433633;

  transition: color linear 0.2s;
  cursor: pointer;
}
.border::after {
  position: absolute;
  content: "";
  display: block;

  width: 0;
  height: 2px;

  bottom: 0;
  transition: width 0.3s;

  background: #5C5552;
}
.border:hover::after {
  width: 85%;
  transition: width 0.3s;
}
</style>