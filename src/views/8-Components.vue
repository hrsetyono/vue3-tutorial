<!--
  Component is a reusable unit.

  Each Component has its own scope and all variables, functions, and CSS doesn't affect other components. Unless coded otherwise.
-->
<script setup>
import PostList from '@/components/8-PostList.vue';

const blogPosts = [
  {
    title: 'Lorem ipsum',
    summary: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti eos doloremque ipsum recusandae rerum eum.',
  },
  {
    title: 'Perspiciatis dignissimos',
    summary: 'Eaque quos repellat sed maxime at dolore autem quas blanditiis itaque aperiam! Laboriosam provident',
  },
  {
    title: 'Adipisci consectetur voluptas',
    summary: 'Harum sit veniam et pariatur placeat nam facere libero itaque tempora, nostrum saepe voluptatum officiis possimus commodi',
  },
  {
    title: 'Fuga reprehenderit',
    summary: 'Impedit animi dicta quod reiciendis porro alias hic laborum! Alias, optio nesciunt nihil aut ea debitis',
  },
];
</script>

<template>
  <ul class="blog-posts">
    <!-- We are using the component here. We loop through it and assign custom properties called 'post-title' and 'post-summary' -->
    <PostList
      v-for="item, index in blogPosts"
      :key="`post-${index}`"

      :post-title="item.title"
      :post-summary="item.summary"
    />
  </ul>
</template>

<style lang="sass" scoped>
</style>
