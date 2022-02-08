<template>
  <view class="space-between-center-container">
    <view class="row-center-container">
      <view class="row-center-container small-margin-left-spacer">
        <display-currency-mop :value="amount" />
        <text>可以提取</text>
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
import DisplayCurrencyMop from "../../../common/displayCurrency/displayCurrencyMop.vue";
import { CASH_OUT_TYPE_CASH } from "../../../enum/cashOutType";
import {
  BANK_ACCOUNT_FORM_PAGE,
  CASH_OUT_PAGE,
} from "../../../route/applicationRoute";
export default {
  components: { borderButton, DisplayCurrencyMop },
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
        uni.navigateTo({ url: CASH_OUT_PAGE(CASH_OUT_TYPE_CASH.key).url });
      }
    },
  },
};
</script>