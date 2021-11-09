<template>
  <view class="container">
    <view class="avatarContainer">
      <u-avatar :size="175" :src="avatarSrc" />
    </view>
    <view class="customerInfoContainer">
      <text class="usernameText">{{ companyCustomerId }}</text>
      <text>{{ customerName }}</text>
      <text>{{ contactNumber }}</text>
      <view class="updateWechatInfoButtonContainer">
        <wx-request-user-profile-button />
      </view>
    </view>
    <view> </view>
  </view>
</template>

<script>
import uAvatar from "../../uview-ui/components/u-avatar/u-avatar.vue";
import WxRequestUserProfileButton from "./wxRequestUserProfileButton.vue";
export default {
  components: { uAvatar, WxRequestUserProfileButton },
  computed: {
    avatarSrc() {
      return this.$store.state.userProfile.profile.imageUrl;
    },
    companyCustomerId() {
      return "JYH-" + this.$store.state.userProfile.profile.companyCustomerId;
    },
    contactNumber() {
      const { countryCode, smsNumber } = this.$store.state.userProfile.profile;
      return `(+${countryCode}) ${smsNumber}`;
    },
    customerName() {
      return this.$store.state.userProfile.profile.name ?? "";
    },
  },
  mounted() {
    this.$appStateService.getUserProfile();
  },
};
</script>

<style scoped lang="scss">
.container {
  align-items: center;
  background: linear-gradient(45deg, #413f93, #835ee2);
  display: flex;
  flex-direction: row;
  padding: 80rpx;
  padding-right: 0rpx;
  .avatarContainer {
    display: flex;
    flex-direction: row;
  }
  .customerInfoContainer {
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 32rpx;
    margin-left: 50rpx;
    .usernameText {
      font-size: 38rpx;
      font-weight: 400;
    }
    .updateWechatInfoButtonContainer {
      margin-top: 20rpx;
    }
  }
}
</style>