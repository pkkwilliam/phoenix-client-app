<template>
  <view class="container">
    <search-bar @search="onClickSearch" />
    <view class="medium-margin-top-spacer">
      <waterfall-item-pagination
        ref="paginationWaterFallRef"
        :serviceRequest="serviceRequest"
        :requestUponMounted="false"
      />
    </view>
  </view>
</template>

<script>
import WaterfallItemPagination from "../../common/itemDisplayList/waterfallItemPagination.vue";
import searchBar from "../../components/searchBar.vue";
import { GET_ITEMS_BY_DESCRIPTION_LIKE } from "../../service/service";
export default {
  components: {
    searchBar,
    WaterfallItemPagination,
  },
  computed: {
    serviceRequest() {
      return (pageRequest, pageSize) =>
        GET_ITEMS_BY_DESCRIPTION_LIKE(this.value, pageRequest, pageSize);
    },
  },
  data() {
    return { value: undefined };
  },
  methods: {
    onClickSearch(value) {
      const { paginationWaterFallRef } = this.$refs;
      paginationWaterFallRef.clear();
      this.value = value;
      paginationWaterFallRef.getServiceResponse();
    },
  },
  onReachBottom() {
    this.$refs.paginationWaterFallRef.getServiceResponse();
  },
};
</script>

<style lang="scss" scoped>
</style>