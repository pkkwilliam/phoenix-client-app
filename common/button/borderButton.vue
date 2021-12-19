<template>
  <view>
    <u-button
      hover-class="none"
      shape="circle"
      :custom-style="customStyle"
      :size="size"
      @click="$emit('onClick')"
    >
      {{ label }}
    </u-button>
  </view>
</template>

<script>
export default {
  computed: {
    customStyle() {
      const { darkOrange, white } = this.$styles;
      return {
        backgroundColor: this.backgroundColor
          ? this.backgroundColor
          : darkOrange,
        color: this.color ? this.color : white,
      };
    },
  },
  props: {
    backgroundColor: undefined,
    color: undefined,
    label: String,
    size: {
      default: "medium",
      type: String,
    },
  },
};
</script>

