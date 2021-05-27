<template>
  <h2 class="title w-40 text-3xl mb-4 font-thin relative text-color-title" title="Dicas">{{ $t('tips') }}</h2> 
</template>

<style scoped>

.title::before{
content: "";
display: block;
height: 1px;
width: 35px;
background-color: #433633;
}
.title::after{
position: absolute;
content: "";
display: block;
height: 1px;
width: 35px;
right: 75px;
background-color: #433633;
}

</style>