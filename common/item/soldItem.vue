<template>
  <view class="space-between-container" @click="onClickItem">
    <view class="row-container">
      <application-lazy-load-image
        class="image"
        mode="widthFix"
        :image="coverImage"
      />
      <!-- <image class="image" mode="aspectFill" :src="coverImage" /> -->
      <text class="description">{{ description }}</text>
    </view>
    <view class="align-end-container" v-if="showPrice">
      <display-currency-fish-coin priceColor="secondary" :value="item.price" />
      <text class="h6 secondary quantity-text">x{{ quantity }}</text>
    </view>
  </view>
</template>

<script>
import { ITEM_DETAIL_PAGE } from "../../route/applicationRoute";
import ApplicationLazyLoadImage from "../applicationComponent/applicationLazyLoadImage.vue";
import DisplayCurrencyFishCoin from "../displayCurrency/displayCurrencyFishCoin.vue";

export default {
  components: { DisplayCurrencyFishCoin, ApplicationLazyLoadImage },
  component: {},
  computed: {
    coverImage() {
      return this.item.images[0];
    },
    description() {
      return this.item.description.substring(0, 15);
    },
  },
  methods: {
    onClickItem() {
      if (this.clickable) {
        uni.navigateTo({ url: ITEM_DETAIL_PAGE(this.item.id).url });
      }
    },
  },
  props: {
    clickable: {
      default: true,
      tyoe: Boolean,
    },
    item: Object,
    quantity: {
      default: 1,
      type: Number,
    },
    showPrice: {
      default: true,
      type: Boolean,
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