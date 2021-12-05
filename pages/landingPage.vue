<!-- 首页 -->
<template>
  <view class="landing-page-container">
    <search-bar />
    <waterfall-item-list :serviceRequest="getRecentCreatedItem" />
    <u-button @click="onClickPay" type="primary">PP</u-button>
  </view>
</template>

<script>
import WaterfallItemList from "../common/waterfallItemList.vue";
import SearchBar from "../components/searchBar.vue";
import { testIOSMpay } from "../payment/mpay";
import { GET_RECENT_CREATED_ITEM } from "../service/service";
export default {
  components: {
    SearchBar,
    WaterfallItemList,
  },
  data() {
    return {};
  },
  watch: {},
  methods: {
    getRecentCreatedItem(pageRequest, pageSize) {
      return GET_RECENT_CREATED_ITEM(pageRequest, pageSize);
    },
    onClickPay() {
      testIOSMpay();
    },
  },
  mounted() {
    this.$appStateService.getAddress();
    this.$appStateService.getUserProfile();
    const { clientid = "" } = plus.push.getClientInfo() || {}; // 获取cid
    console.log("client id", clientid);
  },
};
</script>
<style lang="scss" scoped>
.landing-page-container {
  padding-left: 20rpx;
  padding-right: 20rpx;
}
</style>
