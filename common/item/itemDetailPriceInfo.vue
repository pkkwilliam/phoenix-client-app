<template>
  <view class="row-center-container">
    <display-currency-fish-coin
      class="medium-margin-right-spacer"
      :value="item.price"
    />
    <barter-tag />
    <area-tag class="medium-margin-left-spacer" :value="item.itemLocation" />
    <face-to-face-trade-tag class="medium-margin-left-spacer" />
  </view>
</template>

<script>
import AreaTag from "../../components/tag/areaTag.vue";
import BarterTag from "../../components/tag/barterTag.vue";
import FaceToFaceTradeTag from "../../components/tag/faceToFaceTradeTag.vue";
import DiscountTag from "../discountTag.vue";
import DisplayCurrencyFishCoin from "../displayCurrency/displayCurrencyFishCoin.vue";
import displayCurrenyPrice from "../displayCurrenyPrice.vue";
import StrikeThroughCurrencyPrice from "../strikeThroughCurrencyPrice.vue";
export default {
  components: {
    DisplayCurrencyFishCoin,
    displayCurrenyPrice,
    StrikeThroughCurrencyPrice,
    DiscountTag,
    BarterTag,
    FaceToFaceTradeTag,
    AreaTag,
  },
  computed: {
    discountRate() {
      const { price, originalPrice } = this.item;
      return ((price / originalPrice) * 10).toFixed(1);
    },
  },
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>