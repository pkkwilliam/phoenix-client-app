<template>
  <u-button
    class="custom-style"
    shape="circle"
    type="info"
    :disabled="disabled"
    :hairLine="true"
    :loading="loading"
    :size="size"
    @click="$emit('onClick')"
  >
    {{ label }}</u-button
  >
</template>

<script>
export default {
  computed: {},
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
    label: {
      default: "提交",
      type: String,
    },
    loading: {
      default: false,
      type: Boolean,
    },
    size: {
      default: "default",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-style {
  color: black;
  background-color: $u-phoenix-primary;
  margin: 0px;
  width: inherit;
}
</style>