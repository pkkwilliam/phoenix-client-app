<template>
  <view class="row-center-container">
    <text class="h4 secondary">1澳門元=</text>
    <display-currency-fish-coin :value="10" />
  </view>
</template>

<script>
import DisplayCurrencyFishCoin from "../displayCurrency/displayCurrencyFishCoin.vue";
export default {
  components: { DisplayCurrencyFishCoin },
};
</script>