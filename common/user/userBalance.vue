<template>
  <view class="space-around-container">
    <view>
      <display-currency-fish-coin size="large" :value="fishCoinBalance" />
    </view>
    <view>
      <text>{{ balance }}</text>
    </view>
  </view>
</template>

<script>
import displayCurrencyFishCoin from "../displayCurrency/displayCurrencyFishCoin.vue";

export default {
  components: { displayCurrencyFishCoin },
  computed: {
    balance() {
      return this.$store.state.userProfile.profile.balance;
    },
    fishCoinBalance() {
      return this.$store.state.userProfile.profile.fishCoinBalance;
    },
  },
  props: {
    showBalance: {
      default: true,
      type: Boolean,
    },
    showFishCoinBalance: {
      default: true,
      type: Boolean,
    },
  },
};
</script>