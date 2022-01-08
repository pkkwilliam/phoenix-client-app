<template>
  <view>
    <application-navigation-bar
      :backgroundColor="$styles.darkOrange"
      :isBack="false"
    />
    <view class="column-center-container top-container">
      <view class="row-center-container">
        <u-icon
          name="checkmark-circle-fill small-margin-right-spacer"
          size="38"
          :color="$styles.white"
        />
        <text class="h2 white lightly-bold">交易成功</text>
      </view>
      <view class="row-center-container medium-margin-top-spacer">
        <border-button
          class="medium-margin-right-spacer"
          label="返回首頁"
          :backgroundColor="$styles.darkOrange"
          :color="$styles.white"
          @onClick="onClickToHomePage"
        />
        <border-button
          class="medium-margin-left-spacer"
          label="我買到的"
          :backgroundColor="$styles.darkOrange"
          :color="$styles.white"
          @onClick="onClickToMyOrders"
        />
      </view>
    </view>
  </view>
</template>

<script>
import BorderButton from "../../common/button/borderButton.vue";
import applicationNavigationBar from "../../common/navigation/applicationNavigationBar.vue";
import { LANDING_TAB, MY_ORDER_PAGE } from "../../route/applicationRoute";
export default {
  components: { applicationNavigationBar, BorderButton },
  methods: {
    onClickToHomePage() {
      uni.reLaunch({ url: LANDING_TAB().url });
    },
    onClickToMyOrders() {
      this.$appStateService.getBuyerPendingOrder({ force: true });
      uni.reLaunch({ url: LANDING_TAB().url });
      uni.navigateTo({ url: MY_ORDER_PAGE().url });
    },
  },
  props: {
    order: Object,
  },
};
</script>

<style lang="scss" scoped>
.top-container {
  background-color: $u-phoenix-dark-orange;
  padding: 38rpx;
}
</style>