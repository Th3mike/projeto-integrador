<template>
 <div class=" flex justify-center flex-wrap p-10">
       
    <!--Card 1-->
    <div class="card max-w-xl m-2  rounded overflow-hidden shadow-lg">
      <br>
      <div class="titulo text-2xl mb-2 text-center font-thin">{{ $t('room') }}</div>
      <div class="px-6 py-4">
        <div class="card1">
            <img src="../assets/card1.jpg">
        </div>
      </div>
    </div>
     <!--Card 2-->
    <div class="card max-w-xl m-2  rounded overflow-hidden shadow-lg">
      <br>
      <div class="titulo text-2xl mb-2 text-center font-thin">{{ $t('Kitchen') }}</div>
      <div class="px-6 py-4">
          <div class="card1">
            <img src="../assets/Cozinha.jpg">
        </div>
      </div>
     
    </div>
     <!--Card 3-->
    <div class="card max-w-xl m-2  rounded overflow-hidden shadow-lg">
      <br>
      <div class="titulo text-2xl mb-2 text-center font-thin">{{ $t('restroom') }}</div>
      <div class="px-6 py-4">
          <div class="banheiro">
            <img src="../assets/Banheiro.jpg">
        </div>
      </div>
    </div>
     <!--Card 4-->
    <div class="card max-w-xl m-2  rounded overflow-hidden shadow-lg">
      <br>
      <div class="titulo text-2xl mb-2 text-center font-thin">{{ $t('livingRoom') }}</div>
      <div class="px-6 py-4">
          <div class="sala">
            <img src="../assets/Sala.jpg">
        </div>
      </div>
     
    </div>
  </div>
</template>


<style scoped>
.card{
    background-color: #DECBB7;
}
.titulo{
  max-width: 100%;
  background-color: #8F857D;
}

</style>