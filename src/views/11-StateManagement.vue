<script setup>
import { useStore } from '@/stores';

const store = useStore();
</script>

<template>
  <h2>
    Counter: {{ store.counter }}
  </h2>
  <button @click="store.counter -= 1">
    -
  </button>
  <button @click="store.counter += 1">
    +
  </button>
  <p>
    Store is used to keep variable that can be used across the application such as loggedIn state.
  </p>
  <p>
    Here we have a counter. This counter will not reset even if you go to other pages.
    Try going to
    <router-link :to="{ name: '11b' }">
      this page
    </router-link>.
  </p>
</template>

<style lang="sass" scoped>
button
  display: inline-block
  width: 2rem
  height: 2rem
  margin-right: 1rem
</style>
