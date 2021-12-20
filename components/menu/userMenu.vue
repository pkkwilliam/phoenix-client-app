<template>
  <view>
    <view
      v-for="(menuItem, index) in menuItems"
      :key="index"
      @click="onClick(menuItem)"
    >
      <view class="row-center-container button">
        <u-icon
          custom-prefix="phoenix-custom-icon"
          :name="menuItem.iconName"
          size="48"
        />
        <text class="label">{{ menuItem.label }}</text>
      </view>
      <application-line-breaker v-if="index < menuItems.length - 1" />
    </view>
  </view>
</template>

<script>
import {
  ADDRESS_SELECTION_PAGE,
  CHANGE_PASSWORD_PAGE,
} from "../../route/applicationRoute";
import ApplicationLineBreaker from "../applicationLineBreaker.vue";

export default {
  components: {
    ApplicationLineBreaker,
  },
  computed: {
    menuItems() {
      return [
        {
          iconName: "location",
          label: "收貨地址",
          toPage: ADDRESS_SELECTION_PAGE,
        },
        { iconName: "lock", label: "更改密碼", toPage: CHANGE_PASSWORD_PAGE },
      ];
    },
  },
  methods: {
    onClick(menuItem) {
      uni.navigateTo({ url: menuItem.toPage().url });
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding-bottom: 35rpx;
  padding-top: 35rpx;
  .label {
    margin-left: 18rpx;
  }
}
</style>