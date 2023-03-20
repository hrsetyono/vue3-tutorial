<script setup>
</script>

<template>
  <div class="wrapper">
    <div class="wrapper__inner">
      <!-- This will be replaced by the template of current views -->
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </router-view>
    </div>

    <!-- App.vue is good place to put in Header and Footer -->
    <footer>
      <h3>Table of Contents</h3>
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">
            Home
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: '2' }">
            Ch.2 - Vue File
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: '3' }">
            Ch.3 - Vue File Extension
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: '4' }">
            Ch.4 - Attribute Binding
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: '5' }">
            Ch.5 - Class Binding
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: '6' }">
            Ch.6 - Condition & Looping
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: '7' }">
            Ch.7 - Computed Property
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: '8' }">
            Ch.8 - Components
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: '9' }">
            Ch.9 - Component Communication
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: '10' }">
            Ch.10 - Calling API
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: '10b' }">
            Ch.10b - Calling API 2
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: '11' }">
            Ch.11 - State Management
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style lang="sass" scoped>
.wrapper
  display: flex
  flex-direction: column
  max-width: 1000px
  padding: 2rem 0.25rem
  margin: 0 auto
  height: 100vh

footer
  padding: 0.5rem 0
  border-top: 1px dashed gray
  margin-top: auto

ul
  display: flex
  flex-wrap: wrap
  column-gap: 1.75rem
</style>
