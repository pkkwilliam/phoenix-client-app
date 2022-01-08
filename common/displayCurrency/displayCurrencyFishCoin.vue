<template>
  <view>
    <u-icon
      class="icon-container light-blue"
      custom-prefix="phoenix-custom-icon"
      name="fish_coin"
      size="38"
      :top="3"
    />
    <text class="h2 blue">{{ value }}</text>
  </view>
</template>

<script>
import uIcon from "../../uview-ui/components/u-icon/u-icon.vue";
export default {
  components: { uIcon },
  computed: {},
  props: {
    priceColor: {
      default: "primary",
      type: String,
    },
    value: {
      default: 0,
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>