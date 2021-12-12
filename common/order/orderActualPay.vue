<template>
  <view class="space-between-container h4 black">
    <text>實付款</text>
    <text>$ {{ actualPay }}</text>
  </view>
</template>

<script>
export default {
  computed: {
    actualPay() {
      return this.order.cost;
    },
  },
  props: {
    order: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>