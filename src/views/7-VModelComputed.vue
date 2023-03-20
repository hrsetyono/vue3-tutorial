<script setup>
import { ref, computed } from 'vue';

const selectedGender = ref('');
const searchQuery = ref('');

const data = ref([
  { id: 1, name: 'John', gender: 'm' },
  { id: 2, name: 'Mary', gender: 'f' },
  { id: 3, name: 'David', gender: 'm' },
  { id: 4, name: 'Sarah', gender: 'f' },
  { id: 5, name: 'James', gender: 'm' },
  { id: 6, name: 'Jessica', gender: 'f' },
  { id: 7, name: 'William', gender: 'f' },
]);

// Computed is a variable which value is based on other variables
const computedData = computed(() => {
  let result = data.value;

  if (selectedGender.value) {
    result = result.filter((item) => item.gender === selectedGender.value);
  }

  if (searchQuery.value) {
    result = result.filter((item) => {
      const isFound = item.name.toLowerCase().indexOf(
        searchQuery.value.toLowerCase(),
      );

      return isFound >= 0;
    });
  }

  return result;
});
</script>

<template>
  <!-- Form element like <select>, <input>, <textarea> can have v-model which is synced to their value -->
  <select v-model="selectedGender">
    <option value="">
      Semua Gender
    </option>
    <option value="m">
      Laki-laki
    </option>
    <option value="f">
      Perempuan
    </option>
  </select>

  <input
    v-model.trim="searchQuery"
    type="text"
    placeholder="Cari nama"
  >

  <table>
    <thead>
      <tr>
        <th>Nama</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      <!-- We are looping the computed property so it shows the search result and other filter -->
      <tr
        v-for="item in computedData"
        :key="`employee-${item.id}`"
      >
        <td>
          {{ item.name }}
        </td>
        <td>
          {{ item.gender }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="sass" scoped>
select
  margin-right: 1rem

table
  margin-top: 1rem
td
  padding: 0.25rem 0.5rem
  border: 1px solid black

</style>
