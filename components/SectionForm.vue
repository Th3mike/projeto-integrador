<template>
  <article class="w-full flex items-center justify-center h-64 text-bg-marrom-100 px-5 mt-48">
    <div class="container">
      <section class="flex items-center justify-between">
        <Form />
        <Map />
      </section>
    </div>
  </article>
</template>

<style scoped>
@media only screen and (max-width: 699px) {
section{
  flex-direction: column;
}
}
</style>