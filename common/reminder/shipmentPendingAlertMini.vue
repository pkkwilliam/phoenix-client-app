<template>
  <view class="space-between-container container">
    <view class="row-center-container">
      <image class="image" :src="imageIcon" />
      <text class="h4 blue">買家已付款</text>
    </view>
    <u-button
      class="button"
      plain="true"
      shape="circle"
      size="mini"
      type="primary"
      >去發貨</u-button
    >
  </view>
</template>

<script>
export default {
  components: {},
  computed: {
    imageIcon() {
      return "https://smalltotall.info/wp-content/uploads/2017/04/google-favicon-vector-400x400.png";
    },
  },
  props: {
    order: Object,
  },
};
</script>

<style lang="scss" scoped>
.button {
  margin: 0;
}
.container {
  background-color: $u-type-primary-light;
  border-radius: 8px;
  padding: 15rpx;
  margin-top: 20rpx;
}
.image {
  border-radius: 8px;
  height: 65rpx;
  width: 65rpx;
}
</style>