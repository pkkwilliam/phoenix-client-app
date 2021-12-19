<template>
  <view>
    <shipment-pending-alert-mini
      v-for="(sellerPendingOrder, index) in sellerPendingOrders"
      :order="sellerPendingOrder"
      :key="index"
    />
  </view>
</template>

<script>
import ShipmentPendingAlertMini from "../../../common/reminder/shipmentPendingAlertMini.vue";
import { ORDER_STATUS_SHIPMENT_PENDING } from "../../../enum/orderStatus";
export default {
  components: {
    ShipmentPendingAlertMini,
  },
  computed: {
    sellerPendingOrders() {
      return this.$store.state.sellerPendingOrder.content.filter(
        (order) => order.orderStatus === ORDER_STATUS_SHIPMENT_PENDING.key
      );
    },
  },
  mounted() {},
};
</script>

