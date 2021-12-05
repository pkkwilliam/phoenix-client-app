<template>
  <view>
    <view class="delivery-sub-container">
      <text>收貨地址</text>
      <delivery-address-display :address="selectedAddress" />
    </view>
    <view class="delivery-sub-container">
      <text>運費</text>
      <text v-if="isShippingFeeIncluded">包郵</text>
      <display-curreny-price v-else :value="fixedShippingFee" />
    </view>
  </view>
</template>

<script>
import { ITEM_SHIPPING_CHARGE_TYPE_INCLUDE } from "../../enum/itemShippingChargeTypes";
import deliveryAddressDisplay from "../address/deliveryAddressDisplay.vue";
import DisplayCurrenyPrice from "../displayCurrenyPrice.vue";
import {
  getOrderConfirmAddress,
  setOrderConfirmAddress,
} from "./orderConfirmAppStateHelper";
export default {
  components: { deliveryAddressDisplay, DisplayCurrenyPrice },
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
    selectedAddress() {
      return getOrderConfirmAddress(this.$store);
    },
  },
  methods: {
    onSelectAddress(address) {
      setOrderConfirmAddress(this.$store, address);
    },
  },
  mounted() {
    const defaultAddress = this.$store.state.address.content.find(
      (address) => address.defaultShipping
    );
    setOrderConfirmAddress(this.$store, defaultAddress);
  },
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.delivery-sub-container {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 35rpx;
}
</style>