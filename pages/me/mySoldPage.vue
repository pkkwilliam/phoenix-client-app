<template>
  <view class="container">
    <view
      class="card medium-margin-top-spacer"
      v-for="(order, index) in orders"
      :key="index"
    >
      <view class="space-between-center-container">
        <user-card-mini :user="order.createBy" />
        <order-status-mini :orderStatus="order.orderStatus" />
      </view>
      <view class="medium-margin-top-spacer" @click="onClickOrder(order)">
        <sold-item class="medium-margin-top-spacer" :item="order.item" />
      </view>
      <view class="medium-margin-top-spacer">
        <order-price-summary :order="order" />
      </view>
      <view class="medium-margin-top-spacer">
        <order-actual-receive class="medium-margin-top-spacer" :order="order" />
      </view>
      <view class="medium-margin-top-spacer align-end-container">
        <order-action-button-mini type="seller" :order="order" />
      </view>
    </view>
  </view>
</template>

<script>
import itemRevisitDisplay from "../../common/item/itemRevisitDisplay.vue";
import SoldItem from "../../common/item/soldItem.vue";
import OrderActionButtonMini from "../../common/order/action/orderActionButtonMini.vue";
import OrderActualReceive from "../../common/order/orderActualReceive.vue";
import OrderPriceSummary from "../../common/order/orderPriceSummary.vue";
import OrderStatusMini from "../../common/order/orderStatusMini.vue";
import UserCardMini from "../../common/user/userCardMini.vue";
import { SELLER_ORDER_DETAIL_PAGE } from "../../route/applicationRoute";
export default {
  components: {
    itemRevisitDisplay,
    OrderActionButtonMini,
    UserCardMini,
    OrderStatusMini,
    OrderPriceSummary,
    OrderActualReceive,
    SoldItem,
  },
  computed: {
    orders() {
      return this.$store.state.sellerPendingOrder.content;
    },
  },
  methods: {
    onClickOrder(order) {
      uni.navigateTo({ url: SELLER_ORDER_DETAIL_PAGE(order).url });
    },
  },
  mounted() {
    this.$appStateService.getSellerPendingOrder();
  },
};
</script>

<style lang="scss" scoped>
</style>