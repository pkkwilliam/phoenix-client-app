<template>
  <view class="row-center-container">
    <u-icon
      class="icon-container black"
      custom-prefix="phoenix-custom-icon"
      name="dollar"
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
          return 28;
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
  color: $u-phoenix-font-dark;
  font-size: 34rpx;
}
.large-text {
  color: $u-phoenix-font-dark;
  font-size: 72rpx;
}
</style>