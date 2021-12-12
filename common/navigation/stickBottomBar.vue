<template>
  <view class="navigation">
    <view class="left">
      <slot name="left" />
    </view>
    <view class="right">
      <slot name="right" />
      <!-- <view class="buy btn u-line-1" @click="onClickPurchase">我想要</view> -->
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  margin-top: 100rpx;
  border: solid 2rpx #f2f2f2;
  background-color: #ffffff;
  padding: 16rpx;
  width: 100%;
  .left {
    display: flex;
    font-size: 20rpx;
    .item {
      margin-right: 50rpx;
      &.car {
        text-align: center;
        position: relative;
        .car-num {
          position: absolute;
          top: -10rpx;
          right: -10rpx;
        }
      }
    }
  }
  .right {
    display: flex;
    font-size: 28rpx;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    .btn {
      line-height: 66rpx;
      padding: 0 30rpx;
      border-radius: 36rpx;
      color: #ffffff;
    }
    .cart {
      background-color: #ed3f14;
      margin-right: 30rpx;
    }
    .buy {
      background: $u-phoneix-primary-gradient;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
