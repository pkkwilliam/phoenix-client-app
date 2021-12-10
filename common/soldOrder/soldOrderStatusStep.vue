<template>
  <view>
    <u-steps
      mode="number"
      :active-color="activeColor"
      :current="currentStep"
      :list="steps"
      :un-active-color="unActiveColor"
    >
    </u-steps>
  </view>
</template>

<script>
import styles from "../../uview-ui/theme.scss";
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
    activeColor() {
      return styles.brown;
    },
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
    unActiveColor() {
      return styles.secondary;
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