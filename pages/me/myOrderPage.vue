<template>
  <view class="container">
    <view
      class="card medium-margin-top-spacer"
      v-for="(order, index) in orders"
      :key="index"
    >
      <view class="space-between-center-container">
        <!-- <buyer-card-mini :user="order.createBy" /> -->
        <user-card-mini :user="order.item.createBy" />
        <order-status-mini :orderStatus="order.orderStatus" />
      </view>
      <view class="medium-margin-top-spacer" @click="onClickOrder(order)">
        <sold-item class="medium-margin-top-spacer" :item="order.item" />
      </view>
      <view class="medium-margin-top-spacer">
        <order-price-summary :order="order" />
      </view>
      <view class="medium-margin-top-spacer">
        <order-actual-pay :order="order" />
      </view>
      <view class="medium-margin-top-spacer align-end-container">
        <order-action-button-mini type="buyer" :order="order" />
      </view>
    </view>
  </view>
</template>

<script>
import itemRevisitDisplay from "../../common/item/itemRevisitDisplay.vue";
import SoldItem from "../../common/item/soldItem.vue";
import OrderActionButtonMini from "../../common/order/action/orderActionButtonMini.vue";
import OrderActualPay from "../../common/order/orderActualPay.vue";
import OrderPriceSummary from "../../common/order/orderPriceSummary.vue";
import OrderStatusMini from "../../common/order/orderStatusMini.vue";
import UserCardMini from "../../common/user/userCardMini.vue";
import { BUYER_ORDER_DETAIL_PAGE } from "../../route/applicationRoute";
export default {
  components: {
    itemRevisitDisplay,
    OrderActionButtonMini,
    SoldItem,
    OrderPriceSummary,
    OrderStatusMini,
    UserCardMini,
    OrderActualPay,
  },
  computed: {
    orders() {
      return this.$store.state.buyerPendingOrder.content;
    },
  },
  methods: {
    onClickOrder(order) {
      uni.navigateTo({ url: BUYER_ORDER_DETAIL_PAGE(order).url });
    },
  },
  mounted() {
    this.$appStateService.getBuyerPendingOrder();
  },
  async onPullDownRefresh() {
    await this.$appStateService.getBuyerPendingOrder({ force: true });
    uni.stopPullDownRefresh();
  },
};
</script>

<style lang="scss" scoped>
</style>