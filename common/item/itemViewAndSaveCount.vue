<template>
  <view>
    <text class="h6 secondary" v-if="saveCount > 0">{{ saveCount }}想要-</text>
    <text class="h6 secondary">瀏覽{{ viewCount }}</text>
  </view>
</template>

<script>
export default {
  props: {
    saveCount: {
      default: 1,
      type: Number,
    },
    viewCount: {
      default: 1,
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>