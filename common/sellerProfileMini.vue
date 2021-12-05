<template>
  <view class="container">
    <u-avatar size="47" :src="userAvatarImageUrl" />
    <text class="nickname-text">{{ userNickname }}</text>
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
.container {
  align-items: center;
  display: flex;
  flex-direction: row;
}
.nickname-text {
  color: $u-phoenix-light-grey;
  font-size: 22rpx;
  font-weight: 300;
  margin-left: 15rpx;
}
</style>