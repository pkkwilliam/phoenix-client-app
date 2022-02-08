<template>
  <view>
    <!-- <landing-page v-if="PageCur == 'landingPage'"></landing-page> -->
    <landing-tabs-swiper-page v-if="PageCur == 'landingPage'" />
    <barter-request-page v-if="PageCur == 'barterRequestPage'" />
    <chat-page v-if="PageCur == 'chatPage'" />
    <my-page v-if="PageCur == 'me'"></my-page>

    <view class="box">
      <view class="cu-bar tabbar bg-white shadow foot">
        <view class="action" @click="NavChange" data-cur="landingPage">
          <view class="cuIcon-cu-image">
            <image
              v-if="PageCur == 'landingPage'"
              src="../../static/tabBar/home_cur.png"
            />
            <image
              v-if="PageCur != 'landingPage'"
              src="../../static/tabBar/home.png"
            />
          </view>
          <view :class="PageCur == 'landingPage' ? 'color_main' : 'text-gray'"
            >首頁</view
          >
        </view>

        <view class="action" @click="NavChange" data-cur="barterRequestPage">
          <view class="cuIcon-cu-image">
            <view
              class="cu-tag badge"
              v-if="barterRequestPagePendingCount > 0"
              >{{ barterRequestPagePendingCount }}</view
            >
            <image
              v-if="PageCur == 'barterRequestPage'"
              src="../../static/tabBar/barter_cur.png"
            />
            <image
              v-if="PageCur != 'barterRequestPage'"
              src="../../static/tabBar/barter.png"
            />
          </view>
          <view
            :class="PageCur == 'barterRequestPage' ? 'color_main' : 'text-gray'"
          >
            換物
          </view>
        </view>

        <view
          @click="NavChange"
          class="action text-gray"
          data-cur="createItemPage"
        >
          <image
            class="logo_btn"
            mode="widthFix"
            src="../../static/tabBar/create_item_button.png"
          />
        </view>
        <view class="action" @click="NavChange" data-cur="chatPage">
          <view class="cuIcon-cu-image">
            <view class="cu-tag badge" v-if="messagePagePendingCount > 0">{{
              messagePagePendingCount
            }}</view>
            <image
              v-if="PageCur == 'chatPage'"
              src="../../static/tabBar/chat_cur.png"
            />
            <image
              v-if="PageCur != 'chatPage'"
              src="../../static/tabBar/chat.png"
            />
          </view>
          <view :class="PageCur == 'chatPage' ? 'color_main' : 'text-gray'">
            消息
          </view>
        </view>

        <view class="action" @click="NavChange" data-cur="me">
          <view class="cuIcon-cu-image">
            <!-- <view class="cu-tag badge">红点</view> -->
            <image
              v-if="PageCur == 'me'"
              src="../../static/tabBar/me_cur.png"
            />
            <image v-if="PageCur != 'me'" src="../../static/tabBar/me.png" />
          </view>
          <view :class="PageCur == 'me' ? 'color_main' : 'text-gray'">
            我的
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import index from "./inedx.vue"; //首页
import cases from "./main.vue"; //宅家学
import createItemPage from "../createItemPage.vue";
import news from "./news.vue"; //资讯
import me from "./me.vue"; //个人中心
import LoginPage from "../loginPage.vue";
import { CREATE_ITEM_TAB, LOGIN_PAGE } from "../../route/applicationRoute";
import MyPage from "../me/myPage.vue";
import Vue from "vue";
import LandingTabsSwiperPage from "../landing/landingTabsSwiperPage.vue";
import ChatPage from "../chat/chatPage.vue";
import BarterRequestPage from "../barterRequest/barterRequestPage.vue";
import { startWebsocket } from "../../util/chatUtil";

export const TabbarEventBus = new Vue();

export default {
  components: {
    index,
    cases,
    createItemPage,
    news,
    me,
    LoginPage,
    MyPage,
    LandingTabsSwiperPage,
    ChatPage,
    BarterRequestPage,
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
  computed: {
    barterRequestPagePendingCount() {
      const { barterRequestReceiverPendingCount } =
        this.$store.state.statusSummary.content;
      return barterRequestReceiverPendingCount;
    },
    messagePagePendingCount() {
      const { unreceivedCount } = this.$store.state.chat;
      return unreceivedCount;
    },
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
  async mounted() {
    await this.$appStateService.getUserProfile();
    await this.$appStateService.getStatusSummary();
    startWebsocket(this.execute, this.$store);
  },
  methods: {
    NavChange: function (e) {
      const requireAuthTab = [
        "barterRequestPage",
        "chatPage",
        "createItemPage",
        "me",
      ];
      const targetTab = e.currentTarget.dataset.cur;
      if (requireAuthTab.includes(targetTab) && !this.isLogin()) {
        uni.navigateTo({ url: LOGIN_PAGE().url });
      } else if (targetTab === "createItemPage") {
        uni.navigateTo({
          animationType: "slide-in-bottom",
          animationDuration: 200,
          url: CREATE_ITEM_TAB().url,
        });
      } else {
        this.PageCur = targetTab;
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
  onReachBottom() {},
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
