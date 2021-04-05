<template>
  <article>
  <!-- Header  -->
  <header>
    <!-- Header versão mobile  -->
    <div class="mobile flex h-20 justify-end items-center">
      <nuxt-link to="" class="logo">STACY</nuxt-link> 

      <div id="menu">
        <div id="menu-bar" @click="menuOnClick">
          <div id="bar1" class="bar"></div>
          <div id="bar2" class="bar"></div>
          <div id="bar3" class="bar"></div>
        </div>

        <nav class="nav" id="nav">
          <ul>
            <li><nuxt-link to="">PRODUTOS</nuxt-link> </li> 
            <li><nuxt-link to="">DICAS</nuxt-link> </li> 
            <li><nuxt-link to="">CONTATO</nuxt-link> </li> 
            <li><nuxt-link to="" class="lenguage">
              LENGUAGE
              <ul class="hidden">
                <li>INGLES</li>
                <li>ESPANHOL</li>
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
           <li><nuxt-link to="" class="py-6 pl-4 text-lg">PRODUTOS</nuxt-link> </li> 
            <li><nuxt-link to="" class="py-6 pl-4 text-lg">DICAS</nuxt-link> </li> 
            <li><nuxt-link to="/contato" class="py-6 pl-4 text-lg">CONTATO</nuxt-link> </li> 
            <li><nuxt-link to="" class="py-6 pl-4 text-lg lenguage">
              LENGUAGE
              <ul class="hidden">
                <li>INGLES</li>
                <li>ESPANHOL</li>
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
  color: #433633;
}
.lenguage:hover ul{
  display: block;
  position: absolute;
  width: 150px;
  padding: 10px;

  background-color: #DECBB7;
  
}
.lenguage:hover ul li {
  font-size: 16px;
  transition: all linear 0.2s;
}

.lenguage:hover ul li:hover {
  transition: all linear 0.2s;
 margin-left: 5px;
  color: #5C5552;
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
 menuOnClick: function () {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
}
}
</script>