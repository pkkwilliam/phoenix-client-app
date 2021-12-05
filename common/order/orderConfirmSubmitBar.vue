<template>
  <view class="navigation">
    <view class="left"> </view>
    <view class="right">
      <text class="label">實付款:</text>
      <display-curreny-price class="should-pay" :value="shouldPay" />
      <view class="buy btn u-line-1" @click="onClickPurchase">確認購買</view>
    </view>
  </view>
</template>

<script>
import { ITEM_DELIVERY_TYPE_FACE_TO_FACE } from "../../enum/itemDeliveryType";
import { ITEM_SHIPPING_CHARGE_TYPE_INCLUDE } from "../../enum/itemShippingChargeTypes";
import displayCurrenyPrice from "../displayCurrenyPrice.vue";
import { getOrderConform } from "./orderConfirmAppStateHelper";
export default {
  components: { displayCurrenyPrice },
  computed: {
    shouldPay() {
      const { item, itemDeliveryType } = getOrderConform(this.$store);
      const { fixedShippingCharge, itemShippingChargeType } =
        item.itemShippingInfo;
      let shippingFee = 0;
      if (
        itemDeliveryType !== ITEM_DELIVERY_TYPE_FACE_TO_FACE &&
        itemShippingChargeType !== ITEM_SHIPPING_CHARGE_TYPE_INCLUDE.key
      ) {
        shippingFee = fixedShippingCharge;
      }
      return item.price + shippingFee;
    },
  },
  methods: {
    onClickPurchase() {
      this.onClickSubmit();
    },
  },
  props: {
    item: Object,
    onClickSubmit: Function,
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  margin-top: 100rpx;
  border: solid 2rpx #f2f2f2;
  background-color: #ffffff;
  padding: 16rpx;
  width: 100%;
  .right {
    display: flex;
    font-size: 28rpx;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    .btn {
      line-height: 66rpx;
      padding: 0 30rpx;
      border-radius: 36rpx;
      color: #ffffff;
    }
    .cart {
      background-color: #ed3f14;
      margin-right: 30rpx;
    }
    .buy {
      background: $u-phoneix-primary-gradient;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  .label {
    margin-right: 8rpx;
  }
  .should-pay {
    margin-right: 35rpx;
  }
}
</style>
