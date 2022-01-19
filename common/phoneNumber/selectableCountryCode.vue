<template>
  <view>
    <u-input
      type="select"
      :value="selectedCountryCode"
      @click="onClickSelectCountryCodeDropdown"
    />
    <u-select
      confirm-text="確認"
      v-model="show"
      :list="countryCodes"
      @confirm="onConfirmCountryCode"
    ></u-select>
  </view>
</template>

<script>
import { COUNTRY_CODES, getLabelByKey } from "../../enum/countryCode";

export default {
  computed: {
    countryCodes() {
      return COUNTRY_CODES.map((countryCode) => ({
        ...countryCode,
        value: countryCode.key,
      }));
    },
    selectedCountryCode() {
      return getLabelByKey(this.value);
    },
  },
  data() {
    return { show: false };
  },
  methods: {
    onClickSelectCountryCodeDropdown() {
      this.show = !this.show;
    },
    onConfirmCountryCode(countryCodes) {
      // this return an array
      const countryCode = countryCodes[0];
      this.$emit("input", countryCode.value);
    },
  },
  props: {
    value: String,
  },
};
</script>

<style lang="scss" scoped>
</style>