<script setup>
import { ref } from 'vue';

const isExpanded = ref(false);
</script>

<template>
  <!-- If isExpanded is true, this <div> will have additional 'is-expanded' class -->
  <div
    class="faq"
    :class="{
      'is-expanded': isExpanded,
    }"
  >
    <!-- Clicking the <h6> will toggle the isExpanded value -->
    <h6 @click="isExpanded = !isExpanded">
      Click me to expand the answer
    </h6>
    <article>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nostrum laborum.
      </p>
      <p>
        Non in voluptas magnam ipsa earum corporis sunt tempore! Voluptates beatae.
      </p>
    </article>
  </div>
</template>

<style lang="sass" scoped>
  h6
    cursor: pointer
    background-color: lightgray
    padding: 0.5rem

  /* We are using CSS to show/hide the FAQ answer */
  article
    display: none

  .is-expanded article
    display: block
</style>
