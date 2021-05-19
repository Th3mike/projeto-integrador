<template>
  <h2 class="title w-40 text-center text-2xl font-thin mx-auto mt-20 relative text-color-title uppercase">{{ $t('highlights') }}</h2> 
</template>

<style scoped>

.title::before{
content: "";
display: block;
height: 1px;
width: 35px;
margin-left: 14px;
background-color: #433633;
}
.title::after{
position: absolute;
content: "";
display: block;
height: 1px;
width: 35px;
right: 14px;
background-color: #433633;
}

</style>