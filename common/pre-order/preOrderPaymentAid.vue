<template>
  <view>
    <view class="space-between-center-container">
      <text>摸魚紅包</text>
      <text class="secondary">暫無可用</text>
    </view>
    <view class="space-between-center-container">
      <view>
        <text>餘額可扺扣</text>
        <text class="price-primary">{{ `(剩餘 $${userBalance} 元)` }}</text>
      </view>
      <u-switch v-model="useBalance" :size="40"></u-switch>
    </view>
  </view>
</template>

<script>
export default {
  computed: {
    userBalance() {
      return this.$store.state.userProfile.profile.balance;
    },
  },
  data() {
    return { useBalance: false };
  },
  methods: {
    onToggleUseBalance(useBalance) {
      this.$emit("onToggleUseBalance", useBalance);
    },
  },
};
</script>