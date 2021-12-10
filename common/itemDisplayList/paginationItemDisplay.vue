<template>
  <view>
    <view v-for="(data, index) in dataList" :key="index">
      <slot name="content" :data="data" />
    </view>
  </view>
</template>

<script>
import RowItemList from "./rowItemList.vue";
import waterfallItemList from "./waterfallItemList.vue";
export default {
  components: { waterfallItemList, RowItemList },
  computed: {
    dirty() {
      return this.$store.state.itemPagination.dirty;
    },
  },
  data() {
    return {
      currentPage: 0,
      dataList: [],
      totolElement: 0,
      totalPage: 0,
    };
  },
  methods: {
    getServiceResponse() {
      this.execute(
        this.serviceRequest(this.currentPage, this.requestSize)
      ).then((response) => {
        const { content, totalPage, totalElement } = response;
        this.currentPage += 1;
        this.totalPage = totalPage;
        this.totalElement = totalElement;
        this.dataList = content;
        this.onGetItemPaginationSuccess();
      });
    },
    onGetItemPaginationSuccess() {
      this.$store.commit("setItemPaginationClean");
    },
  },
  mounted() {
    this.getServiceResponse();
  },
  props: {
    displayType: {
      default: "waterfall",
      type: String,
    },
    requestSize: {
      default: 5,
      type: Number,
    },
    serviceRequest: Function,
    showSeller: {
      default: true,
      type: Boolean,
    },
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

<style lang="scss" scoped>
</style>