<template>
  <view class="container">
    <pagination-item-display
      ref="paginationItemDisplayRef"
      :serviceRequest="getSellerOrders"
    >
      <template v-slot:content="{ data }">
        <view class="card medium-margin-top-spacer">
          <view class="space-between-center-container">
            <user-card-mini :user="data.createBy" />
            <order-status-mini :orderStatus="data.orderStatus" />
          </view>
          <view class="medium-margin-top-spacer">
            <sold-item class="medium-margin-top-spacer" :item="data.item" />
          </view>
          <!-- <view class="medium-margin-top-spacer">
            <order-price-summary :order="data" />
          </view> -->
          <view class="medium-margin-top-spacer">
            <order-actual-receive
              class="medium-margin-top-spacer"
              :order="data"
            />
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
              type="seller"
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
import OrderActualReceive from "../../common/order/orderActualReceive.vue";
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
import { SELLER_ORDER_DETAIL_PAGE } from "../../route/applicationRoute";
import { GET_SELLER_ORDERS_BY_ORDER_STATUS } from "../../service/service";

export default {
  components: {
    itemRevisitDisplay,
    OrderActionButtonMini,
    UserCardMini,
    OrderStatusMini,
    OrderPriceSummary,
    OrderActualReceive,
    PaginationItemDisplay,
    SoldItem,
  },
  computed: {
    orders() {
      return this.$store.state.sellerPendingOrder.content;
    },
  },
  methods: {
    getSellerOrders(pageRequest, pageSize) {
      return GET_SELLER_ORDERS_BY_ORDER_STATUS(
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
      uni.navigateTo({ url: SELLER_ORDER_DETAIL_PAGE(order).url });
    },
  },
  async onPullDownRefresh() {
    await this.$appStateService.getSellerPendingOrder({ force: true });
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