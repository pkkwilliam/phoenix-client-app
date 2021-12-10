<template>
  <view class="container">
    <forgot-password />
  </view>
</template>


<script>
import ForgotPassword from "../components/forgotPassword.vue";

export default {
  components: { ForgotPassword },
  computed: {
    getAppName() {
      return this.appLabel.appName;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20rpx;
}
</style>