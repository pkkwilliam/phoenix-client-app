<template>
  <view class="price-info-container">
    <display-curreny-price class="content" :value="item.price" />
    <strike-through-currency-price
      class="content"
      :value="item.originalPrice"
    />
    <discount-tag class="content" :value="discountRate" />
  </view>
</template>

<script>
import DiscountTag from "../discountTag.vue";
import displayCurrenyPrice from "../displayCurrenyPrice.vue";
import StrikeThroughCurrencyPrice from "../strikeThroughCurrencyPrice.vue";
export default {
  components: { displayCurrenyPrice, StrikeThroughCurrencyPrice, DiscountTag },
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
.content {
  margin-right: 15rpx;
}
.price-info-container {
  align-items: center;
  display: flex;
  flex-direction: row;
}
</style>