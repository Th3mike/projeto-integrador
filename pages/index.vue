<template>
<main>
  
<Banner class="banner"/>

<h2 class="title w-40 text-center text-2xl font-thin mx-auto mt-20 relative text-color-title">DESTAQUES</h2> 

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

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 

        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
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
.banner{
  background-image: url("../assets/banner.jpg") ;
}

.title::before{
content: "";
display: block;
height: 1px;
width: 35px;
margin-left: 14px;
background-color: #433633;
}
.title::after{
position: absolute;
content: "";
display: block;
height: 1px;
width: 35px;
right: 14px;
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