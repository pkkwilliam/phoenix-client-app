<template>
  <view class="space-between-container">
    <view class="row-container">
      <image class="image" mode="aspectFill" :src="coverImage" />
      <text class="description">{{ description }}</text>
    </view>
    <view class="align-end-container">
      <display-curreny-price priceColor="secondary" :value="item.price" />
      <text class="h6 secondary quantity-text">x{{ quantity }}</text>
    </view>
  </view>
</template>

<script>
import displayCurrenyPrice from "../displayCurrenyPrice.vue";

export default {
  components: { displayCurrenyPrice },
  component: {},
  computed: {
    coverImage() {
      return this.item.images[0];
    },
    description() {
      return this.item.description.substring(0, 20);
    },
  },
  props: {
    item: Object,
    quantity: {
      default: 1,
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.description {
  margin-left: 20rpx;
}
.image {
  border-radius: 8px;
  height: 180rpx;
  width: 180rpx;
}
.quantity-text {
  margin-top: 8rpx;
}
</style>