<template>
  <section class="mt-5 px-6">
    <div class="container">
      <ul class="flex justify-between flex-wrap">

        <li class="w-56 h-64 mb-5 rounded">
          <div class="w-full h-40">
            <img src="../assets/imgOne.png" class="rounded" alt="Produtos Stacy">
          </div>

          <section class="h-20 flex flex-row items-center justify-around mt-2">
            <div class="flex flex-col text-color-card">
              <h3 class="text-base">{{ $t('coupleKit') }}</h3>
              <span class="text-sm"><s>R$ 73,98</s></span>
              <p>R$ 36,99</p>
            </div>
            <a class="btn-buy" href="https://api.whatsapp.com/send?phone=551499685-3425" target="_blank">{{ $t('PURCHASE') }}</a>
          </section>
        </li>

        <li class="w-56 h-64 mb-5 rounded">
          <div class="w-full h-40">
            <img src="../assets/imgTwo.png" class="rounded" alt="Produtos Stacy">
          </div>

          <section class="h-20 flex flex-row items-center justify-around mt-2">
            <div class="flex flex-col text-color-card">
              <h3 class="text-base">{{ $t('luxuryCouple') }}</h3>
              <span class="text-sm"><s>R$ 73,98</s></span>
              <p>R$ 36,99</p>
            </div>
            <a class="btn-buy" href="https://api.whatsapp.com/send?phone=551499685-3425" target="_blank">{{ $t('PURCHASE') }}</a>
          </section>
        </li>

        <li class="w-56 h-64 mb-5 rounded">
          <div class="w-full h-40">
            <img src="../assets/imgThree.png" class="rounded" alt="Produtos Stacy">
          </div>

          <section class="h-20 flex flex-row items-center justify-around mt-2">
            <div class="flex flex-col text-color-card">
              <h3 class="text-base">{{ $t('doubleSheet') }}</h3>
              <span class="text-sm"><s>R$ 73,98</s></span>
              <p>R$ 36,99</p>
            </div>
            <a class="btn-buy" href="https://api.whatsapp.com/send?phone=551499685-3425" target="_blank">{{ $t('PURCHASE') }}</a>
          </section>
        </li>

        <li class="w-56 h-64 mb-5 rounded">
          <div class="w-full h-40">
            <img src="../assets/imgTen.png" class="rounded" alt="Produtos Stacy">
          </div>

          <section class="h-20 flex flex-row items-center justify-around mt-2">
            <div class="flex flex-col text-color-card">
              <h3 class="text-base">{{ $t('grayKit') }}</h3>
              <span class="text-sm"><s>R$ 73,98</s></span>
              <p>R$ 36,99</p>
            </div>
            <a class="btn-buy" href="https://api.whatsapp.com/send?phone=551499685-3425" target="_blank">{{ $t('PURCHASE') }}</a>
          </section>
        </li>

        <li class="w-56 h-64 mb-5 rounded">
          <div class="w-full h-40">
            <img src="../assets/imgFour.png" class="rounded" alt="Produtos Stacy">
          </div>

          <section class="h-20 flex flex-row items-center justify-around mt-2">
            <div class="flex flex-col text-color-card">
              <h3 class="text-base">{{ $t('femaleKit') }}</h3>
              <span class="text-sm"><s>R$ 73,98</s></span>
              <p>R$ 36,99</p>
            </div>
            <a class="btn-buy" href="https://api.whatsapp.com/send?phone=551499685-3425" target="_blank">{{ $t('PURCHASE') }}</a>
          </section>
        </li>

        <li class="w-56 h-64 mb-5 rounded">
          <div class="w-full h-40">
            <img src="../assets/imgFive.png" class="rounded" alt="Produtos Stacy">
          </div>

          <section class="h-20 flex flex-row items-center justify-around mt-2">
            <div class="flex flex-col text-color-card">
              <h3 class="text-base">{{ $t('luxuryGame') }}</h3>
              <span class="text-sm"><s>R$ 73,98</s></span>
              <p>R$ 36,99</p>
            </div>
            <a class="btn-buy" href="https://api.whatsapp.com/send?phone=551499685-3425" target="_blank">{{ $t('PURCHASE') }}</a>
          </section>
        </li>

        <li class="w-56 h-64 mb-5 rounded">
          <div class="w-full h-40">
            <img src="../assets/imgSix.png" class="rounded" alt="Produtos Stacy">
          </div>

          <section class="h-20 flex flex-row items-center justify-around mt-2">
            <div class="flex flex-col text-color-card">
              <h3 class="text-base">{{ $t('premium') }}</h3>
              <span class="text-sm"><s>R$ 73,98</s></span>
              <p>R$ 36,99</p>
            </div>
            <a class="btn-buy" href="https://api.whatsapp.com/send?phone=551499685-3425" target="_blank">{{ $t('PURCHASE') }}</a>
          </section>
        </li>

        <li class="w-56 h-64 mb-5 rounded">
          <div class="w-full h-40">
            <img src="../assets/imgSeven.png" class="rounded" alt="Produtos Stacy">
          </div>

          <section class="h-20 flex flex-row items-center justify-around mt-2">
            <div class="flex flex-col text-color-card">
              <h3 class="text-base">{{ $t('doubleSheet') }}</h3>
              <span class="text-sm"><s>R$ 73,98</s></span>
              <p>R$ 36,99</p>
            </div>
            <a class="btn-buy" href="https://api.whatsapp.com/send?phone=551499685-3425" target="_blank">{{ $t('PURCHASE') }}</a>
          </section>
        </li>
    </ul>
  </div>
  </section>
</template>


<style scoped>

ul li{
background-color: #DECBB7 ;
}
/* --------- */


@media only screen and (max-width: 699px) {
  /* Configurações do  mobile*/
 .container{
   width: 100%;
 }
 ul{
   display: grid;
   grid-template-columns: 1fr 1fr;
   column-gap: 20px;
 }
 
  ul li{
  width: auto;
  height: auto;
  min-height: 220px;
}

ul li section{
  height: auto;
  flex-direction: column;
  padding: 5px;
}
  /* -------------Conteúdo---------------- */
}
/* -------------------------- */
@media only screen and (min-width: 700px) {
  /* Configurações do  desktop*/
}
</style>
