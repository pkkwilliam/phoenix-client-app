<template>
  <view class="space-between-center-container container">
    <view class="row-center-container">
      <image class="image" :src="imageIcon" />
      <text class="h4 blue text">買家已付款</text>
    </view>
    <u-button
      class="button"
      shape="circle"
      size="mini"
      type="primary"
      :plain="true"
      @click="onClickButton"
      >去發貨</u-button
    >
  </view>
</template>

<script>
import { SELLER_ORDER_DETAIL_PAGE } from "../../route/applicationRoute";
export default {
  components: {},
  computed: {
    imageIcon() {
      const { images } = this.order.item;
      return images[0];
    },
  },
  methods: {
    onClickButton() {
      uni.navigateTo({ url: SELLER_ORDER_DETAIL_PAGE(this.order).url });
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
.text {
  margin-left: 16rpx;
}
</style>