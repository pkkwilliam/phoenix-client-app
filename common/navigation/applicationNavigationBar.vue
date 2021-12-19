<template>
  <u-navbar
    :background="navigationBarBackgroundColor"
    :back-icon-color="$styles.black"
    :border-bottom="false"
    :isBack="isBack"
    :title="title"
    :title-color="$styles.black"
  >
  </u-navbar>
</template>

<script>
export default {
  computed: {
    navigationBarBackgroundColor() {
      return {
        backgroundColor: this.backgroundColor
          ? this.backgroundColor
          : this.$styles.primary,
      };
    },
  },
  props: {
    backgroundColor: undefined,
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