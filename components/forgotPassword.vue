<template>
  <view style="padding: 10px">
    <u-form :model="form" ref="uForm">
      <u-form-item label="電話" labelPosition="top">
        <u-input
          :value="countryCodes[selectedCountryCodeIndex].text"
          type="select"
          @click="onClickSelectCountryCodeDropdown"
        />
        <u-input
          placeholder="請輸入你的手機號"
          slot="right"
          v-model="smsNumber"
          :type="text"
        />
        <u-button
          :disabled="requestVerificationButtonDisabled"
          size="mini"
          slot="right"
          type="success"
          @click="onClickRequestVerify"
          >{{ requestVerificationButtonLabel }}</u-button
        >
      </u-form-item>
      <u-form-item label="驗證碼" labelPosition="top">
        <u-input placeholder="請輸入由信息驗證碼" v-model="oneTimePassword" />
      </u-form-item>
      <u-form-item label="密碼" labelPosition="top">
        <u-input
          placeholder="請輸入登錄密碼"
          type="password"
          v-model="password"
        />
      </u-form-item>
      <u-form-item label="確認密碼" labelPosition="top">
        <u-input
          placeholder="請重新輸入登錄密碼"
          type="password"
          v-model="passwordConfirm"
        />
      </u-form-item>
      <u-button
        :disabled="sumbitButtonDisabled"
        type="primary"
        @click="onClickVerify"
        >找回賬號</u-button
      >
      <u-action-sheet
        :list="countryCodes"
        v-model="show"
        @click="onSelectCountryCode"
      />
    </u-form>
  </view>
</template>

<script>
import UActionSheet from "../uview-ui/components/u-action-sheet/u-action-sheet.vue";
import UButton from "../uview-ui/components/u-button/u-button.vue";
import uFormItem from "../uview-ui/components/u-form-item/u-form-item.vue";
import UInput from "../uview-ui/components/u-input/u-input.vue";
import {
  FORGOT_PASSWORD_REQUEST_VERIFICATION,
  FORGOT_PASSWORD_VERIFY,
} from "../service/service";
import { COUNTRY_CODES } from "../common/countryCodes";
import { LANDING_TAB } from "../route/applicationRoute";
export default {
  components: { uFormItem, UInput, UActionSheet, UButton },
  computed: {
    countryCodes() {
      return COUNTRY_CODES;
    },
    requestVerificationButtonDisabled() {
      return (
        this.messageResetCountDown > 0 || this.disableRequestVerificationButton
      );
    },
    requestVerificationButtonLabel() {
      return this.messageResetCountDown <= 0
        ? "獲取驗證碼"
        : `重新獲取(${this.messageResetCountDown})`;
    },
    sumbitButtonDisabled() {
      const { oneTimePassword, password, passwordConfirm, smsNumber } = this;
      return !smsNumber || !oneTimePassword || !password || !passwordConfirm;
    },
  },
  data() {
    return {
      disableRequestVerificationButton: false,
      messageResetCountDown: 0,
      oneTimePassword: "",
      password: "",
      passwordConfirm: "",
      selectedCountryCodeIndex: 0,
      show: false,
      smsNumber: "",
    };
  },
  methods: {
    onClickRequestVerify() {
      this.disableRequestVerificationButton = true;
      const { countryCodes, selectedCountryCodeIndex, smsNumber } = this;
      this.execute(
        FORGOT_PASSWORD_REQUEST_VERIFICATION({
          countryCode: countryCodes[selectedCountryCodeIndex].value,
          smsNumber,
        })
      )
        .then((response) => this.startCountDown())
        .finally(() => (this.disableRequestVerificationButton = false));
    },
    onClickSelectCountryCodeDropdown() {
      this.show = !this.show;
    },
    onSelectCountryCode(index) {
      this.selectedCountryCodeIndex = index;
    },
    async onClickVerify() {
      const {
        countryCodes,
        oneTimePassword,
        password,
        passwordConfirm,
        selectedCountryCodeIndex,
        smsNumber,
      } = this;
      if (password !== passwordConfirm) {
        uni.showToast({
          icon: "error",
          title: "密碼不一致",
        });
      } else {
        this.execute(
          FORGOT_PASSWORD_VERIFY({
            countryCode: COUNTRY_CODES[selectedCountryCodeIndex].value,
            oneTimePassword,
            password,
            smsNumber,
          })
        ).then((userProfile) => {
          this.$store.commit("setUserProfile", userProfile);
          uni.redirectTo({
            url: LANDING_TAB().url,
          });
        });
      }
    },
    startCountDown() {
      this.messageResetCountDown = 60;
      const interval = setInterval(() => {
        if (this.messageResetCountDown <= 0) {
          interval.clear();
        }
        this.messageResetCountDown--;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
