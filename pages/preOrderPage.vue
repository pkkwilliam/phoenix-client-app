<template>
  <view>
    <view class="container sticky-bottom-container-padding">
      <view class="card medium-margin-top-spacer">
        <order-confirm-item-card :item="item" />
      </view>
      <view class="card medium-margin-top-spacer">
        <application-subsection
          :list="deliveryMethods"
          @onChange="deliverySectionChange"
        />
        <view
          class="large-margin-top-spacer"
          v-if="selectedDeliveryTypeIndex === 0"
        >
          <view class="space-between-container">
            <text>收貨地址</text>
            <delivery-address-display :address="selectedAddress" />
          </view>
          <view class="space-between-center-container medium-margin-top-spacer">
            <text>運費</text>
            <pre-order-shipping-fee :item="item" />
          </view>
        </view>
        <view class="large-margin-top-spacer" v-else>
          <view>
            <text class="h4 price-primary">
              推薦使用本平台交易以保障自身權益
            </text>
          </view>
          <view class="space-between-center-container medium-margin-top-spacer">
            <text>聯絡電話</text>
            <text class="h4 black bold">{{ receiverNumber }}</text>
          </view>
        </view>
        <view class="medium-margin-top-spacer">
          <text>備註</text>
          <u-input
            class="medium-margin-top-spacer"
            type="text"
            v-model="remark"
            :placeholder="remarkPlaceHolder"
          />
        </view>
      </view>
      <view class="card medium-margin-top-spacer">
        <!-- <payment-selection @onSelectPaymentChannel="onSelectPaymentChannel" /> -->
        <pre-order-payment-aid />
      </view>
    </view>
    <view class="cu-bar foot">
      <stick-bottom-bar>
        <template slot="right">
          <view class="row-center-container medium-margin-right-spacer">
            <text class="label">實付款:</text>
            <display-curreny-price class="should-pay" :value="orderCost" />
          </view>
          <primary-gradient-button
            label="立即支付"
            :disabled="disabledSubmitButton"
            @click="onClickSubmit"
          />
        </template>
      </stick-bottom-bar>
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
import OrderConfirmItemCard from "../common/pre-order/preOrderConfirmItemCard.vue";
import ULine from "../uview-ui/components/u-line/u-line.vue";
import PaymentSelection from "../common/payment/paymentSelection.vue";
import { calculateOrderCost } from "../common/pre-order/submitOrderUtil";
import {
  getRouterJsonParam,
  MY_ORDER_PAGE,
  ORDER_CONFIRMED_PAGE,
  PAYMENT_SELECTION_PAGE,
} from "../route/applicationRoute";
import PreOrderShippingFee from "../common/pre-order/preOrderShippingFee.vue";
import StickBottomBar from "../common/navigation/stickBottomBar.vue";
import PrimaryGradientButton from "../common/button/primaryGradientButton.vue";

import "../css/applicationTextField.scss";
import { CREATE_ORDER } from "../service/service";
import PreOrderPaymentAid from "../common/pre-order/preOrderPaymentAid.vue";
import { ORDER_STATUS_SHIPMENT_PENDING } from "../enum/orderStatus";

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
    ULine,
    PaymentSelection,
    PreOrderShippingFee,
    StickBottomBar,
    PrimaryGradientButton,
    PreOrderPaymentAid,
  },
  computed: {
    deliveryMethods() {
      return DELIVERY_TYPES.map((item) => item.label);
    },
    disabledSubmitButton() {
      const { item, selectedAddress, selectedDeliveryTypeIndex } = this;
      if (selectedDeliveryTypeIndex === 0) {
        return !item || !selectedAddress;
      } else {
        return !item;
      }
    },
    orderCost() {
      return calculateOrderCost(
        this.item,
        DELIVERY_TYPES[this.selectedDeliveryTypeIndex]
      );
    },
    receiverNumber() {
      const { countryCode, smsNumber } = this.$store.state.userProfile.profile;
      return `(${countryCode}) ${smsNumber}`;
    },
    remarkPlaceHolder() {
      return this.selectedDeliveryTypeIndex === 0
        ? "請輸入備註...如: 送貨時間"
        : "請輸入當面交易備註...如: 意向交易地點、時間";
    },
  },
  data() {
    return {
      item: undefined,
      remark: undefined,
      selectedAddress: undefined,
      selectedDeliveryTypeIndex: 0,
    };
  },
  onLoad(options) {
    const item = getRouterJsonParam(options, "item");
    this.item = item;
  },
  methods: {
    deliverySectionChange(index) {
      this.selectedDeliveryTypeIndex = index;
    },
    async onClickSubmit() {
      const { item, remark, selectedAddress, selectedDeliveryTypeIndex } = this;
      const deliveryAddress = selectedAddress
        ? { id: selectedAddress.id }
        : undefined;
      const order = await this.execute(
        CREATE_ORDER({
          deliveryAddress,
          item: { id: item.id },
          itemDeliveryType: DELIVERY_TYPES[selectedDeliveryTypeIndex].key,
          remark,
        })
      );
      this.onCreateOrderSuccess(order);
    },
    onCreateOrderSuccess(order) {
      if (order.orderState === ORDER_STATUS_SHIPMENT_PENDING.key) {
        uni.navigateTo({ url: ORDER_CONFIRMED_PAGE(order).url });
      } else {
        uni.redirectTo({ url: MY_ORDER_PAGE().url });
        uni.navigateTo({ url: PAYMENT_SELECTION_PAGE(order).url });
      }
    },
  },
  async mounted() {
    this.$appStateService.getUserProfile();
    await this.$appStateService.getAddress();
    const { address } = this.$store.state;
    this.selectedAddress = address.content[0];
  },
};
</script>

<style lang="scss" scoped>
</style>
