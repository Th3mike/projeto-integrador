<template>
  <article>
  <!-- Header  -->
  <header>
    <!-- Header versão mobile  -->
    <div class="mobile flex h-20 justify-end items-center">
      <nuxt-link to="/" class="logo">STACY</nuxt-link>

      <div id="menu">
        <div id="menu-bar" @click="menuOnClick">
          <div id="bar1" class="bar"></div>
          <div id="bar2" class="bar"></div>
          <div id="bar3" class="bar"></div>
        </div>

        <nav class="nav" id="nav">
          <ul>
            <li><nuxt-link to="/produtos">{{ $t('products') }}</nuxt-link> </li>
            <li><nuxt-link to="/dicas">{{ $t('tips') }}</nuxt-link> </li>
            <li><nuxt-link to="/contato">{{ $t('contact') }}</nuxt-link> </li>
            <li><nuxt-link to="" class="language">
              {{ $t('languages') }}
              <ul class="hidden">
                <li key="flag-us" v-if="$i18n.locale === 'pt'" @click="setLocale('en')">{{ $t('english') }}</li>
                <li key="flag-br" v-else @click="setLocale('pt')">{{ $t('portuguese') }}</li>
              </ul>
              </nuxt-link> </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- ----------------- -->
    <!-- Header versão desktop  -->
    <div class="desktop w-full h-20 shadow px-5">
      <div class="container flex justify-between items-center ">
      <a href="" class="logo">STACY</a>

      <nav>
        <ul class="flex text-sm  uppercase tracking-wide">
           <li><nuxt-link to="/produtos" class="py-6 pl-4 text-lg">{{ $t('products') }}</nuxt-link> </li>
            <li><nuxt-link to="/dicas" class="py-6 pl-4 text-lg">{{ $t('tips') }}</nuxt-link> </li>
            <li><nuxt-link to="/contato" class="py-6 pl-4 text-lg">{{ $t('contact') }}</nuxt-link> </li>
            <li><nuxt-link to="" class="py-6 pl-4 text-lg language">
              {{ $t('languages') }}
              <ul class="hidden">
                <li key="flag-us" v-if="$i18n.locale === 'pt'" @click="setLocale('en')">{{ $t('english') }}</li>
                <li key="flag-br" v-else @click="setLocale('pt')">{{ $t('portuguese') }}</li>
              </ul>
              </nuxt-link> </li>
        </ul>
      </nav>
    </div>
    </div>

  </header>
  <div class="menu-bg" id="menu-bg"></div>
  </article>
  <!-- ----------------  -->
</template>


<style scoped>

.logo {
  font-weight: 500;
  font-size: 20px;
  color: #433633;

  margin-right: 20px;
  text-decoration: none;
}
/* --------------------------------------------- */

#menu {
  z-index: 2;
}

#menu-bar {
  width: 45px;
  height: 40px;
  margin: 30px 0 20px 20px;
  cursor: pointer;
}

.bar {
  height: 5px;
  width: 100%;
  background-color: #433633;
  display: block;
  border-radius: 5px;
  transition: 0.3s ease;
}

#bar1 {
  transform: translateY(-4px);
}

#bar3 {
  transform: translateY(4px);
}

.nav {
  transition: 0.3s ease;
  display: none;
}

.nav ul {
  padding: 0 22px;
}

.nav li {
  list-style: none;
  padding: 5px 0;
}

.nav li a {
  color: white;
  font-size: 20px;
  text-decoration: none;
}

.nav li a:hover {
  font-weight: bold;
}

.menu-bg,
#menu {
  top: 0;
  left: 0;
  position: absolute;
}

.menu-bg {
  z-index: 1;
  width: 0;
  height: 0;
  margin: 30px 0 20px 20px;
  background: #433633;
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transition: 0.3s ease;
}

.change {
  display: block;
}

.change .bar {
  background-color: white;
}

.change #bar1 {
  transform: translateY(4px) rotateZ(-45deg);
}

.change #bar2 {
  opacity: 0;
}

.change #bar3 {
  transform: translateY(-6px) rotateZ(45deg);
}

.change-bg {
  width: 520px;
  height: 460px;
  transform: translate(-60%, -30%);
}
/* ----------------------------------------- */
/* Configuração do header no desktop  */
.desktop nav ul li a{
  color: #5C5552;
}
.desktop nav ul li a:hover {
  transition: color linear 0.2s;
  color: #000;
}
.language:hover ul, language:focus ul{
  display: block;
  position: absolute;
  z-index: 999;
  width: 150px;
  padding: 10px;

  background-color: #5C5552;

}
.language:hover ul li {
  color: #f3f3f3;
  font-size: 16px;
  transition: all linear 0.2s;
}

.language:hover ul li:hover {
  transition: all linear 0.2s;
 margin-left: 5px;
  color: #fff;
}
/* ---------------------------------------------------- */

@media only screen and (max-width: 699px) {
  /* Configurações do menus no mobile*/
  .mobile {
    display: flex;
  }

  .desktop {
    display: none;
  }

  /* -------------Conteúdo---------------- */

}
/* -------------------------- */
@media only screen and (min-width: 700px) {
  /* Configurações do menus no mobile*/
  .mobile {
    display: none;
  }

  .desktop {
    display: flex;
  }
}

</style>


<script>
export default {
methods: {
  setLocale(code) {
      this.$i18n.setLocale(code)
    },

 menuOnClick: function () {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
}
   
}
</script>
