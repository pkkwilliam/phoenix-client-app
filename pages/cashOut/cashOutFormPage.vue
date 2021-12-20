<template>
  <view>
    <view class="container">
      <view class="card column-container medium-margin-top-spacer">
        <text>現有餘額</text>
        <view>
          <u-icon
            class="icon-container"
            custom-prefix="phoenix-custom-icon"
            name="dollar"
            size="58"
            :top="-5"
          />
          <text class="balance">{{ balance }}</text>
        </view>
      </view>
      <view class="card medium-margin-top-spacer">
        <view>
          <text class="h4 black bold">提取金額</text>
        </view>
        <u-input placeholder="請輸入提取金額" type="number" v-model="amount" />
        <view class="medium-margin-top-spacer">
          <text class="h4 black bold">收款賬戶</text>
          <dropdown-selectable-bank-account
            :bankAccounts="bankAccounts"
            @onSelect="onSelectToBankAccount"
          />
        </view>
      </view>
    </view>
    <view class="cu-bar foot sticky-bottom-container">
      <primary-button label="提交" @click="onClickSubmit" />
    </view>
  </view>
</template>

<script>
import dropdownSelectableBankAccount from "../../common/bank/dropdownSelectableBankAccount.vue";
import PrimaryButton from "../../common/button/primaryButton.vue";
import { CASH_OUT_HISTORY_PAGE } from "../../route/applicationRoute";
import { CREATE_CASH_OUT } from "../../service/service";
export default {
  components: { dropdownSelectableBankAccount, PrimaryButton },
  computed: {
    balance() {
      return this.$store.state.userProfile.profile.balance;
    },
    bankAccounts() {
      return this.$store.state.bankAccount.content;
    },
  },
  data() {
    return { amount: undefined, toBankAccountId: undefined };
  },
  methods: {
    async onClickSubmit() {
      const { amount, toBankAccountId } = this;
      const response = await this.execute(
        CREATE_CASH_OUT({
          amount,
          toBankAccount: {
            id: toBankAccountId,
          },
        })
      );
      await this.$appStateService.getUserProfile({ force: true });
      uni.redirectTo({ url: CASH_OUT_HISTORY_PAGE().url });
    },
    onSelectToBankAccount(toBankAccountId) {
      this.toBankAccountId = toBankAccountId;
    },
  },
  mounted() {
    this.$appStateService.getBankAccount();
    this.$appStateService.getUserProfile();
  },
};
</script>

<style lang="scss" scoped>
.balance {
  font-size: 38px;
  font-weight: 600;
}
</style>