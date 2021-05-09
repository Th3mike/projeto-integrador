<template>
<main>
  
<Carrousel />
<TitleBody /> 
<Produtos />

<h2 class="title w-40 text-center text-2xl font-thin mx-auto mt-20 relative text-color-title">QUEM SOMOS</h2>

<article class="QS w-full h-56 px-5 text-bg-marrom-100 mt-5">
  <div class="container">

    <section class="flex justify-end">
      <div class="w-48">
        <img src="../assets/quemsomos.png" class="object-contain imgQS" alt="Quem somos Stacy">
      </div>

      <div class="content w-8/12 bg-white p-10 rounded mt-20 shadow-lg">
        <h3 class="mb-3 text-lg text-color-title">STACY</h3>

        <p>
          Somos a Stacy, criada há três anos com o objetivo de trazer elegância e conforto para toda a sua casa, desde o surgimento uma das nossas maiores metas sempre foi levar até você, produtos de qualidade, durabilidade, com preço excelentes. 
<br><br>
          Temos por toda região de São Paulo, clientes fiéis e satisfeitos com nossos produtos, buscamos pensar
          na experiência do usuário, para que realmente possamos cumprir nossos objetivos. 
<br>         
          Stacy é formada por um grupo de profissionais altamente qualificados com anos de experiência, em todos nossos setores optamos por ter uma cultura de trabalho em equipe pois, a união faz a força e força é uma qualidade e qualidade é Stacy!      
         </p>
      </div>
      </section> 
  </div>

</article>
  </main>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>

<style escoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.title::before{
content: "";
display: block;
height: 1px;
width: 35px;
background-color: #433633;
}
.title::after{
position: absolute;
content: "";
display: block;
height: 1px;
width: 35px;
right: 0;
background-color: #433633;
}

.imgQS{
  margin-top: -170px;
}

.QS{
  margin-bottom: 300px;
}

@media only screen and (max-width: 699px) {
  /* Configurações do  mobile*/

 .QS section{
   flex-direction: column;
 }

.QS section div:nth-child(2){
   width: 100%;
 }
.QS section div img {
  display: none;
}

 .QS{
  margin-bottom: 800px;
}
.imgQS{
  margin-top: -102px;
}

}

</style>