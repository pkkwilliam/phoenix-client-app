<template>
  <view>
    <view class="container">
      <view
        class="space-between-center-container card medium-margin-top-spacer"
        v-for="(bank, index) in bankAccounts"
        :key="index"
      >
        <view class="column-container" @click="onSelectBankAccount(bank)">
          <text class="h4 black bold">{{ `${bank.beneficialName}` }}</text>
          <view class="mini-margin-top-spacer">
            <text class="h4 secondary">{{
              `${getBankLabel(bank.bank)} ${bank.beneficialAccountNumber}`
            }}</text>
          </view>
        </view>
        <view @click="onClickBankAccount(bank)">
          <u-icon
            class="arrow-right"
            name="arrow-right"
            color="#a3a3a3"
            :size="26"
          />
        </view>
      </view>
    </view>
    <view class="cu-bar foot container">
      <primary-button label="添加銀行賬戶" @click="onClickCreateBankAccount" />
    </view>
  </view>
</template>

<script>
import primaryButton from "../../common/button/primaryButton.vue";
import { getBankLabelByKey } from "../../enum/bank";
import { BANK_ACCOUNT_FORM_PAGE } from "../../route/applicationRoute";

export default {
  components: { primaryButton },
  computed: {
    bankAccounts() {
      return this.$store.state.bankAccount.content;
    },
  },
  methods: {
    getBankLabel(key) {
      return getBankLabelByKey(key);
    },
    onClickBankAccount(bankAccount) {
      uni.navigateTo({ url: BANK_ACCOUNT_FORM_PAGE(bankAccount).url });
    },
    onClickCreateBankAccount() {
      uni.navigateTo({ url: BANK_ACCOUNT_FORM_PAGE().url });
    },
    onSelectBankAccount(bank) {
      this.$emit("onSelect", bank);
    },
  },
  mounted() {
    this.$appStateService.getBankAccount();
  },
};
</script>

<style scoped>
</style>