<template>
  <view class="container">
    <view class="main-content">
      <view class="section-card">
        <order-confirm-item-card :item="currentItem" />
      </view>
      <view class="section-card">
        <application-subsection
          :list="deliveryMethods"
          @onChange="deliverySectionChange"
        />
        <view class="delivery-type-container">
          <order-confirm-shipping-subsection
            v-if="selectedDeliveryMethodIndex === 0"
            :item="currentItem"
          />
          <order-confirm-face-to-face-subsection v-else />
        </view>

        <view class="textfield-container">
          <text>備註</text>
          <u-input
            class="textfield"
            type="text"
            v-model="remark"
            :placeholder="remarkPlaceHolder"
          />
        </view>
      </view>
      <view class="section-card">
        <text>請選擇支付方式</text>
        <view class="payment-selection-line">
          <u-line />
        </view>
        <payment-selection />
      </view>
    </view>
    <view class="cu-bar foot">
      <order-confirm-submit-bar :onClickSubmit="onClickSubmit" />
    </view>
  </view>
</template>

<script>
import DeliveryAddressDisplay from "../common/address/deliveryAddressDisplay.vue";
import ApplicationSubsection from "../common/applicationSubsection.vue";
import DisplayCurrenyPrice from "../common/displayCurrenyPrice.vue";
import {
  ITEM_DELIVERY_TYPE_FACE_TO_FACE,
  ITEM_DELIVERY_TYPE_THIRD_PARTY_DELIVERY,
} from "../enum/itemDeliveryType";
import uLazyLoad from "../uview-ui/components/u-lazy-load/u-lazy-load.vue";
import "../css/applicationTextField.scss";
import OrderConfirmItemCard from "../common/pre-order/preOrderConfirmItemCard.vue";
import OrderConfirmShippingSubsection from "../common/pre-order/preOrderConfirmShippingSubsection.vue";
import OrderConfirmFaceToFaceSubsection from "../common/pre-order/preOrderConfirmFaceToFaceSubsection.vue";
import ULine from "../uview-ui/components/u-line/u-line.vue";
import {
  getOrderConform,
  setOrderConfirmItemDeliveryType,
} from "../common/pre-order/preOrderConfirmAppStateHelper";
import OrderConfirmSubmitBar from "../common/pre-order/preOrderConfirmSubmitBar.vue";
import PaymentSelection from "../common/payment/paymentSelection.vue";
import { sumbitMpayOrder } from "../common/pre-order/submitOrderUtil";
import { LANDING_TAB } from "../route/applicationRoute";

const DELIVERY_TYPES = [
  ITEM_DELIVERY_TYPE_THIRD_PARTY_DELIVERY,
  ITEM_DELIVERY_TYPE_FACE_TO_FACE,
];

export default {
  components: {
    uLazyLoad,
    DisplayCurrenyPrice,
    ApplicationSubsection,
    DeliveryAddressDisplay,
    OrderConfirmItemCard,
    OrderConfirmShippingSubsection,
    OrderConfirmFaceToFaceSubsection,
    ULine,
    OrderConfirmSubmitBar,
    PaymentSelection,
  },
  computed: {
    currentItem() {
      return this.getCurrentItem();
    },
    deliveryMethods() {
      return DELIVERY_TYPES.map((item) => item.label);
    },
    remarkPlaceHolder() {
      return this.selectedDeliveryMethodIndex === 0
        ? "請輸入備註...如: 送貨時間"
        : "請輸入當面交易備註...如: 意向交易地點、時間";
    },
  },
  data() {
    return {
      contactNumber: undefined,
      item: undefined,
      paymentChannel: undefined,
      remark: undefined,
      selectedDeliveryMethodIndex: 0,
    };
  },
  methods: {
    getCurrentItem() {
      return this.$store.state.orderConfirm.item;
    },
    deliverySectionChange(index) {
      this.selectedDeliveryMethodIndex = index;
      setOrderConfirmItemDeliveryType(this.$store, DELIVERY_TYPES[index]);
    },
    onClickSubmit() {
      const { item, itemDeliveryType, paymentChannel } = getOrderConform(
        this.$store
      );
      sumbitMpayOrder(
        this.execute,
        null,
        item,
        itemDeliveryType,
        paymentChannel,
        this.remark
      );
    },
  },
  mounted() {
    if (!this.isLogin()) {
      uni.navigateTo({ url: LANDING_TAB().url });
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
}
.main-content {
  padding-left: 20rpx;
  padding-right: 20rpx;
}
.delivery-type-container {
  margin-top: 35rpx;
}
.textfield-container {
  margin-top: 35rpx;
  .textfield {
    margin-top: 20rpx;
  }
}
.section-card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20rpx;
  margin-top: 20rpx;
}
.payment-selection-line {
  margin-top: 15rpx;
}
</style>
