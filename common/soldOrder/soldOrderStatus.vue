<template>
  <view class="column-container">
    <text class="h4 black lightly-bold">{{ values.label }}</text>
    <text class="h5 secondary">{{ values.actionText }}</text>
  </view>
</template>

<script>
import { getOrderStatusByKey } from "../../enum/orderStatus";
export default {
  data() {
    return { values: {} };
  },
  mounted() {
    this.values = getOrderStatusByKey(this.orderStatus);
  },
  props: {
    orderStatus: String,
  },
};
</script>

<style lang="scss" scoped>
</style>