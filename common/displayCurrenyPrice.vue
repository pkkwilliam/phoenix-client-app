<template>
  <view class="container">
    <text class="currency">MOP</text>
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
.container {
  align-items: flex-end;
  color: #eb523f;
  display: flex;
  flex-direction: row;
  font-weight: 500;
}
.currency {
  font-size: 26rpx;
}
.value {
  font-size: 32rpx;
  margin-left: 8rpx;
}
</style>