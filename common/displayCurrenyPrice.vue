<template>
  <view class="item-detail-container">
    <text class="currency">$</text>
    <text class="value">{{ value }}</text>
  </view>
</template>

<script>
export default {
  computed: {},
  props: {
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
  color: $u-phoenix-price-primary;
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