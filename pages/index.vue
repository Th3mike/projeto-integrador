<template>
   <div class="carrousel px-6">
    <h1></h1>
  </div>
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

.carrousel{
  width: 100%;
  height: 400px;
  background-image: url("../assets/banner.jpg") ;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
