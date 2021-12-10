<template>
  <view>
    <text class="h4 orange lightly-bold">{{ label }}</text>
  </view>
</template>

<script>
import { getOrderStatusLabelByKey } from "../../enum/orderStatus";
export default {
  computed: {
    label() {
      return getOrderStatusLabelByKey(this.orderStatus);
    },
  },
  props: {
    orderStatus: String,
  },
};
</script>

<style lang="scss" scoped>
</style>