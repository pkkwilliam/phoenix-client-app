<template>
  <view class="container">
    <pagination-item-display
      ref="paginationItemDisplayRef"
      :serviceRequest="getBuyerOrders"
    >
      <template v-slot:content="{ data }">
        <view class="card medium-margin-top-spacer">
          <view class="space-between-center-container">
            <!-- <buyer-card-mini :user="order.createBy" /> -->
            <user-card-mini :user="data.item.createBy" />
            <order-status-mini :orderStatus="data.orderStatus" />
          </view>
          <view class="medium-margin-top-spacer" @click="onClickOrder(data)">
            <sold-item class="medium-margin-top-spacer" :item="data.item" />
          </view>
          <view class="medium-margin-top-spacer">
            <order-actual-pay :order="data" />
          </view>
          <view class="medium-margin-top-spacer flex-end-center-container">
            <u-button
              class="button"
              shape="circle"
              size="mini"
              type="warning"
              :plain="true"
              @click="onClickOrder(data)"
            >
              訂單詳細
            </u-button>
            <order-action-button-mini
              class="button"
              type="buyer"
              :order="data"
            />
          </view>
        </view>
      </template>
    </pagination-item-display>
  </view>
</template>

<script>
import itemRevisitDisplay from "../../common/item/itemRevisitDisplay.vue";
import SoldItem from "../../common/item/soldItem.vue";
import PaginationItemDisplay from "../../common/itemDisplayList/paginationItemDisplay.vue";
import OrderActionButtonMini from "../../common/order/action/orderActionButtonMini.vue";
import OrderActualPay from "../../common/order/orderActualPay.vue";
import OrderPriceSummary from "../../common/order/orderPriceSummary.vue";
import OrderStatusMini from "../../common/order/orderStatusMini.vue";
import UserCardMini from "../../common/user/userCardMini.vue";
import {
  ORDER_STATUS_DELIVERY_PENDING,
  ORDER_STATUS_PAYMENT_PENDING,
  ORDER_STATUS_SHIPMENT_PENDING,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_COMMENTED,
  ORDER_STATUS_FINISHED,
} from "../../enum/orderStatus";
import { BUYER_ORDER_DETAIL_PAGE } from "../../route/applicationRoute";
import { GET_BUYER_ORDERS_BY_ORDER_STATUS_PAGINATION } from "../../service/service";
export default {
  components: {
    itemRevisitDisplay,
    OrderActionButtonMini,
    SoldItem,
    OrderPriceSummary,
    OrderStatusMini,
    UserCardMini,
    OrderActualPay,
    PaginationItemDisplay,
  },
  computed: {
    orders() {
      return this.$store.state.buyerPendingOrder.content;
    },
  },
  methods: {
    getBuyerOrders(pageRequest, pageSize) {
      return GET_BUYER_ORDERS_BY_ORDER_STATUS_PAGINATION(
        [
          ORDER_STATUS_PAYMENT_PENDING.key,
          ORDER_STATUS_DELIVERY_PENDING.key,
          ORDER_STATUS_SHIPMENT_PENDING.key,
          ORDER_STATUS_DELIVERED.key,
          ORDER_STATUS_COMMENTED.key,
          ORDER_STATUS_FINISHED.key,
        ],
        pageRequest,
        pageSize
      );
    },
    onClickOrder(order) {
      uni.navigateTo({ url: BUYER_ORDER_DETAIL_PAGE(order).url });
    },
  },
  async onPullDownRefresh() {
    await this.$appStateService.getBuyerPendingOrder({ force: true });
    uni.stopPullDownRefresh();
  },
  onReachBottom() {
    this.$refs.paginationItemDisplayRef.getServiceResponse();
  },
};
</script>

<style lang="scss" scoped>
.button {
  margin: 0px;
  margin-left: 20rpx;
}
</style>