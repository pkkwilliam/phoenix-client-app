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
        <swiper-item class="swiper-item"> </swiper-item>
        <swiper-item class="swiper-item">
          <swipter-item-scroll-view-wrapper />
        </swiper-item>
        <swiper-item class="swiper-item">
          <scroll-view scroll-y style="height: 100%; width: 100%">
            <view class="page-box"> </view>
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
.order {
  width: 710rpx;
  background-color: #ffffff;
  margin: 20rpx auto;
  border-radius: 20rpx;
  box-sizing: border-box;
  padding: 20rpx;
  font-size: 28rpx;
  .top {
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      .store {
        margin: 0 10rpx;
        font-size: 32rpx;
        font-weight: bold;
      }
    }
    .right {
      color: $u-type-warning-dark;
    }
  }
  .item {
    display: flex;
    margin: 20rpx 0 0;
    .left {
      margin-right: 20rpx;
      image {
        width: 200rpx;
        height: 200rpx;
        border-radius: 10rpx;
      }
    }
    .content {
      .title {
        font-size: 28rpx;
        line-height: 50rpx;
      }
      .type {
        margin: 10rpx 0;
        font-size: 24rpx;
        color: $u-tips-color;
      }
      .delivery-time {
        color: #e5d001;
        font-size: 24rpx;
      }
    }
    .right {
      margin-left: 10rpx;
      padding-top: 20rpx;
      text-align: right;
      .decimal {
        font-size: 24rpx;
        margin-top: 4rpx;
      }
      .number {
        color: $u-tips-color;
        font-size: 24rpx;
      }
    }
  }
  .total {
    margin-top: 20rpx;
    text-align: right;
    font-size: 24rpx;
    .total-price {
      font-size: 32rpx;
    }
  }
  .bottom {
    display: flex;
    margin-top: 40rpx;
    padding: 0 10rpx;
    justify-content: space-between;
    align-items: center;
    .btn {
      line-height: 52rpx;
      width: 160rpx;
      border-radius: 26rpx;
      border: 2rpx solid $u-border-color;
      font-size: 26rpx;
      text-align: center;
      color: $u-type-info-dark;
    }
    .evaluate {
      color: $u-type-warning-dark;
      border-color: $u-type-warning-dark;
    }
  }
}
.centre {
  text-align: center;
  margin: 200rpx auto;
  font-size: 32rpx;
  image {
    width: 164rpx;
    height: 164rpx;
    border-radius: 50%;
    margin-bottom: 20rpx;
  }
  .tips {
    font-size: 24rpx;
    color: #999999;
    margin-top: 20rpx;
  }
  .btn {
    margin: 80rpx auto;
    width: 200rpx;
    border-radius: 32rpx;
    line-height: 64rpx;
    color: #ffffff;
    font-size: 26rpx;
    background: linear-gradient(
      270deg,
      rgba(249, 116, 90, 1) 0%,
      rgba(255, 158, 1, 1) 100%
    );
  }
}
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
