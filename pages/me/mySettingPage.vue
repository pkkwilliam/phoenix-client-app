<template>
  <view>
    <view class="container">
      <view class="card">
        <my-profile-form />
      </view>
      <user-setting-menu />
    </view>
    <view class="cu-bar foot column-center-center-container">
      <logout-button />
    </view>
  </view>
</template>

<script>
import MyProfileForm from "../../components/me/myProfileForm.vue";
import UserSettingMenu from "../../components/menu/userSettingMenu.vue";
import LogoutButton from "../../components/navigationButton/me/logoutButton.vue";
export default {
  components: { UserSettingMenu, LogoutButton, MyProfileForm },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>