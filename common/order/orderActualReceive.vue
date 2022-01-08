<template>
  <view class="space-between-container h4 black">
    <text>實收</text>
    <display-fish-coin-price :value="actualReceive" />
  </view>
</template>

<script>
import DisplayFishCoinPrice from "../displayCurrency/displayCurrencyFishCoin.vue";

export default {
  components: { DisplayFishCoinPrice },
  computed: {
    actualReceive() {
      return this.order.balanceUsedAmount;
    },
  },
  props: {
    order: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>