<template>
  <view class="row-center-container">
    <u-avatar size="47" :src="userAvatarImageUrl" />
    <text class="h6 secondary nickname-text">{{ userNickname }}</text>
    <u-icon
      class="icon"
      :color="arrowIconColor"
      v-if="showRightArrowIcon"
      name="arrow-right"
    />
  </view>
</template>

<script>
import uAvatar from "../uview-ui/components/u-avatar/u-avatar.vue";
import styles from "../uview-ui/theme.scss";
export default {
  components: { uAvatar },
  computed: {
    arrowIconColor() {
      return styles.secondary;
    },
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
  mounted() {},
  props: {
    showRightArrowIcon: {
      default: true,
      type: Boolean,
    },
    user: Object,
  },
};
</script>

<style lang="scss" scoped>
.icon {
  margin-left: 15rpx;
}
.nickname-text {
  margin-left: 15rpx;
}
</style>