<template>
  <view class="personal-info-container">
    <view class="avatar-container">
      <u-avatar size="88" :src="userAvatarImageUrl" />
    </view>
    <view class="text-container">
      <text class="nickname">{{ userNickname }}</text>
      <text class="post-location">發佈於澳門</text>
    </view>
  </view>
</template>

<script>
import uAvatar from "../uview-ui/components/u-avatar/u-avatar.vue";
export default {
  components: { uAvatar },
  computed: {
    userAvatarImageUrl() {
      const { user } = this;
      return user.imageUrl
        ? user.imageUrl
        : "https://www.pngitem.com/pimgs/m/10-102802_bear-icon-png-bear-emoticon-hd-png-download.png";
    },
    userNickname() {
      const { user } = this;
      return user.nickname ? user.nickname : "小棕熊";
    },
  },
  props: {
    user: Object,
  },
};
</script>

<style lang="scss" scoped>
.avatar-container {
  margin-right: 20rpx;
}
.personal-info-container {
  align-items: center;
  display: flex;
  flex-direction: row;
}
.text-container {
  display: flex;
  flex-direction: column;
  .nickname {
    color: $u-phoenix-font-dark;
    font-size: 32rpx;
    font-weight: 600;
  }
  .post-location {
    color: $u-phoenix-light-grey;
    font-size: 22rpx;
  }
}
</style>