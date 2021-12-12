<template>
  <u-button
    shape="circle"
    type="primary"
    :custom-style="{ margin: '0px' }"
    :size="size"
    @click="onClick"
    >{{ label }}</u-button
  >
</template>

<script>
export default {
  computed: {
    label() {
      return "關注";
    },
  },
  methods: {
    onClick() {
      uni.showToast({
        icon: "none",
        title: "關注功能未來開放",
      });
    },
  },
  props: {
    fullWidth: {},
    size: {
      default: "medium",
      type: String,
    },
    user: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>