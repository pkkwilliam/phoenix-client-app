<template>
  <view>
    <u-icon
      custom-prefix="phoenix-custom-icon"
      :color="selected ? $styles.primary : $styles.secondary"
      :name="selected ? 'check-fill' : 'uncheck'"
      :size="selected ? 56 : 48"
    />
  </view>
</template>

<script>
export default {
  props: {
    selected: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
