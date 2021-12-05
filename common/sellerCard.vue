<template>
  <view>
    <view class="personal-info-container">
      <view class="text-container">
        <text class="nickname">{{ userNickname }}</text>
        <text class="description">{{ userDescription }}</text>
      </view>
      <view>
        <u-avatar size="108" :src="userAvatarImageUrl" />
      </view>
    </view>
    <u-tag text="電話已認證" type="success" />
  </view>
</template>

<script>
import uAvatar from "../uview-ui/components/u-avatar/u-avatar.vue";
import UTag from "../uview-ui/components/u-tag/u-tag.vue";
export default {
  components: { uAvatar, UTag },
  computed: {
    userAvatarImageUrl() {
      const { user } = this;
      return user.imageUrl
        ? user.imageUrl
        : "https://www.pngitem.com/pimgs/m/10-102802_bear-icon-png-bear-emoticon-hd-png-download.png";
    },
    userDescription() {
      return this.user.description;
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
  justify-content: space-between;
}
.text-container {
  color: $u-phoenix-font-dark;
  display: flex;
  flex-direction: column;
  .nickname {
    font-size: 38rpx;
    font-weight: 600;
  }
  .description {
    font-size: 28rpx;
  }
}
</style>