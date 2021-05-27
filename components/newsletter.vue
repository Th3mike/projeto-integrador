<template>
  <article class="w-full h-40 flex items-center justify-center px-5 text-bg-marrom-100 mt-40">
    <div class="container">
      <section class="flex items-center justify-between">
        <div>
          <h3 class="text-3xl font-extrabold text-color-card">NEWSLETTER</h3>
          <p class="text-color-card">{{ $t('textNewsletter') }}</p>
        </div>

          <div class="news flex items-center">
            <input type="text" placeholder="E-mail">
            <nuxt-link to="">{{ $t('submit') }}</nuxt-link>
          </div>
      </section>
    </div>
  </article>
</template>


<style scoped>
.news{
  width: 80%;
}

.news input{
  width: 100%;
  height: 40px;

  padding: 5px 15px;
  color: #5C5552;

  border-radius: 4px;
}

.news a{
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

  color: #fff;
  background-color: #8F857D;
  border-radius: 4px;

}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 699px) {
  article{
    margin-top: 16rem;
    height: auto;
    padding: 10px 20px ;
  }
  section{
    flex-direction: column;
    height: auto;
  }
  .news{
  width: 100%;
}
}
</style>
