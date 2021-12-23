<template>
  <view @click="onClick">
    <text class="blue">運費計算器</text>
  </view>
</template>

<script>
import { SHIPPING_COST_ESTIMATE_PAGE } from "../../../route/applicationRoute";
export default {
  methods: {
    onClick() {
      uni.navigateTo({ url: SHIPPING_COST_ESTIMATE_PAGE().url });
    },
  },
};
</script>