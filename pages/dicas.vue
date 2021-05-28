<template>
<main>
  <Bannerdicas class="banner-dicas"/>
  <Cardsdicas/>
 
  </main>
</template>

<script>
</script>

<style escoped>

</style>

<script>
import Vue from 'vue';

import Meta from 'vue-meta';

Vue.use(Meta);


export default {
    name: 'Dicas',
    metaInfo: {
      title: 'Stacy | Seja bem vindo!',
      // override the parent template and just use the above title only
      titleTemplate: '%s ← Dicas |',
      htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Encontre várias dicas para sua casa, e deixe-a de cara nova, assista nosso vídeo de dicas para conhecer mais!' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
  
}
</script>