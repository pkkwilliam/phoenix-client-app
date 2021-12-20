<template>
  <view>
    <u-input
      placeholder="請選擇銀行"
      type="select"
      v-model="value"
      @click="show = true"
    />
    <u-select
      confirm-text="確認"
      v-model="show"
      :list="banks"
      @confirm="onSelect"
    />
  </view>
</template>

<script>
import {
  BANK_BNU_MACAU,
  BANK_LUSO_MACAU,
  BANK_BOC_MACAU,
  BANK_ICBC_MACAU,
  BANK_TAI_FUNG_MACAU,
  getBankLabelByKey,
} from "../../enum/bank";
export default {
  computed: {
    banks() {
      return [
        BANK_BNU_MACAU,
        BANK_LUSO_MACAU,
        BANK_BOC_MACAU,
        BANK_ICBC_MACAU,
        BANK_TAI_FUNG_MACAU,
      ].map((bank) => ({ ...bank, value: bank.key }));
    },
    value() {
      return getBankLabelByKey(this.bank);
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onSelect(bank) {
      // u-select will only return value and label, we transform the value in computed
      this.$emit("onSelect", bank[0].value);
    },
  },
  props: {
    bank: {
      default: undefined,
      type: String,
    },
  },
};
</script>