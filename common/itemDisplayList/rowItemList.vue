<template>
  <view>
    <view class="container" v-for="(item, index) in items" :key="index">
      <text>{{ item.description }}</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    items: {
      default() {
        return [];
      },
      type: Array,
    },
    showSeller: {
      default: true,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20rpx;
}
</style>