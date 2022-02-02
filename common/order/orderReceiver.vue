<template>
  <view>
    <text class="h4 black lightly-bold">收件人</text>
    <view>
      <view class="space-between-center-container">
        <text class="h5 secondary">暱稱</text>
        <text class="h5 secondary">{{ name }}</text>
      </view>
      <view class="space-between-center-container">
        <text class="h5 secondary">電話</text>
        <text class="h5 secondary">{{ phoenNumber }}</text>
      </view>
    </view>
  </view>
</template>

<script>
import { GET_BUYER_INFO } from "../../service/service";
export default {
  computed: {
    name() {
      const { name, nickname } = this.userInfo;
      return name ? name : nickname;
    },
    phoenNumber() {
      const { countryCode, smsNumber } = this.userInfo;
      return `(${countryCode}) ${smsNumber}`;
    },
  },
  data() {
    return { userInfo: {} };
  },
  mounted() {
    this.execute(GET_BUYER_INFO(this.order.id)).then(
      (response) => (this.userInfo = response)
    );
  },
  props: { order: Object },
};
</script>

<style scoped>
</style>