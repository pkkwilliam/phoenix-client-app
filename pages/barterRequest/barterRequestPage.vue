<template>
  <view class="wrap">
    <cu-custom bgColor="bg-gradual-blue" :isBack="true">
      <block slot="backText">返回</block>
      <block slot="content">以物換物</block>
    </cu-custom>
    <u-tabs-swiper
      ref="tabs"
      :list="swipterItems"
      :current="current"
      @change="tabsChange"
      :is-scroll="false"
      swiperWidth="750"
    >
    </u-tabs-swiper>
    <swiper
      class="swiper-box"
      :current="swiperCurrent"
      @transition="transition"
      @animationfinish="animationfinish"
    >
      <swiper-item
        class="swiper-item"
        v-for="(item, index) in swipterItems"
        :key="index"
      >
        <scroll-view
          scroll-y
          style="height: 100%; width: 100%"
          @scrolltolower="onreachBottom"
        >
          <view class="container">
            <pagination-item-display
              :ref="item.refName"
              :serviceRequest="item.serviceRequest"
            >
              <template v-slot:content="{ data }">
                <view class="card medium-margin-top-spacer">
                  <barter-request-item :barterRequest="data" />
                </view>
              </template>
            </pagination-item-display>
          </view>
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import BarterRequestItem from "../../common/barterRequest/barterRequestItem.vue";
import PaginationItemDisplay from "../../common/itemDisplayList/paginationItemDisplay.vue";
import barterRequestOffererList from "../../components/barterRequest/barterRequestOffererList.vue";
import BarterRequestReceiverList from "../../components/barterRequest/barterRequestReceiverList.vue";
import {
  BARTER_REQUEST_APPROVED,
  BARTER_REQUEST_CANCELED,
  BARTER_REQUEST_PENDING,
  BARTER_REQUEST_REJECTED,
} from "../../enum/barterRequestStatus";
import {
  GET_BARTER_REQUEST_BY_BARTER_REQUEST_STATUS,
  GET_BARTER_REQUEST_OFFERER,
  GET_BARTER_REQUEST_RECEIVER,
} from "../../service/service";
export default {
  components: {
    barterRequestOffererList,
    BarterRequestReceiverList,
    PaginationItemDisplay,
    BarterRequestItem,
  },
  computed: {
    statusSummaryDirty() {
      return this.$store.state.statusSummary.dirty;
    },
    swipterItems() {
      return [
        {
          count:
            this.$store.state.statusSummary.content
              .barterRequestReceiverPendingCount,
          name: "待處理",
          refName: "barterRequestSwiperRef1",
          serviceRequest: (pageRequest, pageSize) =>
            GET_BARTER_REQUEST_RECEIVER(
              [BARTER_REQUEST_PENDING.key],
              pageRequest,
              pageSize
            ),
        },
        {
          name: "已接受",
          refName: "barterRequestSwiperRef2",
          serviceRequest: (pageRequest, pageSize) =>
            GET_BARTER_REQUEST_BY_BARTER_REQUEST_STATUS(
              BARTER_REQUEST_APPROVED.key,
              pageRequest,
              pageSize
            ),
        },
        {
          count:
            this.$store.state.statusSummary.content
              .barterRequestOffererPendingCount,
          name: "待回覆",
          refName: "barterRequestSwiperRef3",
          serviceRequest: (pageRequest, pageSize) =>
            GET_BARTER_REQUEST_OFFERER(
              [BARTER_REQUEST_PENDING.key],
              pageRequest,
              pageSize
            ),
        },
        {
          name: "已取消",
          refName: "barterRequestSwiperRef4",
          serviceRequest: (pageRequest, pageSize) =>
            GET_BARTER_REQUEST_BY_BARTER_REQUEST_STATUS(
              BARTER_REQUEST_CANCELED.key,
              pageRequest,
              pageSize
            ),
        },
        {
          name: "已婉拒",
          refName: "barterRequestSwiperRef5",
          serviceRequest: (pageRequest, pageSize) =>
            GET_BARTER_REQUEST_BY_BARTER_REQUEST_STATUS(
              BARTER_REQUEST_REJECTED.key,
              pageRequest,
              pageSize
            ),
        },
      ];
    },
  },
  data() {
    return {
      current: 0, // tabs组件的current值，表示当前活动的tab选项
      swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
      dx: 0,
    };
  },
  methods: {
    getBarterRequestServiceByBarterRequestStatus(
      barterRequestStatus,
      pageRequest,
      pageSize
    ) {
      return GET_BARTER_REQUEST_BY_BARTER_REQUEST_STATUS(
        barterRequestStatus,
        pageRequest,
        pageSize
      );
    },
    getOffererBarterRequest(pageRequest, pageSize) {
      return GET_BARTER_REQUEST_RECEIVER(
        [BARTER_REQUEST_PENDING.key],
        pageRequest,
        pageSize
      );
    },
    tabsChange(index) {
      this.swiperCurrent = index;
    },
    // swiper-item左右移动，通知tabs的滑块跟随移动
    transition({ detail: { dx } }) {
      this.$refs.tabs.setDx(dx);
    },
    // 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
    // swiper滑动结束，分别设置tabs和swiper的状态
    animationfinish({ detail: { current } }) {
      this.$refs.tabs.setFinishCurrent(current);
      this.swiperCurrent = current;
      this.current = current;
    },
    onBarterRequestUpdate() {
      console.log("update");
    },
    onreachBottom() {
      this.$refs[
        this.swipterItems[this.current].refName
      ][0].getServiceResponse();
    },
  },
  mounted() {
    this.$appStateService.getStatusSummary({ force: true });
  },

  watch: {
    barterRequestSummaryDirty(newValue, oldValue) {
      console.log("barter request updated");
      if (newValue) {
        this.swipterItems.forEach((item) => {
          // this is so weird, not yet understand why it is nested in an array
          this.$refs[item.refName][0].resetPagination();
          this.$refs[item.refName][0].getServiceResponse();
        });
      }
      this.$appStateService.getStatusSummary({ force: true });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--window-top));
  width: 100%;
}
.swiper-box {
  flex: 1;
  padding-bottom: 100rpx;
}
.swiper-item {
  height: 100%;
}
</style>
