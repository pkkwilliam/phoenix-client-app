<template>
  <view class="column-center-container">
    <text class="h4 black lightly-bold">{{ likeCount }}</text>
    <text class="h5 secondary">關注</text>
  </view>
</template>

<script>
export default {
  computed: {
    likeCount() {
      return "未推出";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>