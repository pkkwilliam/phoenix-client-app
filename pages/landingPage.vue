<!-- 首页 -->
<template>
  <view class="container">
    <item-category-waterfall />
  </view>
</template>

<script>
import ItemCategoryWaterfall from "../components/item/itemCategoryWaterfall.vue";
import PaginationItemDisplay from "../common/itemDisplayList/paginationItemDisplay.vue";
import CategoryTap from "../components/category/categoryTap.vue";
import SearchBar from "../components/searchBar.vue";
import { processPushNotificationToken } from "../util/notificationUtil";

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
  methods: {},
  mounted() {
    console.log("at mounted");
    processPushNotificationToken();
  },
};
</script>
<style lang="scss" scoped>
</style>
