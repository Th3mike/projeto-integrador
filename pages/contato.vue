<template>
  <main>
    <Banner-contato class="banner-contato" />
    <SectionForm id="contato"/>
    <Newsletter />
  </main>
</template>

<script>
import Vue from 'vue';

import Meta from 'vue-meta';

Vue.use(Meta);


export default {
    name: 'Contato',
    metaInfo: {
      title: 'Stacy | Seja bem vindo!',
      // override the parent template and just use the above title only
      titleTemplate: '%s ← Contato |',
      htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Tem alguma dúvida ou sugestão? Preencha nosso formulário e entre em contato conosco, assine nossa news letter' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
  
}
</script>