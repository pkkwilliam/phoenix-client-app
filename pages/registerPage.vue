<template>
  <view class="wrap">
    <view class="content">
      <view class="title">{{ appName }}註冊</view>
      <register />
    </view>
    <view class="buttom">
      <!-- <view class="hint">
        登錄代表同意
        <text class="link">超淘國際用戶協議、隱私政策，</text>
        並授權使用您的賬號信息（如暱稱、頭像）以便您統一管理
      </view> -->
    </view>
  </view>
</template>

<script>
import Register from "../components/register.vue";
export default {
  components: { Register },
  data() {
    return {};
  },
  computed: {
    appName() {
      return this.appLabel.appNameShort;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  font-size: 28rpx;
  .content {
    width: 600rpx;
    margin: 80rpx auto 0;

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
      padding: 20rpx 40rpx;
      font-size: 20rpx;
      color: $u-tips-color;

      .link {
        color: $u-type-warning;
      }
    }
  }
}
</style>
