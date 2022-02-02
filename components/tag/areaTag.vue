<template>
  <view class="row-center-container tag-background">
    <u-icon
      class="icon-container orange"
      custom-prefix="phoenix-custom-icon"
      name="location"
      size="38"
    />
    <text class="orange">{{ value }}</text>
  </view>
</template>

<script>
export default {
  props: {
    value: String,
  },
};
</script>

<style scoped lang="scss">
.tag-background {
  background-color: $u-type-warning-light;
  border-radius: 8px;
  padding-left: 6px;
  padding-right: 6px;
  width: max-content;
}
</style>