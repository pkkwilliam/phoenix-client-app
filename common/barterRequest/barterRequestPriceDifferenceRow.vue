<template>
  <view class="space-around-center-container">
    <view class="column-center-container">
      <text class="h4 black bold">想要物品價值</text>
      <display-currency-fish-coin :value="barterRequest.requestItem.price" />
    </view>
    <view class="column-center-container">
      <text class="h4 black bold">交物物品價值</text>
      <display-currency-fish-coin :value="displayOfferItemTotalPrice" />
    </view>
    <view class="column-center-container">
      <text class="h4 black bold">價差</text>
      <display-currency-fish-coin :value="priceDifferent" />
    </view>
  </view>
</template>

<script>
import displayCurrencyFishCoin from "../displayCurrency/displayCurrencyFishCoin.vue";
import { getBarterRequestPriceDifference } from "./barterRequestUtil";
export default {
  components: { displayCurrencyFishCoin },
  computed: {
    displayOfferItemTotalPrice() {
      return this.offerItemTotalPrice();
    },
    priceDifferent() {
      return getBarterRequestPriceDifference(this.barterRequest);
    },
  },
  methods: {
    offerItemTotalPrice() {
      return this.barterRequest.offerItems.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price,
        0
      );
    },
  },
  props: {
    barterRequest: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>