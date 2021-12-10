<template>
  <view>
    <view class="space-between-center-container">
      <buyer-card-mini :user="order.createBy" />
      <sold-order-status-mini :orderStatus="order.orderStatus" />
    </view>
    <view class="medium-margin-top-spacer">
      <item-sold class="medium-margin-top-spacer" :item="order.item" />
    </view>
    <view class="medium-margin-top-spacer">
      <sold-order-price-summary :order="order" />
    </view>
    <view class="medium-margin-top-spacer">
      <sold-order-actual-receive
        class="medium-margin-top-spacer"
        :order="order"
      />
    </view>
  </view>
</template>

<script>
import SoldOrderActualReceive from "../soldOrder/soldOrderActualReceive.vue";
import SoldOrderPriceSummary from "../soldOrder/soldOrderPriceSummary.vue";
import SoldOrderStatusMini from "../soldOrder/soldOrderStatusMini.vue";
import BuyerCardMini from "../user/buyerCardMini.vue";
import itemSold from "./soldItem.vue";
export default {
  components: {
    BuyerCardMini,
    itemSold,
    SoldOrderPriceSummary,
    SoldOrderActualReceive,
    SoldOrderStatusMini,
  },
  computed: {},
  props: {
    order: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>