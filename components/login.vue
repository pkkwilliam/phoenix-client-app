<template>
  <view>
    <u-form ref="uForm">
      <u-form-item label="電話" labelPosition="top">
        <u-input
          type="select"
          :value="countryCodes[selectedCountryCodeIndex].text"
          @click="onClickSelectCountryCodeDropdown"
        />
        <u-input
          placeholder="請輸入你的手機號"
          type="number"
          v-model="smsNumber"
        />
      </u-form-item>
      <u-form-item label="密碼" labelPosition="top">
        <u-input
          placeholder="請輸入登錄密碼"
          type="password"
          v-model="password"
        />
      </u-form-item>
      <u-button
        type="primary"
        :disabled="sumbitButtonDisabled"
        @click="onClickLogin"
      >
        登錄
      </u-button>
      <u-action-sheet
        :list="countryCodes"
        v-model="show"
        @click="onSelectCountryCode"
      />
    </u-form>
  </view>
</template>

<script>
import { LOGIN, REQUEST_VERIFICATION } from "../service/service";
import { COUNTRY_CODES } from "../common/countryCodes";
import { startWebsocket } from "../util/chatUtil";
export default {
  components: {},
  computed: {
    countryCodes() {
      return COUNTRY_CODES;
    },
    requestVerificationButtonDisabled() {
      return this.messageResetCountDown > 0;
    },
    requestVerificationButtonLabel() {
      return this.messageResetCountDown <= 0
        ? "獲取驗證碼"
        : `重新獲取(${this.messageResetCountDown})`;
    },
    sumbitButtonDisabled() {
      const { password, smsNumber } = this;
      return !smsNumber || !password;
    },
  },
  data() {
    return {
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
      const { countryCodes, selectedCountryCodeIndex, smsNumber } = this;
      uni.login({
        provider: "weixin",
        success: (info) => {
          this.wechatOneTimeCode = info.code;
        },
      });
      this.execute(
        REQUEST_VERIFICATION({
          countryCode: countryCodes[selectedCountryCodeIndex].value,
          smsNumber,
        })
      ).then((response) => this.startCountDown());
    },
    onClickSelectCountryCodeDropdown() {
      this.show = !this.show;
    },
    onSelectCountryCode(index) {
      this.selectedCountryCodeIndex = index;
    },
    async onClickLogin() {
      const { password, selectedCountryCodeIndex, smsNumber } = this;
      const requestBody = {
        countryCode: COUNTRY_CODES[selectedCountryCodeIndex].value,
        password,
        smsNumber,
      };
      this.execute(LOGIN(requestBody))
        .then((userProfile) => {
          this.$store.commit("setUserProfile", userProfile);
          this.$appStateService.getStatusSummary();
          startWebsocket(this.execute, this.$store);
          uni.navigateBack();
        })
        .catch(() => {});
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

<style lang="scss" scoped></style>
