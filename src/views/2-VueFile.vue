<script setup>
const myVar = 'Hello world';
</script>

<template>
  <h1>{{ myVar }}</h1>
</template>

<style scoped>
  h1 {
    color: green;
  }
</style>
<!--
  - <script> is for JavaScript

  - <template> is for HTML

  - <style> is for CSS - The 'scoped' attribute means the styling here won't leak to other files.

  This is good for separation of concern while keeping maintainability.

  You don't have to scramble around to find where is the CSS that affect this HTML. Everything is within 1 file.
-->
