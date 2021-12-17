<template>
  <view class="row-container">
    <image class="image" :src="payment.src" />
    <view class="column-container medium-margin-left-spacer">
      <text class="h2 black bold">
        {{ payment.label }}
      </text>
      <text class="h3 secondary">
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
.image {
  width: 50rpx;
  height: 50rpx;
}
</style>