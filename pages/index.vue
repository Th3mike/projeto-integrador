<template>
<main>
  
<Banner class="banner"/>

<h2 class="title w-40 text-center text-2xl font-thin mx-auto mt-20 relative text-color-title">DESTAQUES</h2> 
<Produtos />
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
margin-left: 15px;
background-color: #433633;
}
.title::after{
position: absolute;
content: "";
display: block;
height: 1px;
width: 35px;
right: 15px;
background-color: #433633;
}
</style>