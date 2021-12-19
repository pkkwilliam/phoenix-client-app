<template>
  <view>
    <application-navigation-bar title="工作台PRO" />
    <view class="negative-margin-spacer" />
    <view class="container">
      <view class="card top-card-container">
        <text class="h2 black bold">玩家工作台</text>
        <view class="space-around-center-container medium-margin-top-spacer">
          <view>
            <user-card :user="userProfile" />
          </view>
          <view class="medium-margin-left-spacer">
            <my-state />
          </view>
        </view>
        <view class="medium-margin-top-spacer">
          <workbench-create-item-button />
        </view>
        <view class="medium-margin-top-spacer">
          <workbench-add-bank-account-button />
        </view>
        <view class="medium-margin-top-spacer">
          <workbench-cashout-button />
        </view>
      </view>
      <view class="card medium-margin-top-spacer">
        <view class="space-between-center-container">
          <text class="h3 black bold">賣在摸魚</text>
          <money-made />
        </view>
        <view class="space-around-center-container medium-margin-top-spacer">
          <my-item-list-button />
          <my-sold-button />
        </view>
        <view class="medium-margin-top-spacer">
          <shipment-pending-alert-rows />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import ApplicationNavigationBar from "../common/navigation/applicationNavigationBar.vue";
import UserCard from "../common/user/userCard.vue";
import MyState from "../components/me/myState.vue";
import ShipmentPendingAlertRows from "../components/myOrder/shipmentPendingAlert/shipmentPendingAlertRows.vue";
import WorkbenchAddBankAccountButton from "../components/navigationButton/bank/workbenchAddBankAccountButton.vue";
import WorkbenchCashoutButton from "../components/navigationButton/bank/workbenchCashoutButton.vue";
import WorkbenchCreateItemButton from "../components/navigationButton/item/workbenchCreateItemButton.vue";
import MyItemListButton from "../components/navigationButton/myItemListButton.vue";
import MySoldButton from "../components/navigationButton/mySoldButton.vue";
import moneyMade from "../components/user/moneyMade.vue";
export default {
  components: {
    moneyMade,
    ShipmentPendingAlertRows,
    MyItemListButton,
    MySoldButton,
    ApplicationNavigationBar,
    UserCard,
    MyState,
    WorkbenchCreateItemButton,
    WorkbenchAddBankAccountButton,
    WorkbenchCashoutButton,
  },
  computed: {
    userProfile() {
      return this.$store.state.userProfile.profile;
    },
  },
  mounted() {
    this.$appStateService.getSellerPendingOrder();
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 20rpx;
  padding-right: 20rpx;
}
.top-card-container {
  margin-top: -100rpx;
}
.negative-margin-spacer {
  background-color: $u-phoenix-primary;
  height: 100rpx;
}
</style>