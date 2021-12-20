<template>
  <view class="space-between-center-container">
    <view class="row-center-container">
      <u-icon
        custom-prefix="phoenix-custom-icon"
        name="bank-account"
        size="38"
      />
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
import { BANK_ACCOUNT_FORM_PAGE } from "../../../route/applicationRoute";
export default {
  components: { borderButton },
  methods: {
    onClick() {
      uni.navigateTo({ url: BANK_ACCOUNT_FORM_PAGE().url });
    },
  },
};
</script>