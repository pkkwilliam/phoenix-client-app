<template>
  <view class="space-between-center-container">
    <view class="row-center-container">
      <u-icon name="home" :size="40" />
      <view class="small-margin-left-spacer">
        <text>未有提取現金的銀行賬戶</text>
      </view>
    </view>
    <border-button
      label="去完善"
      size="mini"
      :backgroundColor="$styles.white"
      :color="$styles.darkOrange"
      @onClick="onClick"
    />
  </view>
</template>

<script>
import borderButton from "../../../common/button/borderButton.vue";
import { MY_BANK_ACCOUNT_PAGE } from "../../../route/applicationRoute";
export default {
  components: { borderButton },
  methods: {
    onClick() {
      uni.navigateTo({ url: MY_BANK_ACCOUNT_PAGE().url });
    },
  },
};
</script>