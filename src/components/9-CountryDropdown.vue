<script setup>
// 'modelValue' is alias for 'v-model' property
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

// it means this component can trigger event that updates the v-model
const emit = defineEmits(['update:modelValue']);

const countryList = {
  DZ: 'Algeria',
  EG: 'Egypt',
  KE: 'Kenya',
  MA: 'Morocco',
  ZA: 'South Africa',

  CN: 'China',
  IN: 'India',
  JP: 'Japan',
  KR: 'South Korea',
  TH: 'Thailand',

  FR: 'France',
  DE: 'Germany',
  IT: 'Italy',
  ES: 'Spain',
  GB: 'United Kingdom',

  CA: 'Canada',
  CR: 'Costa Rica',
  MX: 'Mexico',
  US: 'United States',
  JM: 'Jamaica',

  AR: 'Argentina',
  BR: 'Brazil',
  CL: 'Chile',
  CO: 'Colombia',
  PE: 'Peru',
};

const onChange = (e) => {
  // trigger an event that update whatever variable in v-model
  emit('update:modelValue', e.currentTarget.value);
};
</script>

<template>
  <select @change="onChange">
    <option value="">
      -
    </option>
    <option
      v-for="countryCode in Object.keys(countryList)"
      :key="`select-country-${countryCode}`"
      :value="countryCode"
      :selected="countryCode === modelValue"
    >
      {{ countryList[countryCode] }}
    </option>
  </select>
</template>

<style lang="sass" scoped>
</style>
