<!--
  Component can trigger an event to change something in its parent.

  The simplest way is to add `v-model` in the component. This will be translated into `modelValue` props.

  Checkout SelectCountry.vue component to see how to trigger the event.
-->
<script setup>
import { ref } from 'vue';
import CountryDropdown from '@/components/9-CountryDropdown.vue';

const selectedCountry = ref('');
</script>

<template>
  <h3>
    Country Selected: {{ selectedCountry }}
  </h3>

  <CountryDropdown v-model="selectedCountry" />

  <!-- The line above is the shortcut for writing this: -->
  <!-- <CountryDropdown
    :model-value="selectedCountry"
    @update:model-value="(val) => selectedCountry = val"
  /> -->
</template>

<style lang="sass" scoped>
h3
  margin-bottom: 1rem
</style>
