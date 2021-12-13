<template>
  <view class="row-center-container" @click="onClick">
    <u-icon custom-prefix="phoenix-custom-icon" name="shoe" size="58" />
    <text class="text">足跡</text>
  </view>
</template>

<script>
import { MY_VIEW_ITEM_PAGE } from "../../route/applicationRoute";
export default {
  methods: {
    onClick() {
      uni.navigateTo({ url: MY_VIEW_ITEM_PAGE().url });
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  margin-left: 15rpx;
}
</style>