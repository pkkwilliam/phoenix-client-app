<template>
  <u-button
    class="primary-gradient-button application-shadow button"
    shape="circle"
    :disabled="disabled"
    @click="$emit('click')"
  >
    {{ label }}
  </u-button>
</template>

<script>
export default {
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
    label: {
      default: "提交",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  margin: 0px;
}
</style>