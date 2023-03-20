<script setup>
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
    summary: 'Impedit animi dicta quod reiciendis porro alias hic laborum! Alias, optio nesciunt nihil aut ea debitis'
  },
];
</script>

<template>
  <!-- It will show this <ul> if the condition is true -->
  <ul
    v-if="blogPosts.length > 0"
    class="blog-posts"
  >
    <!-- Loop through the variable to create that many <li>.
      Key is for caching purposes and must be unique for each item -->
    <li
      v-for="post, index in blogPosts"
      :key="`post-${index}`"
    >
      <h6>{{ post.title }}</h6>
      <p>
        {{ post.summary }}
      </p>
    </li>
  </ul>
  <!-- It will show this <div> if the condition above is false -->
  <div v-else>
    <h6>
      Error: There is no post found
    </h6>
  </div>
</template>

<style lang="sass" scoped>

</style>