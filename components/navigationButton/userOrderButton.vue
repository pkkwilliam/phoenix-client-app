<template>
  <view class="align-center-container" @click="onClick">
    <u-icon name="home" size="28" />
    <text class="h5 secondary">{{ text }}</text>
  </view>
</template>

<script>
import { MY_ORDER_PAGE } from "../../route/applicationRoute";
export default {
  computed: {
    text() {
      return "我買到的 3";
    },
  },
  methods: {
    onClick() {
      uni.navigateTo({ url: MY_ORDER_PAGE().url });
    },
  },
};
</script>