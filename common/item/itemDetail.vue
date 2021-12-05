<template>
  <view>
    <view class="item-container">
      <item-detail-price-info class="section-container" :item="item" />
      <item-detail-shipping-info class="section-container" :item="item" />
      <view class="section-container">
        <text class="description-text">{{ item.description }}</text>
      </view>
      <view class="condition-container">
        <text class="header">成色</text>
        <text class="value">{{ conditionLabel }}</text>
      </view>
      <u-lazy-load
        class="image-container"
        v-for="(imageUrl, index) in item.images"
        :border-radius="15"
        :key="index"
        :image="imageUrl"
      />
    </view>
  </view>
</template>

<script>
import { getItemConditionLabelByKey } from "../../enum/itemCondition";
import DiscountTag from "../discountTag.vue";
import DisplayCurrenyPrice from "../displayCurrenyPrice.vue";
import ItemDetailPriceInfo from "./itemDetailPriceInfo.vue";
import ItemDetailShippingInfo from "./itemDetailShippingInfo.vue";
import ItemSubmitBar from "./itemSubmitBar.vue";
import StrikeThroughCurrencyPrice from "../strikeThroughCurrencyPrice.vue";
export default {
  components: {
    DisplayCurrenyPrice,
    StrikeThroughCurrencyPrice,
    DiscountTag,
    ItemDetailPriceInfo,
    ItemDetailShippingInfo,
    ItemSubmitBar,
  },
  computed: {
    conditionLabel() {
      return getItemConditionLabelByKey(this.item.itemCondition);
    },
  },
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.condition-container {
  font-size: 36rpx;
  margin-top: 28rpx;
  .header {
    color: $u-phoenix-light-grey;
    margin-right: 20rpx;
  }
  .value {
    color: $u-phoenix-font-dark;
    font-weight: 500;
  }
}
.description-text {
  font-size: 32rpx;
}
.image-container {
  margin-top: 28rpx;
}
.section-container {
  margin-top: 20rpx;
}
</style>