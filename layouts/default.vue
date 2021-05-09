<template>
  <div>
    <Header />
      <Nuxt />
    <Footer />
  </div>
</template>

<style>

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
/* font-family: 'Poppins', sans-serif; */

html {
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container{
  width: 960px;
  margin: 0 auto;
  box-sizing: border-box;
}

img{
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;

}
/* Cores letras  */
.text-color-card{
  color: #5C5552;
}
.text-color-title{
  color: #433633;
}
/* cores background  */
.text-bg-marrom-100{
background-color: #DECBB7;
}
.text-bg-marrom-800{
  background-color: #8F857D;
}
/* Botão  */
.btn-buy{
width: 100px;
height: 37px;

display: flex;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

font-size: 14px;

border-radius: 4px;
color: #fff;
background-color: #8F857D;
}

.btn-buy::after{
content: "";
display: none;
position: absolute;

width: 20%;
height: 40px;

background-color: #fff5;
animation: btnEfect infinite 1s;
}
.btn-buy:hover::after {
  display: block;
}
@keyframes btnEfect {
  from{
    margin-left: -100%;
  }
  to{
  margin-left: 200%;
  }
}
/* -------------------------------- */


@media only screen and (max-width: 699px) {
  /* Configurações do  mobile*/
 .container{
   width: 100%;
 }
.btn-buy{
  overflow: visible;
}
  /* -------------Conteúdo---------------- */
}
/* -------------------------- */
@media only screen and (min-width: 700px) {
  /* Configurações do  desktop*/

}


</style>
