<template>
  <view>
    <view class="medium-margin-top-spacer">
      <text class="h4 black bold">舊密碼</text>
      <u-input placeholder="請輸入舊密碼" type="password" v-model="password" />
    </view>
    <view class="medium-margin-top-spacer">
      <text class="h4 black bold">新密碼</text>
      <u-input placeholder="請輸新密碼" type="password" v-model="newPassword" />
    </view>
    <view class="medium-margin-top-spacer">
      <text class="h4 black bold">確認新密碼</text>
      <u-input
        placeholder="請輸新密碼"
        type="password"
        v-model="newPassword2"
      />
    </view>
    <view class="medium-margin-top-spacer">
      <primary-button
        :disabled="disabledPrimaryButton"
        :loading="loading"
        @onClick="onClickSubmit"
      />
    </view>
  </view>
</template>

<script>
import primaryButton from "../../common/button/primaryButton.vue";
import { UPDATE_USER_PASSWORD } from "../../service/service";
export default {
  components: { primaryButton },
  computed: {
    disabledPrimaryButton() {
      const { password, newPassword, newPassword2 } = this;
      if (!password || !newPassword) {
        return true;
      } else if (newPassword !== newPassword2) {
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      loading: false,
      password: undefined,
      newPassword: undefined,
      newPassword2: undefined,
    };
  },
  methods: {
    async onClickSubmit() {
      this.loading = true;
      try {
        await new Promise((resolve) => setTimeout(() => resolve(), 1000));
        const requestBody = {
          password: this.password,
          newPassword: this.newPassword,
        };
        await this.execute(UPDATE_USER_PASSWORD(requestBody));
        uni.showToast({ title: "更改成功" });
        uni.navigateBack();
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>