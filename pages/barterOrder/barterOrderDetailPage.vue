<template>
  <view class="sticky-bottom-container-padding">
    <application-navigation-bar title="我買到的" />
    <view class="step-container">
      <barter-order-status-step :barterOrder="barterOrder" />
    </view>
    <view class="container">
      <view class="card order-status-action-container">
        <barter-order-contact-info :barterOrder="barterOrder" />
        <!-- <sold-order-status :orderStatus="order.orderStatus" /> -->
      </view>
      <view class="card medium-margin-top-spacer">
        <barter-order-trade-instruction :barterOrder="barterOrder" />
      </view>
      <view class="card medium-margin-top-spacer">
        <text class="h3 black bold">想要物品</text>
        <sold-item
          class="medium-margin-top-spacer"
          :clickable="false"
          :item="barterOrder.barterRequest.requestItem"
          :showPrice="false"
        />
      </view>
      <view class="card medium-margin-top-spacer">
        <text class="h3 black bold">交換物品</text>
        <view
          class="medium-margin-top-spacer"
          v-for="(item, index) in barterOrder.barterRequest.offerItems"
          :key="index"
        >
          <sold-item :clickable="false" :item="item" :showPrice="false" />
        </view>
      </view>
      <view class="card medium-margin-top-spacer">
        <barter-order-info :barterOrder="barterOrder" />
      </view>
    </view>
    <view class="cu-bar foot bottom-container">
      <barter-order-item-received-button
        :barterOrder="barterOrder"
        @onBarterOrderUpdated="onBarterOrderUpdated"
      />
    </view>
  </view>
</template>

<script>
import sellerShipmentDeliveryHelper from "../../common/order/sellerShipmentDeliveryHelper.vue";
import SoldItem from "../../common/item/soldItem.vue";
import applicationNavigationBar from "../../common/navigation/applicationNavigationBar.vue";
import SoldOrderActionButton from "../../common/order/action/orderActionButton.vue";
import SoldOrderDetailInfo from "../../common/order/orderDetailInfo.vue";
import SoldOrderPriceSummary from "../../common/order/orderPriceSummary.vue";
import SoldOrderReceiver from "../../common/order/orderReceiver.vue";
import SoldOrderStatus from "../../common/order/orderStatus.vue";
import SoldOrderStatusStep from "../../common/order/orderStatusStep.vue";
import { getRouterJsonParam } from "../../route/applicationRoute";
import { GET_BARTER_ORDER_BY_ID } from "../../service/service";
import OrderActualPay from "../../common/order/orderActualPay.vue";
import OrderSeller from "../../common/order/orderSeller.vue";
import BarterOrderInfo from "../../common/barterOrder/barterOrderInfo.vue";
import BarterOrderStatusStep from "../../common/barterOrder/barterOrderStatusStep.vue";
import BarterOrderContactInfo from "../../common/barterOrder/barterOrderContactInfo.vue";
import BarterOrderTradeInstruction from "../../common/barterOrder/barterOrderTradeInstruction.vue";
import PrimaryButton from "../../common/button/primaryButton.vue";
import BarterOrderItemReceivedButton from "../../common/barterOrder/barterOrderItemReceivedButton.vue";

export default {
  components: {
    applicationNavigationBar,
    sellerShipmentDeliveryHelper,
    SoldOrderStatusStep,
    SoldOrderStatus,
    SoldItem,
    SoldOrderPriceSummary,
    SoldOrderReceiver,
    SoldOrderDetailInfo,
    SoldOrderActionButton,
    OrderActualPay,
    OrderSeller,
    BarterOrderStatusStep,
    BarterOrderContactInfo,
    BarterOrderTradeInstruction,
    PrimaryButton,
    BarterOrderItemReceivedButton,
    BarterOrderInfo,
  },
  computed: {},
  data() {
    return { barterOrder: undefined };
  },
  methods: {
    async getBarterOrder(barterOrderId) {
      const barterOrder = await this.execute(
        GET_BARTER_ORDER_BY_ID(barterOrderId)
      );
      this.barterOrder = barterOrder;
    },
    onBarterOrderUpdated(barterOrderId) {
      this.getBarterOrder(barterOrderId);
    },
  },
  onLoad(option) {
    const barterOrder = getRouterJsonParam(option, "barterOrder");
    this.barterOrder = barterOrder;
    this.getBarterOrder(barterOrder.id);
    // for more accurate detail since we not able to pass accurate date from url param
  },
};
</script>

<style lang="scss" scoped>
.bottom-container {
  padding: 20rpx;
}
.step-container {
  background-color: $u-phoenix-primary;
  padding: 30rpx;
  padding-bottom: 60rpx;
}
.order-status-action-container {
  margin-top: -40rpx;
}
</style>