<template>
  <view class="column-center-container" @click="onClick">
    <image class="image" src="../../static/myTrade/my_order.png" />
    <view class="small-margin-top-spacer">
      <text class="h4 secondary">{{ text }}</text>
    </view>
  </view>
</template>

<script>
import { MY_ORDER_PAGE } from "../../route/applicationRoute";
export default {
  computed: {
    text() {
      const { purchasedOrderPendingCount } =
        this.$store.state.statusSummary.content;
      return `我的收獲 ${purchasedOrderPendingCount}`;
    },
  },
  methods: {
    onClick() {
      uni.navigateTo({ url: MY_ORDER_PAGE().url });
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-container {
  background-color: $u-phoenix-yellow;
  border-radius: 100px;
  color: #ffffff;
  padding: 12rpx;
}
.image {
  height: 50rpx;
  width: 50rpx;
}
</style>