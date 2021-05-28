<template>
<div id="dc">
 <div class=" flex justify-center flex-wrap p-10">
       
    <!--Card 1-->
    <div title="Card Quarto"  class="card max-w-xl m-2  rounded overflow-hidden shadow-lg">
      <br>
      <div class="titulo text-2xl mb-2 text-center">{{ $t('room') }}</div>
      <div class="px-6 py-4">
        <div class="card1">
            <img src="../assets/card1.jpg" alt="Quarto">
        </div>
      </div>
    </div>
     <!--Card 2-->
    <div title="Card Cozinha" class="card max-w-xl m-2  rounded overflow-hidden shadow-lg">
      <br>
      <div class="titulo text-2xl mb-2 text-center">{{ $t('Kitchen') }}</div>
      <div class="px-6 py-4">
          <div class="card1">
            <img src="../assets/Cozinha.jpg" alt="Cozinha">
        </div>
      </div>
     
    </div>
     <!--Card 3-->
    <div title="Card Banheiro" class="card max-w-xl m-2  rounded overflow-hidden shadow-lg">
      <br>
      <div class="titulo text-2xl mb-2 text-center">{{ $t('restroom') }}</div>
      <div class="px-6 py-4">
          <div class="banheiro">
            <img src="../assets/Banheiro.jpg" alt="Banheiro">
        </div>
      </div>
    </div>
     <!--Card 4-->
    <div title="Card Sala" class="card max-w-xl m-2  rounded overflow-hidden shadow-lg">
      <br>
      <div class="titulo text-2xl mb-2 text-center">{{ $t('livingRoom') }}</div>
      <div class="px-6 py-4">
          <div class="sala">
            <img src="../assets/Sala.jpg" alt="Sala">
        </div>
      </div>
     
    </div>
  </div>
  <div title="Vídeo" class="cor pt-4 mb-40">
    <div class="titulo text-2xl mb-2 text-center">Video</div>
  <div class="cor flex justify-center pt-8 shadow-lg pb-4">
    
    <iframe class="video" width="45%" height="100%" src="https://www.youtube.com/embed/pXY_ZVEQA9A" 
    title="YouTube video player"
     frameborder="0" allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
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
.cor {
  background-image: url("../assets/cordicas.png");
  height: 350px;
}
.cor1{
  background-image: url("../assets/cordicas.png");
}
@media only screen and (max-width: 600px) {
.video{
  width: 95%;
}


}

</style>