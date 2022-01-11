<template>
  <view>
    <u-select v-model="show" :list="countryCodes"></u-select>
  </view>
</template>

<script>
const COUNTRY_CODES = [
  {
    value: "853",
    label: "+853",
  },
  {
    value: "86",
    label: "+86",
  },
  {
    value: "852",
    label: "+852",
  },
];
export default {
  computed: {
    countryCodes() {
      return COUNTRY_CODES;
    },
  },
  data() {
    return { show: true };
  },
};
</script>

<style lang="scss" scoped>
</style>