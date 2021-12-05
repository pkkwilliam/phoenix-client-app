<template>
  <view @click="onClick">
    <u-icon name="home" size="28" />
    <text class="text">收藏</text>
  </view>
</template>

<script>
import { USER_SAVE_ITEM_PAGE } from "../../route/applicationRoute";
export default {
  methods: {
    onClick() {
      uni.navigateTo({ url: USER_SAVE_ITEM_PAGE().url });
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  margin-left: 15rpx;
}
</style>