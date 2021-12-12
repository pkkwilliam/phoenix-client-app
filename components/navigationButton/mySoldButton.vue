<template>
  <view class="column-center-container" @click="onClick">
    <u-icon name="home" size="28" />
    <text class="h5 secondary">{{ text }}</text>
  </view>
</template>

<script>
import { MY_SOLD_PAGE } from "../../route/applicationRoute";
export default {
  computed: {
    text() {
      return "我賣出的 3";
    },
  },
  methods: {
    onClick() {
      uni.navigateTo({ url: MY_SOLD_PAGE().url });
    },
  },
};
</script>