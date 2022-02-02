<template>
  <view>
    <view>
      <item-detail-price-info class="medium-margin-top-spacer" :item="item" />
      <item-detail-shipping-info
        class="medium-margin-top-spacer"
        :item="item"
      />
      <view class="medium-margin-top-spacer">
        <text class="h3 black">{{ item.description }}</text>
      </view>
      <view class="condition-container">
        <text class="h3 secondary lightly-bold">成色</text>
        <text class="h3 black lightly-bold value">{{ conditionLabel }}</text>
      </view>
      <application-lazy-load-image
        class="medium-margin-top-spacer"
        v-for="(imageUrl, index) in item.images"
        :border-radius="15"
        :key="index"
        :image="imageUrl"
      />
    </view>
    <view class="space-between-center-container medium-margin-top-spacer">
      <platform-guarantee />
      <item-view-and-save-count
        :saveCount="item.saveCount"
        :viewCount="item.viewCount"
      />
    </view>
  </view>
</template>

<script>
import { getItemConditionLabelByKey } from "../../enum/itemCondition";
import DisplayCurrenyPrice from "../displayCurrenyPrice.vue";
import ItemDetailPriceInfo from "./itemDetailPriceInfo.vue";
import ItemDetailShippingInfo from "./itemDetailShippingInfo.vue";
import StrikeThroughCurrencyPrice from "../strikeThroughCurrencyPrice.vue";
import ItemViewAndSaveCount from "./itemViewAndSaveCount.vue";
import PlatformGuarantee from "../../components/guarantee/platformGuarantee.vue";
import ApplicationLazyLoadImage from "../applicationComponent/applicationLazyLoadImage.vue";

export default {
  components: {
    DisplayCurrenyPrice,
    StrikeThroughCurrencyPrice,
    ItemDetailPriceInfo,
    ItemDetailShippingInfo,
    ItemViewAndSaveCount,
    PlatformGuarantee,
    ApplicationLazyLoadImage,
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
  margin-top: 28rpx;
  .value {
    margin-left: 20rpx;
  }
}
</style>