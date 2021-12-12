<template>
  <u-navbar
    :background="navigationBarBackgroundColor"
    :back-icon-color="titleColor"
    :title="title"
    :title-color="titleColor"
  >
  </u-navbar>
</template>

<script>
import styles from "../../uview-ui/theme.scss";
export default {
  computed: {
    titleColor() {
      return styles.black;
    },
    navigationBarBackgroundColor() {
      return {
        backgroundColor: styles.primary,
      };
    },
  },
  props: {
    title: {
      default: "",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>