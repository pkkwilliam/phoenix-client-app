<template>
  <view class="container medium-margin-top-spacer">
    <view class="wrap">
      <view class="space-around-center-container u-tabs-box">
        <u-tabs-swiper
          ref="tabs"
          swiperWidth="750"
          :activeColor="styles.black"
          :barStyle="{ backgroundColor: styles.primary }"
          :current="current"
          :bar-height="16"
          :bg-color="styles.backgroundColor"
          :inactive-color="styles.secondary"
          :is-scroll="false"
          :list="list"
          @change="change"
        >
        </u-tabs-swiper>
        <scan-qr-code-button />
      </view>
      <view
        class="
          medium-margin-left-spacer medium-margin-right-spacer
          small-margin-top-spacer
        "
      >
        <search-bar :disabled="true" @click="onSearchBarClick" />
      </view>
      <swiper
        class="swiper-box small-margin-top-spacer"
        :current="swiperCurrent"
        @transition="transition"
        @animationfinish="animationfinish"
      >
        <swiper-item class="swiper-item">
          <u-empty text="程序員正在努力更新中" mode="list" />
        </swiper-item>
        <swiper-item class="swiper-item">
          <swipter-item-scroll-view-wrapper />
        </swiper-item>
        <swiper-item class="swiper-item">
          <scroll-view scroll-y style="height: 100%; width: 100%">
            <u-empty text="程序員正在努力更新中" mode="list" />
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import LandingPage from "../landingPage.vue";
import styles from "../../uview-ui/theme.js";
import SearchBar from "../../components/searchBar.vue";
import { SEARCH_ITEM_PAGE } from "../../route/applicationRoute";
import ScanQrCodeButton from "../../components/navigationButton/item/scanQrCodeButton.vue";
import ItemCategoryWaterfall from "../../components/item/itemCategoryWaterfall.vue";
import SwipterItemScrollViewWrapper from "./swipterItemScrollViewWrapper.vue";
import { processPushNotificationToken } from "../../util/notificationUtil";
export default {
  components: {
    LandingPage,
    SearchBar,
    ScanQrCodeButton,
    ItemCategoryWaterfall,
    SwipterItemScrollViewWrapper,
  },
  data() {
    return {
      list: [
        {
          name: "關注",
        },
        {
          name: "推荐",
        },
        {
          name: "包郵",
        },
      ],
      current: 1,
      swiperCurrent: 1,
      tabsHeight: 0,
      dx: 0,
      styles: styles,
    };
  },
  onLoad() {},
  computed: {},
  methods: {
    onSearchBarClick() {
      uni.navigateTo({ url: SEARCH_ITEM_PAGE().url });
    },
    reachBottom() {},
    // tab栏切换
    change(index) {
      this.swiperCurrent = index;
    },
    transition({ detail: { dx } }) {
      this.$refs.tabs.setDx(dx);
    },
    animationfinish({ detail: { current } }) {
      this.$refs.tabs.setFinishCurrent(current);
      this.swiperCurrent = current;
      this.current = current;
    },
  },
  mounted() {
    this.$appStateService.getUserProfile();
    processPushNotificationToken(this);
  },
  async onPullDownRefresh() {
    uni.stopPullDownRefresh();
  },
};
</script>

<style>
/* #ifndef H5 */
page {
  height: 100%;
}
/* #endif */
</style>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--window-top));
  width: 100%;
}
.swiper-box {
  flex: 1;
}
.swiper-item {
  height: 100%;
}
</style>
