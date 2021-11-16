<template>
  <u-button>{{ label }}</u-button>
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
.container {
  color: "blue";
}
</style>