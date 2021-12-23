<template>
  <view class="wrap">
    <view class="content">
      <view class="title">登錄{{ appName }}</view>
      <view>
        <login />
      </view>
      <view class="alternative">
        <view class="password" @click="onClickForgetPassword">忘記密碼</view>
        <view class="password" @click="onClickNavigateToRegister">註冊</view>
      </view>
    </view>
    <view class="buttom">
      <view class="hint">
        登錄代表同意
        <text class="link">{{ appName }}用戶協議、隱私政策，</text>
        並授權使用您的賬號信息（如暱稱、頭像、收穫地址）以便您統一管理
      </view>
    </view>
  </view>
</template>

<script>
import Login from "../components/login.vue";
import { FORGOT_PASSWORD_PAGE, REGISTER_PAGE } from "../route/applicationRoute";
export default {
  components: { Login },
  data() {
    return {
      tel: "",
    };
  },
  computed: {
    appName() {
      return this.appLabel.appNameShort;
    },
    inputStyle() {
      let style = {};
      if (this.tel) {
        style.color = "#fff";
        style.backgroundColor = this.$u.color["warning"];
      }
      return style;
    },
  },
  methods: {
    onClickForgetPassword() {
      uni.navigateTo({
        url: FORGOT_PASSWORD_PAGE().url,
      });
    },
    onClickNavigateToRegister() {
      uni.navigateTo({
        url: REGISTER_PAGE().url,
      });
    },
    submit() {
      if (this.$u.test.mobile(this.tel)) {
        this.$u.route({
          url: "pages/template/login/code",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.appUserAlterText {
  color: red;
  font-size: 12px;
}
.wrap {
  font-size: 28rpx;
  width: 600rpx;
  margin: 80rpx auto 0;
  .content {
    .title {
      text-align: left;
      font-size: 60rpx;
      font-weight: 500;
      margin-bottom: 20rpx;
    }
    input {
      text-align: left;
      margin-bottom: 10rpx;
      padding-bottom: 6rpx;
    }
    .tips {
      color: $u-type-info;
      margin-bottom: 60rpx;
      margin-top: 8rpx;
    }
    .getCaptcha {
      background-color: rgb(253, 243, 208);
      color: $u-tips-color;
      border: none;
      font-size: 30rpx;
      padding: 12rpx 0;

      &::after {
        border: none;
      }
    }
    .alternative {
      color: $u-tips-color;
      display: flex;
      justify-content: space-between;
      margin-top: 30rpx;
    }
  }
  .buttom {
    .loginType {
      display: flex;
      padding: 350rpx 150rpx 150rpx 150rpx;
      justify-content: space-between;

      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $u-content-color;
        font-size: 28rpx;
      }
    }
    .hint {
      font-size: 20rpx;
      color: $u-tips-color;
      .link {
        color: $u-type-warning;
      }
    }
  }
}
</style>
