<template>
  <u-tag type="warning" :text="discountText" />
</template>

<script>
export default {
  computed: {
    discountText() {
      return `購入價${this.value}折`;
    },
  },
  props: { value: Number },
};
</script>

<style lang="scss" scoped>
</style>