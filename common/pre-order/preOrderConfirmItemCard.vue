<template>
  <view class="item-container">
    <u-image
      class="item-image"
      mode="widthFix"
      width="80%"
      :border-radius="30"
      :src="itemCoverImage"
    />
    <view class="item-text-container">
      <text class="item-description">{{ itemDescription }}</text>
      <display-currency-fish-coin class="price" :value="itemPrice" />
    </view>
  </view>
</template>

<script>
import DisplayCurrencyFishCoin from "../displayCurrency/displayCurrencyFishCoin.vue";
export default {
  components: { DisplayCurrencyFishCoin },
  computed: {
    itemCoverImage() {
      return this.item.images[0];
    },
    itemDescription() {
      return this.item.description.substring(0, 15);
    },
    itemPrice() {
      return this.item.price;
    },
  },
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.item-container {
  display: flex;
  flex-direction: row;
  .item-text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    .price {
      align-self: flex-end;
    }
  }
  .item-image {
    margin-right: 20rpx;
  }
  .item-description {
    font-size: 32rpx;
    font-weight: 400;
  }
}
</style>