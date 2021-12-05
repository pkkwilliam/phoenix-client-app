<template>
  <view class="align-center-container" @click="onClick">
    <u-icon name="home" size="28" />
    <text class="h5 secondary">{{ text }}</text>
  </view>
</template>

<script>
import { USER_POST_PAGE } from "../../route/applicationRoute";
export default {
  computed: {
    text() {
      return "我的發布 3";
    },
  },
  methods: {
    onClick() {
      uni.navigateTo({ url: USER_POST_PAGE().url });
    },
  },
};
</script>