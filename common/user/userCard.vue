<template>
  <view>
    <view class="row-center-container" @click="onClick">
      <view>
        <u-avatar size="108" :src="userAvatarImageUrl" />
      </view>
      <view class="column-container text-container">
        <text class="h3 black">{{ userNickname }}</text>
        <text class="h5 secondary">{{ userDescription }}</text>
      </view>
    </view>
    <view class="small-margin-top-spacer">
      <phone-number-verified-tag />
    </view>
  </view>
</template>

<script>
import PhoneNumberVerifiedTag from "../../components/tag/phoneNumberVerifiedTag.vue";
import { USER_PAGE } from "../../route/applicationRoute";
import UAvatar from "../../uview-ui/components/u-avatar/u-avatar.vue";

export default {
  components: { UAvatar, PhoneNumberVerifiedTag },
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
  methods: {
    onClick() {
      uni.navigateTo({ url: USER_PAGE(this.user).url });
    },
  },
  props: {
    user: Object,
  },
};
</script>

<style lang="scss" scoped>
.text-container {
  margin-left: 20rpx;
}
</style>