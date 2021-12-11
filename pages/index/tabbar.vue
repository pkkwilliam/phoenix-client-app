<template>
  <view>
    <landing-page v-if="PageCur == 'landingPage'"></landing-page>
    <search v-if="PageCur == 'search'"></search>
    <cases v-if="PageCur == 'cases'"></cases>
    <create-item-page v-if="PageCur == 'createItemPage' && !isUserLogin" />
    <login-page v-else-if="PageCur == 'createItemPage'" />
    <news v-if="PageCur == 'news'"></news>
    <my-page v-if="PageCur == 'me'"></my-page>

    <view class="box">
      <view class="cu-bar tabbar bg-white shadow foot">
        <view class="action" @click="NavChange" data-cur="landingPage">
          <view class="cuIcon-cu-image">
            <image
              v-if="PageCur == 'landingPage'"
              src="../../static/tabBar/index_cur.png"
            ></image>
            <image
              v-if="PageCur != 'landingPage'"
              src="../../static/tabBar/index.png"
            ></image>
          </view>
          <view :class="PageCur == 'landingPage' ? 'color_main' : 'text-gray'"
            >首頁</view
          >
        </view>

        <view class="action" @click="NavChange" data-cur="search">
          <view class="cuIcon-cu-image">
            <image
              v-if="PageCur == 'search'"
              src="../../static/tabBar/shop_cur.png"
            ></image>
            <image
              v-if="PageCur != 'search'"
              src="../../static/tabBar/shop.png"
            ></image>
          </view>
          <view :class="PageCur == 'search' ? 'color_main' : 'text-gray'"
            >技术栈</view
          >
        </view>

        <view
          @click="NavChange"
          class="action text-gray add-action"
          data-cur="createItemPage"
        >
          <image
            class="logo_btn"
            mode="widthFix"
            src="../../static/tabBar/create_item_button.png"
          ></image>
          <view
            :class="PageCur == 'createItemPage' ? 'color_main' : 'text-gray'"
            >出手物品</view
          >
        </view>

        <view class="action" @click="NavChange" data-cur="news">
          <view class="cuIcon-cu-image">
            <view class="cu-tag badge">{{ message }}</view>
            <image
              v-if="PageCur == 'news'"
              src="../../static/tabBar/order_cur.png"
            ></image>
            <image
              v-if="PageCur != 'news'"
              src="../../static/tabBar/order.png"
            ></image>
          </view>
          <view :class="PageCur == 'news' ? 'color_main' : 'text-gray'"
            >文章资讯</view
          >
        </view>

        <view class="action" @click="NavChange" data-cur="me">
          <view class="cuIcon-cu-image">
            <view class="cu-tag badge"><!-- 红点 --></view>
            <image
              v-if="PageCur == 'me'"
              src="../../static/tabBar/me_cur.png"
            ></image>
            <image
              v-if="PageCur != 'me'"
              src="../../static/tabBar/me.png"
            ></image>
          </view>
          <view :class="PageCur == 'me' ? 'color_main' : 'text-gray'"
            >我的</view
          >
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import index from "./inedx.vue"; //首页
import search from "./search.vue"; //技术视频
import cases from "./main.vue"; //宅家学
import createItemPage from "../createItemPage.vue";
import news from "./news.vue"; //资讯
import me from "./me.vue"; //个人中心
import LoginPage from "../loginPage.vue";
import LandingPage from "../landingPage.vue";
import { CREATE_ITEM_TAB, LOGIN_PAGE } from "../../route/applicationRoute";
import MyPage from "../me/myPage.vue";
import Vue from "vue";

export const TabbarEventBus = new Vue();

export default {
  components: {
    index,
    search,
    cases,
    createItemPage,
    news,
    me,
    LandingPage,
    LoginPage,
    MyPage,
  },
  data() {
    return {
      PageCur: "landingPage",
      message: "2",
      openId: "",
      access_token: "",
      tip: "我是提示",
      duration: 1,
    };
  },
  created() {},
  // 分享小程序
  onShareAppMessage(res) {
    return {
      title: "学技术·做软件·找案例·寻合作，快来「7he丶Kevin」吧！",
    };
  },
  onLoad() {
    //获取退出时的tabbar记录
    // uni.getStorage({
    // 	key: 'PageCur',
    // 	success: function(res) {
    // 		that.PageCur = res.data;
    // 	},
    // 	fail: function(res) {}
    // });
  },
  methods: {
    NavChange: function (e) {
      const requireAuthTab = ["createItemPage", "me"];
      const targetTab = e.currentTarget.dataset.cur;
      if (requireAuthTab.includes(targetTab) && !this.isLogin()) {
        uni.navigateTo({ url: LOGIN_PAGE().url });
      } else {
        this.PageCur = targetTab;
        if (this.PageCur == "index") {
          // document.title = '首页'
        } else if (this.PageCur == "component") {
          // document.title = '积分商城'
        } else if (this.PageCur == "createItemPage") {
          uni.navigateTo({ url: CREATE_ITEM_TAB().url });
          // uni.navigateTo({ url: page().url });
          // document.title = '宅家学'
        } else if (this.PageCur == "news") {
          // document.title = '文章资讯'
        } else if (this.PageCur == "me") {
          // document.title = '个人中心'
        }
      }
    },
    navigateToAuthenticatedPage(page) {
      if (this.isLogin()) {
        uni.navigateTo({ url: page().url });
      } else {
        uni.navigateTo({ url: LOGIN_PAGE().url });
      }
    },
    navigateToAuthenticatedTab(tab) {
      if (!this.isLogin()) {
        uni.navigateTo({ url: LOGIN_PAGE().url });
      }
    },
    validateAuthStatusAndNavigate() {
      if (!this.isLogin()) {
        uni.navigateTo({ url: LOGIN_PAGE().url });
      }
    },
    NavChange_xd: function () {
      uni.navigateTo({
        url: "publish",
        animationType: "slide-in-bottom",
        animationDuration: 200,
      });
    },
  },
  onReachBottom() {
    console.log("tabbar reached bottom");
    TabbarEventBus.$emit("onReachBottom");
  },
};
</script>

<style lang="scss">
.box {
  margin: 20upx 0;
}
.box view.cu-bar {
  margin-top: 20upx;
}

.logo_btn {
  width: 38 * 2rpx;
  height: 38 * 2rpx;
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  top: -40rpx;
  left: 0rpx;
  right: 0;
  margin: auto;
  padding: 0;
}
.cu-bar.tabbar .action.add-action {
  padding-top: 56rpx !important;
}
</style>
