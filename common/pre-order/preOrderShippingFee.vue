<template>
  <view>
    <text v-if="isShippingFeeIncluded">包郵</text>
    <display-curreny-price v-else :value="fixedShippingFee" />
  </view>
</template>

<script>
import { ITEM_SHIPPING_CHARGE_TYPE_INCLUDE } from "../../enum/itemShippingChargeTypes";
import displayCurrenyPrice from "../displayCurrenyPrice.vue";
export default {
  components: { displayCurrenyPrice },
  computed: {
    isShippingFeeIncluded() {
      return (
        this.item.itemShippingInfo.itemShippingChargeType ===
        ITEM_SHIPPING_CHARGE_TYPE_INCLUDE.key
      );
    },
    fixedShippingFee() {
      return this.item.itemShippingInfo.fixedShippingCharge;
    },
  },
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>