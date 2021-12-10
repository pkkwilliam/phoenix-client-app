<template>
  <view class="space-between-center-container">
    <text class="h4 black lightly-bold">收件人</text>
    <text class="h5 secondary">{{ phoenNumber }}</text>
  </view>
</template>

<script>
import { GET_BUYER_INFO } from "../../service/service";
export default {
  computed: {
    name() {
      const { name, nickname } = this.userInfo;
      return (name ? name : nickname) + "先生/小姐";
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