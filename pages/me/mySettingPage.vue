<template>
  <view>
    <view class="container"><user-setting-menu /></view>
    <view class="cu-bar foot column-center-center-container">
      <logout-button />
    </view>
  </view>
</template>

<script>
import UserSettingMenu from "../../components/menu/userSettingMenu.vue";
import LogoutButton from "../../components/navigationButton/me/logoutButton.vue";
export default {
  components: { UserSettingMenu, LogoutButton },
  computed: {},
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 20rpx;
  padding-right: 20rpx;
}
</style>