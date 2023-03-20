<script setup>
import { useStore } from '@/stores';

const store = useStore();
</script>

<template>
  <h1>This is a different page</h1>
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
    As you can see, the counter stays the same. Try clicking (+) or (-) again and
    go back to <router-link :to="{ name: '11' }">
      previous page
    </router-link>. The counter stays the same too.
  </p>
</template>

<style lang="sass" scoped>
h2
  color: red
button
  display: inline-block
  width: 2rem
  height: 2rem
  margin-right: 1rem
</style>
