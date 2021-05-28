<template>
<main>
  
<Carrousel />
<TitleBody /> 
<Produtos />

<h2 class="title w-40 text-center text-2xl mx-auto mt-20 relative text-color-title">{{ $t('whoweare') }}</h2>

<article class="QS w-full h-56 px-5 text-bg-marrom-100 mt-5">
  <div class="container">

    <section class="flex justify-end">
      <div class="w-48">
        <img src="../assets/quemsomos.png" class="object-contain imgQS" alt="Quem somos Stacy">
      </div>

      <div class="content w-8/12 bg-white p-10 rounded mt-20 shadow-lg">
        <h3 class="mb-3 text-lg text-color-title">STACY</h3>

        <p>
          {{ $t('textptOneHome') }} 
<br><br>
           {{ $t('textptTwoHome') }}
<br>         
          {{ $t('textptThreeHome') }}     
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
.title{
  width: 173px;
}
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