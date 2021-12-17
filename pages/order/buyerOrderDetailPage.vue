<template>
  <view class="container">
    <application-navigation-bar title="我買到的" />
    <view class="step-container">
      <sold-order-status-step :orderStatus="order.orderStatus" />
    </view>
    <view class="content-container">
      <view class="card order-status-action-container">
        <sold-order-status :orderStatus="order.orderStatus" />
      </view>
      <view class="card medium-margin-top-spacer">
        <view>
          <sold-item :item="order.item" />
        </view>
        <view class="medium-margin-top-spacer">
          <sold-order-price-summary :order="order" />
        </view>
        <view class="medium-margin-top-spacer">
          <sold-order-actual-receive :order="order" />
        </view>
      </view>
      <view class="card medium-margin-top-spacer">
        <sold-order-receiver :order="order" />
      </view>
      <view class="card medium-margin-top-spacer">
        <sold-order-detail-info :order="order" />
      </view>
    </view>
    <view class="cu-bar foot bottom-container">
      <sold-order-action-button
        type="buyer"
        :order="order"
        @onOrderUpdate="onOrderUpdate"
      />
    </view>
  </view>
</template>

<script>
import sellerShipmentDeliveryHelper from "../../common/order/sellerShipmentDeliveryHelper.vue";
import SoldItem from "../../common/item/soldItem.vue";
import applicationNavigationBar from "../../common/navigation/applicationNavigationBar.vue";
import SoldOrderActionButton from "../../common/order/action/orderActionButton.vue";
import SoldOrderActualReceive from "../../common/order/orderActualReceive.vue";
import SoldOrderDetailInfo from "../../common/order/orderDetailInfo.vue";
import SoldOrderPriceSummary from "../../common/order/orderPriceSummary.vue";
import SoldOrderReceiver from "../../common/order/orderReceiver.vue";
import SoldOrderStatus from "../../common/order/orderStatus.vue";
import SoldOrderStatusStep from "../../common/order/orderStatusStep.vue";
import { getRouterJsonParam } from "../../route/applicationRoute";
import { GET_ORDER_BY_ID } from "../../service/service";

export default {
  components: {
    applicationNavigationBar,
    sellerShipmentDeliveryHelper,
    SoldOrderStatusStep,
    SoldOrderStatus,
    SoldItem,
    SoldOrderPriceSummary,
    SoldOrderActualReceive,
    SoldOrderReceiver,
    SoldOrderDetailInfo,
    SoldOrderActionButton,
  },
  computed: {
    itemDeliveryType() {
      return order.itemDeliveryType;
    },
  },
  data() {
    return { order: undefined };
  },
  methods: {
    getOrder() {
      this.execute(GET_ORDER_BY_ID(this.order.id)).then(
        (response) => (this.order = response)
      );
    },
    onOrderUpdate() {
      this.getOrder();
      this.$appStateService.getBuyerPendingOrder({ force: true });
      this.$appStateService.getSellerPendingOrder({ force: true });
    },
  },
  onLoad(option) {
    const order = getRouterJsonParam(option, "order");
    this.order = order;
    // for more accurate detail
    this.getOrder();
  },
};
</script>

<style lang="scss" scoped>
.bottom-container {
  padding: 20rpx;
}
.container {
  padding-bottom: 125rpx;
}
.content-container {
  padding-left: 20rpx;
  padding-right: 20rpx;
}
.step-container {
  background-color: $u-phoenix-primary;
  padding: 30rpx;
  padding-bottom: 60rpx;
}
.order-status-action-container {
  padding: 40rpx;
  margin-top: -40rpx;
}
</style>