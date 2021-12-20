<!-- 首页 -->
<template>
  <view class="container safearea-container medium-margin-top-spacer">
    <search-bar :disabled="true" @click="onSearchBarClick" />
    <item-category-waterfall />
  </view>
</template>

<script>
import ItemCategoryWaterfall from "../components/item/itemCategoryWaterfall.vue";
import PaginationItemDisplay from "../common/itemDisplayList/paginationItemDisplay.vue";
import CategoryTap from "../components/category/categoryTap.vue";
import SearchBar from "../components/searchBar.vue";
import { LANDING_TAB, SEARCH_ITEM_PAGE } from "../route/applicationRoute";
import { TabbarEventBus } from "./index/tabbar.vue";

export const ON_CHANGE_CATEGORY_EMIT = "ON_CHANGE_CATEGORY_EMIT";
export default {
  components: {
    SearchBar,
    PaginationItemDisplay,
    CategoryTap,
    ItemCategoryWaterfall,
  },
  data() {
    return {
      selectedCategory: undefined,
      paginationUtil: undefined,
      items: [],
    };
  },
  methods: {
    onSearchBarClick() {
      uni.navigateTo({ url: SEARCH_ITEM_PAGE().url });
    },
  },
  mounted() {
    // this method is for when tabbar emits onReachBottom and this will set dirty as true for pagination
    TabbarEventBus.$on("onReachBottom", () =>
      this.$appStateService.setItemPagination(LANDING_TAB)
    );
    this.$appStateService.getAddress();
    this.$appStateService.getUserProfile();
  },
};
</script>
<style lang="scss" scoped>
</style>
