<template>
  <view class="row-center-container tooltips">
    <u-icon name="info-circle" size="38" :color="$styles.orange" />
    <view class="small-margin-left-spacer">
      <text class="orange">{{ label }}</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scoped>
.tooltips {
  background-color: $u-type-warning-light;
  border-radius: 20px;
  width: fit-content;
}
</style>