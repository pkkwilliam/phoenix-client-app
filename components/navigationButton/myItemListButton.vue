<template>
  <view class="column-center-container" @click="onClick">
    <u-icon
      class="icon-container"
      custom-prefix="phoenix-custom-icon"
      name="list"
      size="38"
      :top="-1"
    />
    <view class="small-margin-top-spacer">
      <text class="h4 secondary">{{ text }}</text>
    </view>
  </view>
</template>

<script>
import { MY_LIST_PAGE } from "../../route/applicationRoute";
export default {
  computed: {
    text() {
      return `我的發布`;
    },
  },
  methods: {
    onClick() {
      uni.navigateTo({ url: MY_LIST_PAGE().url });
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
</style>