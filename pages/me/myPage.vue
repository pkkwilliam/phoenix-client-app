<template>
  <view class="container large-margin-top-spacer">
    <view class="align-end-container">
      <my-setting-button />
    </view>
    <user-card :user="userProfile" />
    <view class="my-order">
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
          <money-made />
        </view>
        <view class="space-around-center-container medium-margin-top-spacer">
          <my-item-list-button />
          <my-sold-button />
          <my-order-button />
        </view>
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
import UserMenu from "../../components/menu/userMenu.vue";
import MySavedItemButton from "../../components/navigationButton/mySaveItemButton.vue";
import MyViewedItemButton from "../../components/navigationButton/myViewItemButton.vue";
import WorkbenchButton from "../../components/navigationButton/workbenchButton.vue";
import MyItemListButton from "../../components/navigationButton/myItemListButton.vue";
import MySoldButton from "../../components/navigationButton/mySoldButton.vue";
import MyOrderButton from "../../components/navigationButton/myOrderButton.vue";
import MoneyMade from "../../components/user/moneyMade.vue";
import MySettingButton from "../../components/navigationButton/me/mySettingButton.vue";

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
    MoneyMade,
    MySettingButton,
  },
  computed: {
    userProfile() {
      return this.$store.state.userProfile.profile;
    },
  },
  mounted() {
    this.$appStateService.getBuyerPendingOrder();
    this.$appStateService.getSellerPendingOrder();
  },
  refresh() {
    this.$appStateService.getBuyerPendingOrder({ force: true });
    this.$appStateService.getSellerPendingOrder({ force: true });
  },
};
</script>

<style lang="scss" scoped>
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