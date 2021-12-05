<template>
  <view>
    <u-lazy-load
      class="item-image"
      border-radius="8px"
      :image="item.images[0]"
    />
    <view class="description-container">
      <text class="description-text">{{ shorternDescriptionText }}</text>
    </view>
    <view>
      <display-curreny-price :value="item.price" />
    </view>
  </view>
</template>

<script>
import DisplayCurrenyPrice from "../displayCurrenyPrice.vue";
export default {
  components: { DisplayCurrenyPrice },
  computed: {
    coverImage() {
      return this.item.images[0];
    },
    shorternDescriptionText() {
      const { description } = this.item;
      return description.substring(0, 30);
    },
  },
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.description-container {
  margin-top: 10rpx;
}
.description-text {
  color: $u-phoenix-font-dark;
  font-size: 32rpx;
  font-weight: 500;
  word-break: break-all;
}
.item-image {
  border-radius: 8px;
}
</style>