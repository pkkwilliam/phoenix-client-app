<template>
  <view class="row-center-container">
    <u-icon
      class="icon-container light-blue"
      custom-prefix="phoenix-custom-icon"
      name="fish_coin"
      :size="iconSize"
      :top="0"
    />
    <text :class="text">{{ value }}</text>
  </view>
</template>

<script>
import uIcon from "../../uview-ui/components/u-icon/u-icon.vue";
export default {
  components: { uIcon },
  computed: {
    iconSize() {
      switch (this.size) {
        case "large":
          return 78;
        default:
          return 38;
      }
    },
    text() {
      switch (this.size) {
        case "large":
          return "large-text";
        default:
          return "default-text";
      }
    },
  },
  props: {
    priceColor: {
      default: "primary",
      type: String,
    },
    size: {
      default: "default",
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
.default-text {
  color: $u-phoenix-blue;
  font-size: 34rpx;
}
.large-text {
  color: $u-phoenix-blue;
  font-size: 72rpx;
}
</style>