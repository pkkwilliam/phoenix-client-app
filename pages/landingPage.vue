<!-- 首页 -->
<template>
  <view class="landing-page-container">
    <search-bar />
    <item-category-waterfall />
  </view>
</template>

<script>
import ItemCategoryWaterfall from "../components/item/itemCategoryWaterfall.vue";
import PaginationItemDisplay from "../common/itemDisplayList/paginationItemDisplay.vue";
import CategoryTap from "../components/category/categoryTap.vue";
import SearchBar from "../components/searchBar.vue";
import { LANDING_TAB } from "../route/applicationRoute";
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
    loadPaginationItems() {
      this.paginationUtil.loadData().then((response) => {
        this.items = response;
      });
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
.landing-page-container {
  padding-left: 20rpx;
  padding-right: 20rpx;
}
</style>
