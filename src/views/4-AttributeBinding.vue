<script setup>
import { ref } from 'vue';

const imageSrc = ref('/images/image01.jpg');

const changeImage = () => {
  imageSrc.value = '/images/image02.jpg';
};
</script>

<template>
  <!-- You can insert javascript variable into an attribute by prefixing it with semicolon -->
  <img :src="imageSrc">

  <button @click="changeImage">
    Change Image
  </button>
</template>

<style lang="sass" scoped>
</style>
