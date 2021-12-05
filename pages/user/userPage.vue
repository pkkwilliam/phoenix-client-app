<template>
  <view class="container">
    <user-card :user="userProfile" />
    <view class="my-order">
      <view class="space-around-container">
        <user-saved-item-button />
        <user-viewed-item-button />
        <workbench-button />
      </view>
      <view class="line">
        <application-line-breaker />
      </view>
      <view class="space-between-container">
        <user-post-button />
        <user-sold-button />
        <user-order-button />
      </view>
      <shipment-pending-alert-rows />
    </view>
    <view class="user-menu">
      <user-menu />
    </view>
  </view>
</template>

<script>
import userCard from "../../common/user/userCard.vue";
import ApplicationLineBreaker from "../../components/applicationLineBreaker.vue";
import ShipmentPendingAlertRows from "../../components/myOrder/shipmentPendingAlert/shipmentPendingAlertRows.vue";
import UserMenu from "../../components/user/userMenu.vue";
import UserSavedItemButton from "../../components/navigationButton/userSaveItemButton.vue";
import UserViewedItemButton from "../../components/navigationButton/userViewItemButton.vue";
import WorkbenchButton from "../../components/navigationButton/workbenchButton.vue";
import UserPostButton from "../../components/navigationButton/userPostButton.vue";
import UserSoldButton from "../../components/navigationButton/userSoldButton.vue";
import UserOrderButton from "../../components/navigationButton/userOrderButton.vue";

export default {
  components: {
    userCard,
    UserMenu,
    ApplicationLineBreaker,
    UserViewedItemButton,
    UserSavedItemButton,
    WorkbenchButton,
    ShipmentPendingAlertRows,
    UserPostButton,
    UserSoldButton,
    UserOrderButton,
    WorkbenchButton,
  },
  computed: {
    userProfile() {
      return this.$store.state.userProfile.profile;
    },
  },
  methods: {},
  mounted() {
    this.$appStateService.getBuyerPendingOrder();
    this.$appStateService.getSellerPendingOrder();
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 20rpx;
  padding-right: 20rpx;
}
.my-order {
  background-color: #ffffff;
  border-radius: 8px;
  margin-top: 20rpx;
  padding: 35rpx;
  .line {
    margin-top: 20rpx;
  }
}
.my-order-tab {
  margin-top: 20rpx;
}
.my-order-tab-label-container {
  margin-top: 20rpx;
  .text {
    color: $u-phoenix-light-grey;
    font-size: 26rpx;
  }
}
.user-menu {
  background-color: #ffffff;
  border-radius: 8px;
  margin-top: 20rpx;
  padding-left: 35rpx;
  padding-right: 35rpx;
}
</style>