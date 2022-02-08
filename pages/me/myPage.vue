<template>
  <view
    class="container large-margin-top-spacer sticky-bottom-container-padding"
  >
    <view class="flex-end-center-container">
      <switch-business-account class="medium-margin-right-spacer" />
      <my-setting-button />
    </view>
    <user-card :user="userProfile" />
    <view class="my-order card">
      <view class="space-around-center-container">
        <my-saved-item-button />
        <my-viewed-item-button />
        <workbench-button />
      </view>
      <view class="line">
        <application-line-breaker />
      </view>
      <view class="medium-margin-top-spacer">
        <view class="space-between-center-container">
          <text class="h3 black bold">我的交易</text>
        </view>
        <view class="space-around-center-container medium-margin-top-spacer">
          <my-item-list-button />
          <my-barter-order-button />
          <my-order-button />
          <my-sold-button />
        </view>
      </view>
      <shipment-pending-alert-rows />
    </view>
    <view class="user-menu card">
      <user-menu />
    </view>
  </view>
</template>

<script>
import userCard from "../../common/user/userCard.vue";
import ApplicationLineBreaker from "../../components/applicationLineBreaker.vue";
import ShipmentPendingAlertRows from "../../components/myOrder/shipmentPendingAlert/shipmentPendingAlertRows.vue";
import UserMenu from "../../components/menu/userMenu.vue";
import MySavedItemButton from "../../components/navigationButton/mySaveItemButton.vue";
import MyViewedItemButton from "../../components/navigationButton/myViewItemButton.vue";
import WorkbenchButton from "../../components/navigationButton/workbenchButton.vue";
import MyItemListButton from "../../components/navigationButton/myItemListButton.vue";
import MySoldButton from "../../components/navigationButton/mySoldButton.vue";
import MyOrderButton from "../../components/navigationButton/myOrderButton.vue";
import MySettingButton from "../../components/navigationButton/me/mySettingButton.vue";
import SwitchBusinessAccount from "../../components/navigationButton/business/switchBusinessAccount.vue";
import MyBarterOrderButton from "../../components/navigationButton/myBarterOrderButton.vue";

export default {
  components: {
    userCard,
    UserMenu,
    ApplicationLineBreaker,
    MyViewedItemButton,
    MySavedItemButton,
    WorkbenchButton,
    ShipmentPendingAlertRows,
    MyItemListButton,
    MySoldButton,
    MyOrderButton,
    MySettingButton,
    SwitchBusinessAccount,
    MyBarterOrderButton,
  },
  computed: {
    userProfile() {
      return this.$store.state.userProfile.profile;
    },
  },
  mounted() {
    // this.$appStateService.getBuyerPendingOrder();
    // this.$appStateService.getSellerPendingOrder();
  },
  refresh() {
    // this.$appStateService.getBuyerPendingOrder({ force: true });
    // this.$appStateService.getSellerPendingOrder({ force: true });
  },
};
</script>

<style lang="scss" scoped>
.my-order {
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
.my-page-container {
  padding-bottom: 125rpx;
}
.user-menu {
  margin-top: 20rpx;
  padding-left: 35rpx;
  padding-right: 35rpx;
}
</style>