<template>
  <view class="space-between-center-container h4 black">
    <text class="h4 black bold">實付</text>
    <display-fish-coin-price :value="actualPay" />
  </view>
</template>

<script>
import DisplayFishCoinPrice from "../displayCurrency/displayCurrencyFishCoin.vue";

export default {
  components: { DisplayFishCoinPrice },
  computed: {
    actualPay() {
      return this.order.item.price;
    },
  },
  props: {
    order: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>