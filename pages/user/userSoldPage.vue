<template>
  <view class="container">
    <view
      class="card medium-margin-top-spacer"
      v-for="(order, index) in orders"
      :key="index"
      @click="onClickOrder(order)"
    >
      <user-sold-order :order="order" />
      <view class="medium-margin-top-spacer align-end-container">
        <sold-order-action-button-mini type="seller" :order="order" />
      </view>
    </view>
  </view>
</template>

<script>
import itemRevisitDisplay from "../../common/item/itemRevisitDisplay.vue";
import UserSoldOrder from "../../common/item/userSoldOrder.vue";
import SoldOrderActionButtonMini from "../../common/soldOrder/action/soldOrderActionButtonMini.vue";
import { SELLER_SOLD_ORDER_DETAIL_PAGE } from "../../route/applicationRoute";
export default {
  components: { itemRevisitDisplay, UserSoldOrder, SoldOrderActionButtonMini },
  computed: {
    orders() {
      return this.$store.state.sellerPendingOrder.content;
    },
  },
  methods: {
    onClickOrder(order) {
      uni.navigateTo({ url: SELLER_SOLD_ORDER_DETAIL_PAGE(order).url });
    },
  },
  mounted() {
    this.$appStateService.getSellerPendingOrder();
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 20rpx;
  padding-right: 20rpx;
}
</style>