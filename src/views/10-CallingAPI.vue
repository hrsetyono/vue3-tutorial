<script setup>
import axios from 'axios'; // this is the library to simplify calling API
import { ref, onBeforeMount } from 'vue';

const data = ref([]);
const isLoading = ref(true);

// Call the API inside onBeforeMount() so before the HTML is loaded
// Use onMounted() if you need the HTML to be loaded first
onBeforeMount(async () => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts');
  data.value = response.data;

  isLoading.value = false;
});
</script>

<template>
  <div v-if="isLoading">
    <span class="loader" />
  </div>
  <div v-else>
    <ul>
      <li
        v-for="item in data"
        :key="`item-${item.id}`"
      >
        <h5>{{ item.title }}</h5>
        <p>
          {{ item.body }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
h3
  margin-bottom: 1rem

.loader
  width: 48px
  height: 48px
  border: 5px solid #333
  border-bottom-color: transparent
  border-radius: 50%
  display: inline-block
  box-sizing: border-box
  animation: rotation 1s linear infinite

@keyframes rotation
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>
