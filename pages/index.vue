<template>
  <div class="carrousel">
    <h1>TEST TEST</h1>
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
  height: 350px;
  background: #DECBB7;

}

</style>
