<template>
  <view>
    <u-steps
      mode="number"
      :active-color="$styles.brown"
      :current="currentStep"
      :list="steps"
      :un-active-color="$styles.secondary"
    >
    </u-steps>
  </view>
</template>

<script>
import {
  ORDER_STATUS_PAYMENT_PENDING,
  ORDER_STATUS_SHIPMENT_PENDING,
  ORDER_STATUS_DELIVERY_PENDING,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_COMMENTED,
} from "../../enum/orderStatus";
const ORDER_STATUSES = [
  ORDER_STATUS_PAYMENT_PENDING,
  ORDER_STATUS_SHIPMENT_PENDING,
  ORDER_STATUS_DELIVERY_PENDING,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_COMMENTED,
];
export default {
  computed: {
    currentStep() {
      return this.getCurrentOrderStatusIndex();
    },
    steps() {
      const currentStep = this.getCurrentOrderStatusIndex();
      return ORDER_STATUSES.map((orderStatus, index) => ({
        name:
          index <= currentStep
            ? orderStatus.shortLabel
            : orderStatus.shortLabelPending,
      }));
    },
  },
  methods: {
    getCurrentOrderStatusIndex() {
      return ORDER_STATUSES.findIndex(
        (orderStatus) => orderStatus.key === this.orderStatus
      );
    },
  },
  props: {
    orderStatus: {
      default: ORDER_STATUS_PAYMENT_PENDING.key,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>