<template>
  <u-button
    class="custom-style"
    shape="circle"
    type="primary"
    @click="$emit('click')"
    >{{ label }}</u-button
  >
</template>

<script>
export default {
  computed: {},
  props: {
    label: {
      default: "提交",
      type: String,
    },
    size: {},
  },
};
</script>

<style lang="scss" scoped>
.custom-style {
  width: 100%;
}
</style>