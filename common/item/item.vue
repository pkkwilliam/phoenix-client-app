<template>
  <view>
    <application-lazy-load-image :image="item.images[0]" />
    <view class="description-container">
      <text class="h4 black bold description-text"
        >{{ shorternDescriptionText }}
      </text>
    </view>
    <view class="row-center-container small-margin-top-spacer">
      <display-currency-fish-coin :value="item.price" />
      <view class="small-margin-left-spacer">
        <item-view-and-save-count :viewCount="item.viewCount" />
      </view>
    </view>
    <view class="row-center-container">
      <barter-tag />
      <area-tag class="small-margin-left-spacer" :value="item.itemLocation" />
    </view>
  </view>
</template>

<script>
import AreaTag from "../../components/tag/areaTag.vue";
import BarterTag from "../../components/tag/barterTag.vue";
import ApplicationLazyLoadImage from "../applicationComponent/applicationLazyLoadImage.vue";
import DisplayCurrencyFishCoin from "../displayCurrency/displayCurrencyFishCoin.vue";
import DisplayCurrenyPrice from "../displayCurrenyPrice.vue";
import ItemViewAndSaveCount from "./itemViewAndSaveCount.vue";
export default {
  components: {
    DisplayCurrencyFishCoin,
    DisplayCurrenyPrice,
    ItemViewAndSaveCount,
    BarterTag,
    AreaTag,
    ApplicationLazyLoadImage,
  },
  computed: {
    coverImage() {
      return this.item.images[0];
    },
    shorternDescriptionText() {
      const { description } = this.item;
      return description.substring(0, 15);
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
  word-break: break-all;
}
.item-image {
  border-radius: 8px;
}
</style>