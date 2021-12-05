<template>
  <view>
    <text class="face-to-face-trade-recommendation-text">
      推薦使用本平台交易以保障自身權益
    </text>
    <view class="phone-number-container">
      <text>聯絡電話</text>
      <text class="phone-number">{{
        `(${userProfile.countryCode}) ${userProfile.smsNumber}`
      }}</text>
    </view>
  </view>
</template>

<script>
export default {
  computed: {
    userProfile() {
      return this.$store.state.userProfile.profile;
    },
  },
};
</script>

<style lang="scss" scoped>
.face-to-face-trade-recommendation-text {
  color: $u-phoenix-price-primary;
}
.phone-number-container {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35rpx;
  .phone-number {
    font-size: 28rpx;
    font-weight: 600;
  }
}
</style>