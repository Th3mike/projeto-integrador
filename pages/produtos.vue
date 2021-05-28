<template>
<main>
  <Bannerprodutos class="banner-produtos"/>
  <Cardsprodutos/>

  </main>
</template>

<script>
import Vue from 'vue';

import Meta from 'vue-meta';

Vue.use(Meta);


export default {
    name: 'Produtos',
    metaInfo: {
      title: 'Stacy | Seja bem vindo!',
      // override the parent template and just use the above title only
      titleTemplate: '%s ← Produtos |',
      htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Confira todos nossos produtos separados por categoria!' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
  
}
</script>

<style escoped>

</style>
