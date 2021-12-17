<template>
  <text class="h4 secondary" @click="onClick">登出</text>
</template>

<script>
import { LANDING_TAB } from "../../../route/applicationRoute";
export default {
  methods: {
    onClick() {
      this.logout();
      uni.navigateTo({ url: LANDING_TAB().url });
    },
  },
};
</script>
