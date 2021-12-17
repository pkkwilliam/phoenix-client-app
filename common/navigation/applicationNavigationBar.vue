<template>
  <u-navbar
    :background="navigationBarBackgroundColor"
    :back-icon-color="titleColor"
    :isBack="isBack"
    :title="title"
    :title-color="titleColor"
  >
  </u-navbar>
</template>

<script>
import styles from "../../uview-ui/theme.js";
export default {
  computed: {
    titleColor() {
      return styles.black;
    },
    navigationBarBackgroundColor() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },
  props: {
    backgroundColor: {
      default: styles.primary,
      type: String,
    },
    isBack: {
      default: true,
      type: Boolean,
    },
    title: {
      default: "",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>