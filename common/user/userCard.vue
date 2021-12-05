<template>
  <view class="personal-info-container">
    <view>
      <u-avatar size="108" :src="userAvatarImageUrl" />
    </view>
    <view class="text-container">
      <text class="nickname">{{ userNickname }}</text>
      <text class="description">{{ userDescription }}</text>
    </view>
  </view>
</template>

<script>
import UAvatar from "../../uview-ui/components/u-avatar/u-avatar.vue";

export default {
  components: { UAvatar },
  computed: {
    userAvatarImageUrl() {
      const { user } = this;
      return user.imageUrl
        ? user.imageUrl
        : "https://www.pngitem.com/pimgs/m/10-102802_bear-icon-png-bear-emoticon-hd-png-download.png";
    },
    userDescription() {
      return this.user.description ?? "此人很多小祕密";
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
.personal-info-container {
  align-items: center;
  display: flex;
  flex-direction: row;
}
.text-container {
  color: $u-phoenix-font-dark;
  display: flex;
  flex-direction: column;
  margin-left: 20rpx;
  .nickname {
    font-size: 38rpx;
    font-weight: 600;
  }
  .description {
    font-size: 28rpx;
  }
}
</style>