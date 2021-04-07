<template>
  <div class="mapa flex justify-end">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14834.997776181553!2d-48.3489365!3d-21.634684999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8e039a6cf406b%3A0xcc0a6171540de18d!2sPortal%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1617834380332!5m2!1spt-BR!2sbr"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      class="float-right"
    ></iframe>
  </div>
</template>


<style scoped>
.mapa {
  width: 100%;
  height: 300px;
  margin-top: 200px;
  position: relative;
  background-color: #decbb7;
}
iframe {
  width: 456px;
  height: 246px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .mapa {
    width: 100%;
    height: 150px;
    margin-top: 400px;
    position: relative;
    background-color: #decbb7;
  }
}
</style>
