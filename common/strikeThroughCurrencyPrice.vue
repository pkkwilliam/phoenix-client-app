<template>
  <view class="item-detail-container">
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
.item-detail-container {
  align-items: flex-end;
  color: $u-phoenix-light-grey;
  display: flex;
  flex-direction: row;
  text-decoration-line: line-through;
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