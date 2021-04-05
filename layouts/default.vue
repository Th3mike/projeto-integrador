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
  border-style: none !important;
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

.text-color-card{
  color: #5C5552;
}
.text-color-title{
  color: #433633;
}
.btn-buy{
  width: 100px;
  padding: 5px ;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;

border-radius: 4px;
color: #fff;
background-color: #8F857D;
}
/* -------------------------------- */


@media only screen and (max-width: 699px) {
  /* Configurações do  mobile*/
 .container{
   width: 100%;
 }

  /* -------------Conteúdo---------------- */

}
/* -------------------------- */
@media only screen and (min-width: 700px) {
  /* Configurações do  desktop*/

}


</style>
