<template>
  <view @click="onClickItem">
    <view class="space-between-center-container">
      <seller-profile-mini :user="item.createBy" />
      <view class="row-center-container">
        <display-curreny-price class="price" :value="item.price" />
        <strike-through-currency-price :value="item.originalPrice" />
      </view>
    </view>

    <scroll-view
      scroll-x
      class="u-scroll-view view-container"
      scroll-with-animation
    >
      <image
        class="image"
        mode="aspectFill"
        v-for="(image, index) in item.images"
        :src="image"
        :key="index"
      />
      <view v-if="showBar" class="u-tab-bar" :style="[tabBarStyle]"></view>
    </scroll-view>

    <view class="view-container">
      <text class="h4 black lightly-bold">{{ description }}</text>
    </view>
    <view class="space-between-center-container view-container">
      <mpay-guarantee />
      <item-view-and-save-count
        :viewCount="item.viewCount"
        :saveCount="item.saveCount"
      />
    </view>
  </view>
</template>

<script>
import { ITEM_DETAIL_PAGE } from "../../route/applicationRoute";
import { convertSystemDateToDisplayDateYear } from "../../util/dateUtil";
import displayCurrenyPrice from "../displayCurrenyPrice.vue";
import MpayGuarantee from "../mpayGuarantee.vue";
import SellerProfileMini from "../sellerProfileMini.vue";
import StrikeThroughCurrencyPrice from "../strikeThroughCurrencyPrice.vue";
import ItemViewAndSaveCount from "./itemViewAndSaveCount.vue";
export default {
  components: {
    displayCurrenyPrice,
    MpayGuarantee,
    ItemViewAndSaveCount,
    SellerProfileMini,
    StrikeThroughCurrencyPrice,
  },
  computed: {
    createDate() {
      const { createTime, updateTime } = this.item;
      const convertDate = updateTime ? updateTime : createTime;
      return convertSystemDateToDisplayDateYear(convertDate);
    },
    description() {
      return this.item.description.substring(0, 30);
    },
  },
  methods: {
    onClickItem() {
      uni.navigateTo({ url: ITEM_DETAIL_PAGE(this.item).url });
    },
  },
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.button {
  margin: 0px 10rpx;
}
.image {
  border-radius: 8px;
  height: 300rpx;
  margin-right: 12rpx;
  width: 300rpx;
}
.price {
  margin-right: 15rpx;
}
</style>