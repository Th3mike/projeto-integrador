<template>
  <h2 class="title w-40 text-3xl mb-4 relative text-color-title">{{ $t('contact') }}</h2> 
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
right: 30px;
background-color: #433633;
}

</style>