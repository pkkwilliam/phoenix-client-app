<template>
  <view class="column-center-container" @click="onClick">
    <image class="image" src="../../static/myTrade/my_sold.png" />
    <view class="small-margin-top-spacer">
      <text class="h4 secondary">{{ text }}</text>
    </view>
  </view>
</template>

<script>
import { MY_SOLD_PAGE } from "../../route/applicationRoute";
export default {
  computed: {
    text() {
      const { soldOrderPendingCount } = this.$store.state.statusSummary.content;
      return `我賣出的 ${soldOrderPendingCount}`;
    },
  },
  methods: {
    onClick() {
      uni.navigateTo({ url: MY_SOLD_PAGE().url });
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-container {
  background-color: #007aff;
  border-radius: 100px;
  color: #ffffff;
  padding: 12rpx;
}
.image {
  height: 50rpx;
  width: 50rpx;
}
</style>