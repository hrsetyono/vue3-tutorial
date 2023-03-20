import { ref, watch } from 'vue';
import { defineStore } from 'pinia';

export const useStore = defineStore('store', () => {
  const counter = ref(localStorage.getItem('counter') || 0);

  watch(counter, (newValue) => {
    localStorage.setItem('counter', newValue);
  });

  return {
    counter,
  };
});

export default useStore;
