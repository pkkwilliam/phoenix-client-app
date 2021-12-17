<template>
  <view class="row-center-container" @click="onClick">
    <u-icon name="star" size="45" :top="-3" />
    <text class="text">收藏</text>
  </view>
</template>

<script>
import { MY_SAVE_ITEM_PAGE } from "../../route/applicationRoute";
export default {
  methods: {
    onClick() {
      uni.navigateTo({ url: MY_SAVE_ITEM_PAGE().url });
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  margin-left: 15rpx;
}
</style>