<template>
  <view class="safe-area-inset-bottom">
    <u-input
      placeholder="請選擇銀行"
      type="select"
      v-model="label"
      @click="show = true"
    />
    <u-select
      confirm-text="確認"
      v-model="show"
      :list="transformBankAccounts"
      @confirm="onSelect"
    />
  </view>
</template>

<script>
import { getBankLabelByKey } from "../../enum/bank";
export default {
  computed: {
    transformBankAccounts() {
      return this.bankAccounts.map((bankAccount) => ({
        value: bankAccount,
        label: this.getBankAccountLabel(bankAccount),
      }));
    },
  },
  data() {
    return { show: false, label: undefined };
  },
  methods: {
    getBankAccountLabel(bankAccount) {
      const { bank, beneficialName, beneficialAccountNumber } = bankAccount;
      const bankLabel = getBankLabelByKey(bank);
      return `${beneficialName} ${bankLabel}-${beneficialAccountNumber}`;
    },
    onSelect(bankAccount) {
      const account = bankAccount[0].value;
      const label = bankAccount[0].label;
      this.label = label;
      this.$emit("onSelect", account);
    },
  },
  props: {
    bankAccounts: {
      default: [],
      type: Array,
    },
  },
};
</script>