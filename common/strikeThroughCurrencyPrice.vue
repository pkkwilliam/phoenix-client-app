<template>
  <view class="row-center-container item-detail-container secondary">
    <u-icon
      class="icon-container"
      custom-prefix="phoenix-custom-icon"
      name="dollar"
      size="22"
      :top="0"
    />
    <text>{{ value }}</text>
  </view>
</template>

<script>
export default {
  computed: {},
  props: {
    value: {
      default: 0,
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.item-detail-container {
  text-decoration-line: line-through;
  text-decoration-thickness: 3px;
}
</style>