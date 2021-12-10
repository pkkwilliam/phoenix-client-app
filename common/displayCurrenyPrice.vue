<template>
  <view class="item-detail-container" :style="{ color: color }">
    <text class="currency">$</text>
    <text class="value">{{ value }}</text>
  </view>
</template>

<script>
import styles from "../uview-ui/theme.scss";
export default {
  computed: {
    color() {
      switch (this.priceColor) {
        case "primary":
          return styles.pricePrimary;
        case "secondary":
          return styles.priceSecondary;
      }
    },
  },
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
.item-detail-container {
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  font-weight: 500;
}
.currency {
  font-size: 26rpx;
  font-weight: 300;
}
.value {
  font-size: 32rpx;
  margin-left: 8rpx;
}
</style>