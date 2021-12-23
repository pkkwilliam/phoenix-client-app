<template>
  <scroll-view
    scroll-y
    style="height: 100%; width: 100%"
    refresher-default-style="white"
    :refresher-background="styles.backgroundColor"
    :refresher-enabled="true"
    :refresher-triggered="refresherTriggered"
    @refresherrefresh="resetPagination"
    @scrolltolower="reachBottom"
  >
    <view class="page-box">
      <item-category-waterfall ref="itemCategoryWaterFallRef" />
    </view>
  </scroll-view>
</template>

<script>
import itemCategoryWaterfall from "../../components/item/itemCategoryWaterfall.vue";
import styles from "../../uview-ui/theme.js";
export default {
  components: { itemCategoryWaterfall },
  data() {
    return { refresherTriggered: false, styles };
  },
  methods: {
    resetPagination() {
      this.refresherTriggered = true;
      this.$refs.itemCategoryWaterFallRef.resetPagination();
      setTimeout(() => {
        this.refresherTriggered = false;
      }, 1000);
    },
    reachBottom() {
      this.$refs.itemCategoryWaterFallRef.getServiceResponse();
    },
  },
};
</script>

