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
export default {
  components: {
    ShipmentPendingAlertMini,
  },
  computed: {
    sellerPendingOrders() {
      return this.$store.state.sellerPendingOrder.content;
    },
  },
};
</script>

