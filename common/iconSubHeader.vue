<template>
  <view class="row-center-container">
    <u-icon custom-prefix="phoenix-custom-icon" :name="iconName" size="38" />
    <text class="icon-text">{{ label }}</text>
  </view>
</template>

<script>
export default {
  props: {
    iconName: {
      default: "list",
      type: String,
    },
    label: {
      default: "標籤",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  background-color: #3a3a3a;
  border-radius: 30px;
  color: #ffffff;
  padding: 8rpx;
}
.icon-text {
  margin-left: 8rpx;
}
</style>