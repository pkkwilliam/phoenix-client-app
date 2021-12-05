<template>
  <view class="payment-container">
    <image class="image" :src="payment.src" />
    <view class="text-container">
      <text class="label">
        {{ payment.label }}
      </text>
      <text class="description">
        {{ payment.description }}
      </text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    payment: Object,
  },
};
</script>

<style lang="scss" scoped>
.payment-container {
  display: flex;
  flex-direction: row;
}
.text-container {
  display: flex;
  flex-direction: column;
  margin-left: 20rpx;
  .label {
    color: $u-phoenix-font-dark;
    font-size: 38rpx;
    font-weight: 600;
  }
  .description {
    color: $u-phoenix-light-grey;
    font-size: 28rpx;
  }
}
.image {
  width: 50rpx;
  height: 50rpx;
}
</style>