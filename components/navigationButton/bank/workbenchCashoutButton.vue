<template>
  <view class="space-between-center-container">
    <view class="row-center-container">
      <u-icon custom-prefix="phoenix-custom-icon" name="dollar-bag" size="38" />
      <view class="small-margin-left-spacer">
        <text>{{ `$${amount}現金可以提取` }}</text>
      </view>
    </view>
    <border-button
      label="去提取"
      size="mini"
      :backgroundColor="$styles.white"
      :color="$styles.darkOrange"
      @onClick="onClick"
    />
  </view>
</template>

<script>
import borderButton from "../../../common/button/borderButton.vue";
import {
  BANK_ACCOUNT_FORM_PAGE,
  CASH_OUT_PAGE,
} from "../../../route/applicationRoute";
export default {
  components: { borderButton },
  computed: {
    amount() {
      return this.$store.state.userProfile.profile.balance;
    },
  },
  methods: {
    onClick() {
      if (this.$store.state.bankAccount.content < 1) {
        uni.navigateTo({ url: BANK_ACCOUNT_FORM_PAGE().url });
      } else {
        uni.navigateTo({ url: CASH_OUT_PAGE().url });
      }
    },
  },
};
</script>