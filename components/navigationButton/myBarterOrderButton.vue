<template>
  <view class="column-center-container" @click="onClick">
    <image class="image" src="../../static/myTrade/my_barter_order.png" />
    <view class="small-margin-top-spacer">
      <text class="h4 secondary">{{ text }}</text>
    </view>
  </view>
</template>

<script>
import { BARTER_ORDER_PAGE } from "../../route/applicationRoute";
export default {
  computed: {
    text() {
      const { barterOrderPendingCount } =
        this.$store.state.statusSummary.content;
      return `我的換物 ${barterOrderPendingCount}`;
    },
  },
  methods: {
    onClick() {
      uni.navigateTo({ url: BARTER_ORDER_PAGE().url });
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-container {
  background-color: #eb523f;
  border-radius: 100px;
  color: #ffffff;
  padding: 12rpx;
}
.image {
  height: 50rpx;
  width: 50rpx;
}
</style>