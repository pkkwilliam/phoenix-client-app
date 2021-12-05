<template>
  <u-button shape="circle" type="primary" @click="$emit('click')">{{
    label
  }}</u-button>
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
</style>