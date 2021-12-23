<template>
  <view v-if="action">
    <u-button
      shape="circle"
      size="mini"
      type="warning"
      :plain="true"
      @click="onClickActionButton"
    >
      {{ action.label }}
    </u-button>
  </view>
</template>

<script>
import {
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_DELIVERY_PENDING,
  ORDER_STATUS_PAYMENT_PENDING,
  ORDER_STATUS_SHIPMENT_PENDING,
} from "../../../enum/orderStatus";
import {
  BUYER_ORDER_DETAIL_PAGE,
  SELLER_ORDER_DETAIL_PAGE,
} from "../../../route/applicationRoute";
export default {
  computed: {
    action() {
      return this.getAction();
    },
  },
  methods: {
    getAction() {
      const { order, type } = this;
      return type === "buyer"
        ? this.buyerAction(order)
        : this.sellerAction(order);
    },
    buyerAction(order) {
      const { orderStatus } = order;
      if (orderStatus === ORDER_STATUS_PAYMENT_PENDING.key) {
        return { label: "去付款", toPage: BUYER_ORDER_DETAIL_PAGE };
      } else if (orderStatus === ORDER_STATUS_DELIVERY_PENDING.key) {
        return { label: "去收貨", toPage: BUYER_ORDER_DETAIL_PAGE };
      } else if (orderStatus === ORDER_STATUS_DELIVERED.key) {
        return { label: "去評論", toPage: BUYER_ORDER_DETAIL_PAGE };
      }
    },
    onClickActionButton() {
      uni.navigateTo({ url: this.getAction().toPage(this.order).url });
    },
    sellerAction(order) {
      const { orderStatus } = order;

      if (orderStatus === ORDER_STATUS_SHIPMENT_PENDING.key) {
        return { label: "去發貨", toPage: SELLER_ORDER_DETAIL_PAGE };
      } else if (orderStatus === ORDER_STATUS_DELIVERED.key) {
        return { label: "去評論", toPage: SELLER_ORDER_DETAIL_PAGE };
      }
    },
  },
  props: {
    order: Object,
    type: {
      default: "buyer",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>