<template>
  <view class="row-center-container" @click="onClick">
    <u-icon
      custom-prefix="phoenix-custom-icon"
      name="gear"
      size="38"
      :top="0"
    />
  </view>
</template>

<script>
import { MY_SETTING_PAGE } from "../../../route/applicationRoute";
export default {
  methods: {
    onClick() {
      uni.navigateTo({ url: MY_SETTING_PAGE().url });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>