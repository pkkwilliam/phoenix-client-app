<template>
  <view @click="onClickItem">
    <scroll-view
      scroll-x
      class="u-scroll-view medium-margin-top-spacer"
      scroll-with-animation
    >
      <image
        class="image"
        mode="aspectFill"
        v-for="(image, index) in item.images"
        :src="image"
        :key="index"
      />
    </scroll-view>

    <view class="medium-margin-top-spacer">
      <text class="h4 black lightly-bold">{{ description }}</text>
    </view>
    <view class="space-between-center-container medium-margin-top-spacer">
      <platform-guarantee />
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
import StrikeThroughCurrencyPrice from "../strikeThroughCurrencyPrice.vue";
import UserCardMini from "../user/userCardMini.vue";
import ItemViewAndSaveCount from "./itemViewAndSaveCount.vue";
import PlatformGuarantee from "../../components/guarantee/platformGuarantee.vue";
export default {
  components: {
    displayCurrenyPrice,
    ItemViewAndSaveCount,
    StrikeThroughCurrencyPrice,
    UserCardMini,
    PlatformGuarantee,
  },
  computed: {
    createDate() {
      const { createTime, updateTime } = this.item;
      const convertDate = updateTime ? updateTime : createTime;
      return convertSystemDateToDisplayDateYear(convertDate);
    },
    description() {
      return this.item.description.substring(0, 15);
    },
  },
  methods: {
    onClickItem() {
      uni.navigateTo({ url: ITEM_DETAIL_PAGE(this.item.id).url });
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