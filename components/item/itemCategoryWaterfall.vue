<template>
  <view>
    <category-tap @onChangeCategory="onChangeCategory" />
    <u-waterfall ref="uWaterfall" v-model="items">
      <template v-slot:left="{ leftList }">
        <view
          class="left-container large-margin-bottom-spacer"
          v-for="(item, index) in leftList"
          :key="index"
        >
          <view @click="onClickItem(item)">
            <item :item="item" />
            <user-card-mini
              class="small-margin-top-spacer"
              :showRightArrowIcon="false"
              :user="item.createBy"
            />
          </view>
        </view>
      </template>
      <template v-slot:right="{ rightList }">
        <view
          class="right-container large-margin-bottom-spacer"
          v-for="(item, index) in rightList"
          :key="index"
        >
          <view @click="onClickItem(item)">
            <item :item="item" />
            <user-card-mini
              class="small-margin-top-spacer"
              :showRightArrowIcon="false"
              :user="item.createBy"
            />
          </view>
        </view>
      </template>
    </u-waterfall>
  </view>
</template>

<script>
/**
 * nothing we can refactor yet until landing page is not nest inside tabbar
 */
import item from "../../common/item/item.vue";
import { ITEM_DETAIL_PAGE } from "../../route/applicationRoute";
import CategoryTap from "../category/categoryTap.vue";
import { GET_ITEMS } from "../../service/service";
import UserCardMini from "../../common/user/userCardMini.vue";
import styles from "../../uview-ui/theme.js";
export default {
  components: { item, CategoryTap, UserCardMini },
  computed: {},
  data() {
    return {
      currentPage: 0,
      items: [],
      selectedCategory: undefined,
      styles,
      totolElement: 0,
      totalPage: 0,
      refresherTriggered: false,
    };
  },
  methods: {
    getServiceResponse() {
      this.getItems();
    },
    async getItems() {
      const { currentPage, selectedCategory } = this;
      const { content, totalPage, totalElement } = await this.execute(
        GET_ITEMS(currentPage, 10, selectedCategory?.id)
      );
      this.currentPage += 1;
      this.totalPage = totalPage;
      this.totalElement = totalElement;
      this.items = this.items.concat(content);
    },
    onChangeCategory(selectedCategory) {
      this.selectedCategory = selectedCategory;
      this.resetPagination();
    },
    onClickItem(item) {
      uni.navigateTo({ url: ITEM_DETAIL_PAGE(item).url });
    },
    resetPagination() {
      this.$refs.uWaterfall.clear();
      this.currentPage = 0;
      this.items = [];
      this.getItems();
    },
  },
  mounted() {
    this.getItems();
  },
  watch: {
    dirty(newDirty, oldDirty) {
      if (newDirty) {
        this.getItems();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.left-container {
  margin-right: 10rpx;
}
.right-container {
  margin-left: 10rpx;
}
</style>