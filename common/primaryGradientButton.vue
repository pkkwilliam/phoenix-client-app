<template>
  <u-button class="button" shape="circle">{{ label }}</u-button>
</template>

<script>
export default {
  props: {
    label: {
      default: "提交",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  color: #ffffff;
  background-color: $u-phoneix-primary;
}
</style>