<template>
  <view>
    <u-waterfall ref="uWaterfall" v-model="itemData">
      <template v-slot:left="{ leftList }">
        <view
          class="container left-container"
          v-for="(item, index) in leftList"
          :key="index"
        >
          <view @click="onClickItem(item)">
            <item :item="item" />
            <user-card-mini
              v-if="showSeller"
              class="seller-container"
              :user="item.createBy"
            />
          </view>
        </view>
      </template>
      <template v-slot:right="{ rightList }">
        <view
          class="container right-container"
          v-for="(item, index) in rightList"
          :key="index"
        >
          <view @click="onClickItem(item)">
            <item :item="item" />
            <user-card-mini
              v-if="showSeller"
              class="seller-container"
              :user="item.createBy"
            />
          </view>
        </view>
      </template>
    </u-waterfall>
  </view>
</template>

<script>
import item from "../item/item.vue";
import { ITEM_DETAIL_PAGE } from "../../route/applicationRoute";

import CategoryTap from "../../components/category/categoryTap.vue";
import UserCardMini from "../user/userCardMini.vue";

export default {
  components: { item, CategoryTap, UserCardMini },

  data() {
    return { itemData: [] };
  },
  methods: {
    onChangeCategory(selectedCategory) {
      this.$appStateService.setItemPagination(LANDING_TAB);
      this.selectedCategory = selectedCategory;
    },
    onClickItem(item) {
      uni.navigateTo({
        animationType: "slide-in-right",
        animationDuration: 200,
        url: ITEM_DETAIL_PAGE(item).url,
      });
    },
  },
  mounted() {},
  props: {
    items: {
      default() {
        return [];
      },
      type: Array,
    },
    showSeller: {
      default: true,
      type: Boolean,
    },
  },
  watch: {
    items(newItems, oldItems) {
      this.itemData = this.itemData.concat(newItems);
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  margin-bottom: 20rpx;
}
.left-container {
  margin-right: 10rpx;
}
.right-container {
  margin-left: 10rpx;
}
.seller-container {
  margin-top: 15rpx;
}
</style>