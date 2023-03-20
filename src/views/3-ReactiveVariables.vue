<script setup>
import { ref } from 'vue';

const num = ref(0);

const changeNum = (change) => {
  num.value += change;
};
</script>
<!--
  Import is like 'require' in PHP but you can select which function to require.

  If a variable is assigned ref() value, it becomes reactive variable.

  Whenever the value of reactive variable is changed, it automatically find all of its reference and update it too.
-->

<template>
  <h2>
    Number: {{ num }}
  </h2>

  <!-- Button with click listener that calls 'changeNum' function we defined above -->
  <button @click="changeNum(-1)">
    -
  </button>
  <button @click="changeNum(1)">
    +
  </button>
</template>

<style lang="sass" scoped>
button
  display: inline-block
  width: 2rem
  height: 2rem
  margin-right: 1rem
</style>
