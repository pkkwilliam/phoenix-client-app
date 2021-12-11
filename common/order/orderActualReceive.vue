<template>
  <view class="space-between-container h4 black">
    <text>實收款</text>
    <text>$ {{ actualReceive }}</text>
  </view>
</template>

<script>
export default {
  computed: {
    actualReceive() {
      return this.order.cost - this.order.commissionFee;
    },
  },
  props: {
    order: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>