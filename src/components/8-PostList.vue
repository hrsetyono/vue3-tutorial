<!-- This is component for Ch.8 -->
<script setup>

// Define available props for this component
// a prop name is camelStyle like 'postTitle', but when called in HTML, use the kebab case 'post-title'.
const props = defineProps({
  postTitle: {
    type: String, // can be Boolean, Number, Array, Object
    required: true,
  },
  postSummary: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <li>
    <h6>{{ postTitle }}</h6>
    <p>
      {{ postSummary }}
    </p>
  </li>
</template>

<style lang="sass" scoped>
</style>
