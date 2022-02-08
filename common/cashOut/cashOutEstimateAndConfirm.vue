<template>
  <view class="column-container">
    <view class="column-center-center-container">
      <!-- <text>提款</text> -->
      <view class="cash-out-container">
        <u-icon
          class="icon-container"
          custom-prefix="phoenix-custom-icon"
          name="dollar"
          size="38"
          :top="-8"
        />
        <text class="cash-out-mop">
          {{ cashOutEstimate.cashOutMop.toFixed(2) }}
        </text>
      </view>
    </view>
    <application-line-breaker />
    <view class="large-margin-top-spacer">
      <view class="space-between-center-container">
        <text class="h5 secondary">手續費 </text>
        <text class="h4 black"
          >$ {{ cashOutEstimate.commissionFee.toFixed(2) }}</text
        >
      </view>
    </view>
    <view class="medium-margin-top-spacer">
      <view class="space-between-center-container">
        <text class="h5 secondary">費率</text>
        <text class="h4 black">{{ commissionFeeRate.toFixed(2) }}%</text>
      </view>
    </view>
    <view class="medium-margin-top-spacer full-width">
      <u-button type="success" @click="onClickSubmit">提款</u-button>
    </view>
  </view>
</template>

<script>
import ApplicationLineBreaker from "../../components/applicationLineBreaker.vue";
import { CASH_OUT_HISTORY_PAGE } from "../../route/applicationRoute";
import { CREATE_CASH_OUT, GET_CASH_OUT_ESTIMATE } from "../../service/service";
import uButton from "../../uview-ui/components/u-button/u-button.vue";
import CurrencyRatio from "../currencyRatio/currencyRatio.vue";
export default {
  components: { uButton, CurrencyRatio, ApplicationLineBreaker },
  computed: {
    commissionFeeRate() {
      return this.cashOutEstimate.commissionFeeRate * 100;
    },
  },
  data() {
    return { cashOutEstimate: {} };
  },
  methods: {
    async getCashOutEstimate() {
      const cashOutEstimate = await this.execute(
        GET_CASH_OUT_ESTIMATE(this.cashOutType, this.cashOutValue)
      );
      this.cashOutEstimate = cashOutEstimate;
    },
    async onClickSubmit() {
      const response = await this.execute(
        CREATE_CASH_OUT({
          amount: this.cashOutValue,
          cashOutType: this.cashOutType,
          toBankAccount: this.toBankAccount,
        })
      );
      await this.$appStateService.getUserProfile({ force: true });
      uni.redirectTo({ url: CASH_OUT_HISTORY_PAGE().url });
    },
  },
  props: {
    cashOutType: String,
    cashOutValue: String,
    toBankAccount: Object,
  },
};
</script>

<style lang="scss" scoped>
.cash-out-container {
  padding-bottom: 38rpx;
  padding-top: 38rpx;
}
.cash-out-mop {
  font-size: 78rpx;
}
</style>