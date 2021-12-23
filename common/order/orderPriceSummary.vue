<template>
  <view class="h5 secondary">
    <view class="space-between-container">
      <text>商品總價</text>
      <text>${{ itemCost }}</text>
    </view>
    <view
      class="space-between-container small-margin-top-spacer"
      v-if="shippingCost"
    >
      <text>運費</text>
      <text>${{ shippingCost }}</text>
    </view>
  </view>
</template>

<script>
export default {
  computed: {
    itemCost() {
      return this.order.item.price;
    },
    shippingCost() {
      return this.order.shippingCost;
    },
  },
  props: {
    order: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>